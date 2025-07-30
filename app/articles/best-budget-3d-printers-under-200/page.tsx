import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, ArrowLeft, Clock, User, Calendar, Star, ExternalLink, ShoppingCart, DollarSign } from "lucide-react"

export default function BestBudget3DPrintersUnder200() {
  const budgetPrinters = [
    {
      rank: 1,
      name: "Anycubic Kobra 3",
      price: "$499",
      originalPrice: "$499",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/71mbfDx6q7L._AC_SX466_.jpg",
      keyFeatures: ["250mm/s speed", "Auto-leveling", "Easy assembly"],
      pros: ["Very fast printing", "Automatic bed leveling", "Good quality out of the box"],
      cons: ["Noisy at high speeds", "Limited build volume"],
      amazonLink: "https://www.amazon.com/dp/B0DBDSH11X?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_3,
    },
    {
      rank: 2,
      name: "Creality Ender 3 V2",
      price: "$219",
      originalPrice: "$219",
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/61dWh0p6sjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      keyFeatures: ["Huge community", "Many modifications", "Glass bed"],
      pros: ["Excellent modifiability", "Large community", "Time-tested design"],
      cons: ["Requires manual leveling", "Needs tuning out of the box"],
      amazonLink: "https://www.amazon.com/dp/B0F8J78BN1?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_3,
    },
    {
      rank: 3,
      name: "Creality K1",
      price: "$249",
      originalPrice: "$349",
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/71eahA5KZ2L._AC_SX466_.jpg",
      keyFeatures: ["Large build volume", "Direct drive", "Touch screen"],
      pros: ["Large build volume 300x300x400mm", "Direct extruder", "Good build quality"],
      cons: ["Large footprint", "High power consumption"],
      amazonLink:  "https://www.amazon.com/dp/B0D91S75Y5?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_3,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Printer className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">3dbestprinters.com</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-green-600 hover:text-green-700 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-gray-600 hover:text-green-600 transition-colors">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Budget 3D Printers Under $200</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-600 hover:bg-green-700 mb-4">Budget</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Budget 3D Printers Under $200 in 2024
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Igor Walker</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>10 min read</span>
              </div>
            </div>

            <Image
              src="/budget-3d-printers.png"
              alt="Budget 3D Printers"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Budget 3D printers have become much better in recent years. Today, for $200 or less, you can get a printer
              that would have cost $500+ just a few years ago. We've tested dozens of models and selected the best
              options for a limited budget.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-green-900">What's included in the $200 budget?</h3>
              </div>
              <p className="text-green-800 text-sm">
                Besides the printer, consider additional expenses: filament ($20-30), basic tools ($15-25), possible
                upgrades ($30-50). The total startup budget will be around $265-305.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Top 3 Budget Printers</h2>

            <div className="space-y-8 mb-12">
              {budgetPrinters.map((printer) => (
                <Card key={printer.rank} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {printer.rank}
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{printer.name}</CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(printer.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-600">{printer.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg text-gray-500 line-through">{printer.originalPrice}</span>
                          <div className="text-3xl font-bold text-green-600">{printer.price}</div>
                        </div>
                        <Button asChild size="sm" className="mt-2 bg-orange-500 hover:bg-orange-600">
                          <Link href={printer.amazonLink} target="_blank">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Amazon
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Image
                          src={printer.image || "/placeholder.svg"}
                          alt={printer.name}
                          width={200}
                          height={200}
                          className="w-full h-48 object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-gray-700 mb-4">
                          {printer.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {printer.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {printer.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What to Look for When Buying</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Essential Features:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Heated bed (for ABS and PETG)</li>
                  <li>• Print recovery after power failure</li>
                  <li>• Filament runout detection</li>
                  <li>• Quality bearings and rails</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Desirable Features:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Automatic bed leveling</li>
                  <li>• Touch screen</li>
                  <li>• Silent stepper drivers</li>
                  <li>• Magnetic removable build plate</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Hidden Costs</h2>
            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-4">Additional Expenses:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
                <div>
                  <h4 className="font-semibold mb-2">Essential:</h4>
                  <ul className="space-y-1">
                    <li>• PLA Filament: $20-25</li>
                    <li>• Basic tools: $15-20</li>
                    <li>• Spare nozzles: $10-15</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommended:</h4>
                  <ul className="space-y-1">
                    <li>• Upgraded bed springs: $10</li>
                    <li>• Glass bed: $15-20</li>
                    <li>• Extruder upgrade: $20-30</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Budget 3D printers in 2024 offer excellent value for money. The Anycubic Kobra 2 leads due to its speed
              and auto-leveling, the Creality Ender 3 V2 remains a classic for modification enthusiasts, and the
              Artillery Sidewinder X2 is perfect for those who need a large build volume.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="font-semibold text-green-900 mb-2">Our Recommendation</h3>
              <p className="text-green-800">
                For your first budget printer, choose the Anycubic Kobra 2. It offers modern features at an affordable
                price and is perfect for learning the basics of 3D printing.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="/filaments">Filament Articles →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
