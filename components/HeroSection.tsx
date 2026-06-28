import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-accent py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <p className="text-sm font-semibold">🎉 Limited Time Offer</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unbeatable Deals on Everything
            </h1>
            <p className="text-lg opacity-90">
              Find amazing prices on electronics, fashion, home & beauty. Get price drop alerts and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Shop Now
                <FiArrowRight />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
              <p className="text-3xl font-bold">1M+</p>
              <p className="text-sm opacity-90">Products</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
              <p className="text-3xl font-bold">50%+</p>
              <p className="text-sm opacity-90">Off Deals</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm opacity-90">Support</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
              <p className="text-3xl font-bold">100K+</p>
              <p className="text-sm opacity-90">Happy Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}