import Link from 'next/link'
import Image from 'next/image'
import { ProductGrid } from '@/components/ProductGrid'
import { getFeaturedProducts, categories } from '@/lib/data'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/6] mb-16 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1500"
          alt="Fresh organic food"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-xl">
            Premium Food Products for Your Table
          </h1>
          <p className="text-white/90 mb-6 max-w-lg text-sm md:text-base">
            Discover gourmet and artisanal food products sourced from around the world.
          </p>
          <Link 
            href="/products"
            className="btn btn-primary py-2 px-6 text-base md:text-lg max-w-xs"
          >
            Explore Products
          </Link>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-primary-600 hover:text-primary-700 font-medium">
            View All
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
      
      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              href={`/products?category=${category.slug}`} 
              key={category.id}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="w-full h-full bg-gray-300 transform group-hover:scale-105 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 px-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Fresh Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Carefully curated products of the highest quality from trusted sources.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Ethically Sourced</h3>
            <p className="text-gray-600">We ensure all our products are ethically and sustainably sourced.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to get your products to you fast.</p>
          </div>
        </div>
      </section>
    </div>
  )
} 