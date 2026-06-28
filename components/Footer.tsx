import Link from 'next/link'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About AliDeals</h3>
            <p className="text-sm leading-relaxed">
              Your destination for amazing deals on millions of products from around the world.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary transition">All Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">FTC Disclosure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail size={16} />
                <a href="mailto:contact@alideals.com" className="hover:text-primary transition">
                  contact@alideals.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>Online Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} AliDeals. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}