'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiStar, FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi'
import { Product } from '@/types'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const [isAdding, setIsAdding] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, 1)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // In a real app, this would persist to localStorage or backend
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.origin + `/products/${product.id}`,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback - copy link to clipboard
      navigator.clipboard.writeText(window.location.origin + `/products/${product.id}`)
      alert('Link copied to clipboard!')
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      {/* Wishlist and Share buttons */}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button
          onClick={handleToggleWishlist}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FiHeart 
            className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all"
          aria-label="Share product"
        >
          <FiShare2 className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <Link href={`/products/${product.id}`} className="block relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </Link>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center text-sm text-amber-500">
            <FiStar className="fill-current mr-1" />
            <span>{product.rating}</span>
            <span className="text-gray-400 ml-1">({product.reviews || 0})</span>
          </div>
          {product.discount > 0 && (
            <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
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
          <div>
            <span className="font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
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