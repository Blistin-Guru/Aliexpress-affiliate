'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiShare2, FiTrendingDown } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative bg-gray-100 dark:bg-gray-700 aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
            <FiTrendingDown size={14} />
            -{discount}%
          </div>
        )}
        
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100">
            <FiHeart size={16} />
          </button>
          <button className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100">
            <FiShare2 size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          {category}
        </p>
        
        <Link href={`/products/${id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition text-gray-900 dark:text-white">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={14}
                className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">({reviews})</span>
        </div>

        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <button className="w-full mt-3 bg-primary hover:bg-accent text-white font-semibold py-2 rounded-lg transition-colors">
          💰 Get Deal
        </button>
      </div>
    </div>
  )
}