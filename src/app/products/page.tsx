'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ProductGrid } from '@/components/ProductGrid'
import { products, getProductsByCategory, categories } from '@/lib/data'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [filter, setFilter] = useState<string | null>(categoryParam)
  const [sortBy, setSortBy] = useState<string>('default')
  const [filteredProducts, setFilteredProducts] = useState(products)
  
  useEffect(() => {
    setFilter(categoryParam)
  }, [categoryParam])
  
  useEffect(() => {
    let result = filter ? getProductsByCategory(filter) : products
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Keep default order
        break
    }
    
    setFilteredProducts(result)
  }, [filter, sortBy])
  
  const handleCategoryChange = (category: string | null) => {
    setFilter(category)
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Filters and Sort */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !filter ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === category.slug ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      {/* Results */}
      <div>
        <p className="mb-4 text-gray-600">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-gray-500 mt-2">
              Try changing your filters or check back later for new products.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 