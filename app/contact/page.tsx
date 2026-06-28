import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - AliExpress Deals',
  description: 'Get in touch with us. We\'d love to hear from you!',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Have a question or feedback? We'd love to hear from you.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}