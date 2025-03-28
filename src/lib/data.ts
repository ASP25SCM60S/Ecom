import { Product, Category } from '@/types'

export interface Category {
  id: string
  name: string
  slug: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  reviews?: number
  inStock: boolean
  featured?: boolean
  discount?: number
  originalPrice?: number
  tags?: string[]
  specifications?: {
    [key: string]: string
  }
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fresh Foods',
    slug: 'fresh'
  },
  {
    id: '2',
    name: 'Pantry Items',
    slug: 'pantry'
  },
  {
    id: '3',
    name: 'Specialty Items',
    slug: 'specialty'
  },
  {
    id: '4',
    name: 'Snacks',
    slug: 'snacks'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Avocados',
    description: 'Fresh, organic avocados perfect for guacamole, salads, or avocado toast. Sourced from sustainable farms.',
    price: 7.99,
    originalPrice: 9.99,
    discount: 20,
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=600',
    rating: 4.8,
    reviews: 128,
    inStock: true,
    featured: true,
    tags: ['organic', 'fresh', 'fruit'],
    specifications: {
      'Origin': 'Mexico',
      'Organic': 'Yes',
      'Package Size': '4 pieces'
    }
  },
  {
    id: '2',
    name: 'Premium Olive Oil',
    description: 'Extra virgin olive oil cold-pressed from the finest olives. Perfect for cooking, dressing, and dipping.',
    price: 19.99,
    category: 'pantry',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600',
    rating: 4.9,
    reviews: 56,
    inStock: true,
    featured: true,
    tags: ['olive oil', 'cooking', 'dressing'],
    specifications: {
      'Origin': 'Italy',
      'Acidity Level': '0.3%',
      'Package Size': '1L'
    }
  },
  {
    id: '3',
    name: 'Artisanal Pasta',
    description: 'Handcrafted artisanal pasta made with traditional methods using premium durum wheat semolina.',
    price: 8.49,
    category: 'pantry',
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=600',
    rating: 4.7,
    reviews: 34,
    inStock: true,
    tags: ['pasta', 'artisanal', 'italian'],
    specifications: {
      'Origin': 'Italy',
      'Ingredients': 'Durum wheat semolina, water',
      'Package Size': '500g'
    }
  },
  {
    id: '4',
    name: 'Aged Balsamic Vinegar',
    description: 'Premium balsamic vinegar aged for 12 years in wooden barrels for a rich, complex flavor.',
    price: 24.99,
    category: 'pantry',
    image: 'https://images.unsplash.com/photo-1631452180328-b949bbc8657d?q=80&w=600',
    rating: 4.9,
    reviews: 23,
    inStock: true,
    tags: ['balsamic vinegar', 'aged', 'italian'],
    specifications: {
      'Origin': 'Italy',
      'Aging Time': '12 years',
      'Package Size': '250ml'
    }
  },
  {
    id: '5',
    name: 'Organic Berry Mix',
    description: 'A mix of fresh organic strawberries, blueberries, and raspberries. Perfect for smoothies, desserts, or snacking.',
    price: 9.99,
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1563746924237-f81951d2580f?q=80&w=600',
    rating: 4.6,
    reviews: 45,
    inStock: true,
    tags: ['organic', 'berries', 'fresh'],
    specifications: {
      'Origin': 'USA',
      'Organic': 'Yes',
      'Package Size': '1 pint'
    }
  },
  {
    id: '6',
    name: 'Gourmet Cheese Selection',
    description: 'A curated selection of fine cheeses from around the world, including brie, gouda, and blue cheese.',
    price: 29.99,
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=600',
    rating: 4.8,
    reviews: 67,
    inStock: true,
    featured: true,
    tags: ['gourmet', 'cheese', 'selection'],
    specifications: {
      'Origin': 'France',
      'Cheese Types': 'Brie, Gouda, Blue Cheese',
      'Package Size': '1kg'
    }
  },
  {
    id: '7',
    name: 'Truffle Infused Honey',
    description: 'Pure honey infused with black truffle for a unique sweet and savory flavor. Perfect for cheese pairings.',
    price: 18.50,
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600',
    rating: 4.7,
    reviews: 21,
    inStock: true,
    tags: ['truffle', 'honey', 'infused'],
    specifications: {
      'Origin': 'Italy',
      'Truffle Type': 'Black Truffle',
      'Package Size': '250g'
    }
  },
  {
    id: '8',
    name: 'Premium Dark Chocolate',
    description: '72% dark chocolate made from ethically sourced cacao beans. Rich, smooth, and slightly bitter.',
    price: 6.99,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=600',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    tags: ['dark chocolate', 'premium', 'snacks'],
    specifications: {
      'Origin': 'Belgium',
      'Cocoa Content': '72%',
      'Package Size': '100g'
    }
  },
  {
    id: '9',
    name: 'Organic Raw Honey',
    description: 'Unprocessed, raw honey from wildflower meadows. Full of natural enzymes and antioxidants.',
    price: 12.99,
    category: 'pantry',
    image: 'https://images.unsplash.com/photo-1599383558648-6b1c70a3ff5a?q=80&w=600',
    rating: 4.7,
    reviews: 56,
    inStock: true,
    tags: ['organic', 'raw honey', 'wildflower'],
    specifications: {
      'Origin': 'USA',
      'Organic': 'Yes',
      'Package Size': '500g'
    }
  },
  {
    id: '10',
    name: 'Artisanal Sourdough Bread',
    description: 'Traditional sourdough bread made with a 100-year-old starter. Crusty exterior with a soft, tangy interior.',
    price: 7.49,
    category: 'fresh',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600',
    rating: 4.6,
    reviews: 34,
    inStock: true,
    tags: ['artisanal', 'sourdough', 'bread'],
    specifications: {
      'Origin': 'USA',
      'Ingredients': 'Flour, water, salt, starter',
      'Package Size': '1 loaf'
    }
  },
  {
    id: '11',
    name: 'Saffron Threads',
    description: 'Premium quality saffron threads harvested from the finest crocus flowers. Adds color and aroma to dishes.',
    price: 15.99,
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1622340044729-024e25e6732d?q=80&w=600',
    rating: 4.9,
    reviews: 12,
    inStock: true,
    tags: ['saffron', 'threads', 'premium'],
    specifications: {
      'Origin': 'Spain',
      'Quality': 'High',
      'Package Size': '1g'
    }
  },
  {
    id: '12',
    name: 'Organic Mixed Nuts',
    description: 'A delicious blend of organic almonds, walnuts, cashews, and pecans. Perfect for snacking or baking.',
    price: 14.99,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2b?q=80&w=600',
    rating: 4.7,
    reviews: 45,
    inStock: true,
    tags: ['organic', 'mixed nuts', 'snacks'],
    specifications: {
      'Origin': 'USA',
      'Organic': 'Yes',
      'Package Size': '1lb'
    }
  }
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}