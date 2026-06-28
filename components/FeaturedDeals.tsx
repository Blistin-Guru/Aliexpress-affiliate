import ProductCard from './ProductCard'

const mockProducts = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    price: 19.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.5,
    reviews: 1250,
    category: 'Electronics',
  },
  {
    id: '2',
    title: 'USB-C Fast Charging Cable',
    price: 3.99,
    originalPrice: 12.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 890,
    category: 'Electronics',
  },
  {
    id: '3',
    title: 'LED Desk Lamp with USB',
    price: 12.49,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1565636192335-14c90fc7a5ca?w=500&h=500&fit=crop',
    rating: 4.3,
    reviews: 567,
    category: 'Home',
  },
  {
    id: '4',
    title: 'Phone Stand for Desk',
    price: 4.99,
    originalPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 2100,
    category: 'Accessories',
  },
]

export default function FeaturedDeals() {
  return (
    <section className="bg-secondary dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">🔥 Flash Deals</h2>
          <p className="text-gray-600 dark:text-gray-400">Limited time offers on top products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}