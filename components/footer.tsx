import Link from "next/link"
import { Printer } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Amazon Affiliate Disclaimer */}
        <div className="bg-blue-600 rounded-lg p-4 mb-8">
          <p className="text-sm text-center text-white">
            <strong>Affiliate Disclosure:</strong> 3dbestprinters.com is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon.com. Amazon and the Amazon logo are trademarks of
            Amazon.com, Inc. or one of its affiliates.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">3dbestprinters.com</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for 3D printer reviews, filament guides, and expert recommendations to help you
              succeed in 3D printing.
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

          {/* Popular Articles */}
          <div>
            <h3 className="font-semibold mb-4">Popular Articles</h3>
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
                  href="/articles/best-budget-3d-printers-under-200"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Budget Printers
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/special-filaments-wood-metal-carbon-fiber"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Special Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 3dbestprinters.com. All rights reserved. | Made with ❤️ for the 3D printing community
          </p>
        </div>
      </div>
    </footer>
  )
}
