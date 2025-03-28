'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '@/store/cart'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCartStore()
  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`block py-2 px-3 rounded-md transition-colors ${
          isActive
            ? 'bg-primary-50 text-primary-700'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {children}
      </Link>
    )
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Fresh Foods
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <div className="flex items-center">
            <Link 
              href="/cart" 
              className="relative p-2 rounded-full hover:bg-gray-100"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-600 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="ml-2 md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 