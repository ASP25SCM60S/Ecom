'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  
  const handleRemoveItem = (productId: string) => {
    removeItem(productId)
  }
  
  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }
  
  const handleCheckout = () => {
    setCheckoutLoading(true)
    // Simulate checkout process
    setTimeout(() => {
      setCheckoutLoading(false)
      alert('This is a demo. In a real app, you would be redirected to a payment page.')
    }, 1500)
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }
  
  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="flex justify-center mb-6">
          <FiShoppingBag size={64} className="text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          href="/products"
          className="btn btn-primary py-3 px-6 inline-flex items-center"
        >
          Start Shopping <FiArrowRight className="ml-2" />
        </Link>
      </div>
    )
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex border rounded-lg p-4 gap-4">
                {/* Product Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <Link href={`/products/${item.product.id}`} className="font-medium text-gray-900 hover:text-primary-600">
                      {item.product.name}
                    </Link>
                    <div className="font-semibold">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-sm mb-2">
                    {formatPrice(item.product.price)} each
                  </div>
                  
                  {/* Quantity and Remove */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={16} />
                      </button>
                      
                      <span className="mx-3">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 flex items-center"
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={16} className="mr-1" />
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice())}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(totalPrice() * 0.1)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{formatPrice(totalPrice() * 1.1)}</span>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="btn btn-primary py-3 px-6 w-full flex items-center justify-center"
            >
              {checkoutLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Proceed to Checkout <FiArrowRight className="ml-2" />
                </>
              )}
            </button>
            
            <div className="mt-6">
              <Link href="/products" className="text-primary-600 hover:text-primary-700 text-sm flex items-center justify-center">
                <FiArrowRight className="mr-2 rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 