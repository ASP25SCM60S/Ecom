import Link from 'next/link'
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fresh Foods</h3>
            <p className="text-gray-600 mb-4">
              Bringing premium food products from around the world to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=fresh" className="text-gray-600 hover:text-primary-600">
                  Fresh Foods
                </Link>
              </li>
              <li>
                <Link href="/products?category=pantry" className="text-gray-600 hover:text-primary-600">
                  Pantry Items
                </Link>
              </li>
              <li>
                <Link href="/products?category=specialty" className="text-gray-600 hover:text-primary-600">
                  Specialty Items
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-primary-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-primary-600">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-primary-600">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fresh Foods. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-primary-600">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 text-sm hover:text-primary-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 