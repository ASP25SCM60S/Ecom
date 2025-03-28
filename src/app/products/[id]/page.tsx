'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiStar, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi'
import { getProductById, getProductsByCategory } from '@/lib/data'
import { useCartStore } from '@/store/cart'
import { ProductGrid } from '@/components/ProductGrid'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore()
  
  if (!product) {
    notFound()
  }
  
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)
    
  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity)
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }
  
  return (
    <div>
      <Link href="/products" className="inline-flex items-center text-gray-500 hover:text-primary-600 mb-8">
        <FiArrowLeft className="mr-2" />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center text-sm text-amber-500 mb-4">
            <FiStar className="fill-current mr-1" />
            <span>{product.rating}</span>
          </div>
          
          <div className="text-2xl font-semibold mb-6">{formatPrice(product.price)}</div>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="mb-8">
            <div className="font-medium mb-2">Quantity</div>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-l-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>
              
              <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                {quantity}
              </div>
              
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-r-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`btn ${
              product.inStock
                ? 'btn-primary'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            } py-3 px-6 w-full mb-4`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          
          {!product.inStock && (
            <p className="text-red-500 text-sm">This product is currently out of stock.</p>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  )
} 