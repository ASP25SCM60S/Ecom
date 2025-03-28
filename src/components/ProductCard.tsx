'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiStar, FiShoppingCart } from 'react-icons/fi'
import { Product } from '@/types'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, 1)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.id}`} className="block relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className="p-4">
        <div className="flex items-center text-sm text-amber-500 mb-1">
          <FiStar className="fill-current mr-1" />
          <span>{product.rating}</span>
        </div>
        
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-gray-900 hover:text-primary-600 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !product.inStock}
            className={`btn p-2 rounded-full ${
              !product.inStock
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : isAdding
                ? 'bg-green-500 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
            aria-label="Add to cart"
          >
            <FiShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
} 