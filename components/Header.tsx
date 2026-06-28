'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiSearch, FiMenu, FiX, FiShoppingCart, FiHeart } from 'react-icons/fi'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setIsDark(!isDark)

  const categories = [
    { name: 'Electronics', href: '/category/electronics' },
    { name: 'Fashion', href: '/category/fashion' },
    { name: 'Home', href: '/category/home' },
    { name: 'Beauty', href: '/category/beauty' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">AliDeals</span>
          </Link>

          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:border-primary"
              />
              <FiSearch className="absolute right-3 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
            <Link href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition relative">
              <FiHeart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            <Link href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition relative">
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 h-12 items-center border-t border-gray-200 dark:border-gray-800">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="text-sm font-medium hover:text-primary transition"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}