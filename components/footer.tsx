import Link from "next/link"
import { Printer } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">3D Print Hub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate guide to 3D printing. Expert reviews, detailed guides, and the latest in 3D printing
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  3D Printers
                </Link>
              </li>
              <li>
                <Link href="/filaments" className="text-gray-400 hover:text-white transition-colors">
                  Filaments
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/top-10-best-3d-printers-2024"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Best Printers 2024
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/complete-filament-types-guide-2024"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Filament Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Reviews</span>
              </li>
              <li>
                <span className="text-gray-400">Guides</span>
              </li>
              <li>
                <span className="text-gray-400">Technology</span>
              </li>
              <li>
                <span className="text-gray-400">Budget Options</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/articles/how-to-choose-first-3d-printer-guide"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beginner's Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/fdm-vs-sla-printers-comparison"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FDM vs SLA
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/how-to-store-3d-printer-filament"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Storage Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/best-filament-brands-2024-comparison"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Brand Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Amazon Affiliate Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Amazon Affiliate Disclosure:</strong> 3dbestprinters.com is a
              participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to
              provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Amazon and
              the Amazon logo are trademarks of Amazon.com, Inc. or one of its affiliates.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 3D Print Hub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
