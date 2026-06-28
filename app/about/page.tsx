import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - AliExpress Deals',
  description: 'Learn about AliExpress Deals and our mission to bring you the best online shopping experience.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About AliExpress Deals</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6 text-lg">
          <p>
            Welcome to AliExpress Deals, your ultimate destination for amazing prices on millions of products from around the world.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
          <p>
            We believe everyone deserves access to quality products at unbeatable prices. Our mission is to connect smart shoppers with incredible deals on electronics, fashion, home goods, and more.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">How We Work</h2>
          <p>
            AliExpress Deals is an affiliate website. We curate the best products and deals from AliExpress and present them in an easy-to-browse format. When you make a purchase through our links, we earn a small commission at no extra cost to you.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">FTC Disclosure</h2>
          <p>
            As required by the Federal Trade Commission, we disclose that AliExpress Deals contains affiliate links. This means we may earn a commission if you click through and make a purchase. However, this does not affect the price you pay. We only recommend products we believe provide genuine value.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Curated selection of the best deals</li>
            <li>Price drop alerts and notifications</li>
            <li>Easy product comparison tools</li>
            <li>Verified customer reviews and ratings</li>
            <li>Fast, mobile-friendly browsing</li>
            <li>Secure checkout experience</li>
          </ul>
        </div>
      </div>
    </div>
  )
}