import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Zap, Star, ExternalLink, ShoppingCart, Clock, User, Thermometer } from "lucide-react"

export default function FilamentsPage() {
  const filaments = [
    {
      id: 1,
      name: "SUNLU PLA+ Filament",
      price: "$22.99",
      rating: 4.6,
      reviews: 3247,
      image: "/sunlu-pla-plus-filament.png",
      description: "High-quality PLA+ filament with improved strength and smooth surface",
      specs: ["1.75mm", "1kg", "190-220°C", "Odorless"],
      colors: "20+ colors",
      amazonLink: "#",
    },
    {
      id: 2,
      name: "Overture PETG Filament",
      price: "$25.99",
      rating: 4.5,
      reviews: 1876,
      image: "/overture-transparent-petg.png",
      description: "Durable PETG filament for functional parts with chemical resistance",
      specs: ["1.75mm", "1kg", "220-250°C", "Transparent"],
      colors: "15+ colors",
      amazonLink: "#",
    },
    {
      id: 3,
      name: "HATCHBOX ABS Filament",
      price: "$27.99",
      rating: 4.4,
      reviews: 2134,
      image: "/hatchbox-abs-black.png",
      description: "Professional ABS filament for strong and heat-resistant products",
      specs: ["1.75mm", "1kg", "220-250°C", "Heat-resistant"],
      colors: "12+ colors",
      amazonLink: "#",
    },
    {
      id: 4,
      name: "GEEETECH Silk PLA",
      price: "$19.99",
      rating: 4.7,
      reviews: 1567,
      image: "/geeetech-silk-rainbow-pla.png",
      description: "Silky PLA filament with metallic shine for decorative items",
      specs: ["1.75mm", "1kg", "190-220°C", "Silky"],
      colors: "25+ colors",
      amazonLink: "#",
    },
    {
      id: 5,
      name: "eSUN Wood PLA",
      price: "$29.99",
      rating: 4.3,
      reviews: 892,
      image: "/esun-wood-pla-natural.png",
      description: "Filament with wood fibers for creating items with wood texture",
      specs: ["1.75mm", "1kg", "190-220°C", "Wooden"],
      colors: "5 shades",
      amazonLink: "#",
    },
    {
      id: 6,
      name: "PRILINE Carbon Fiber PETG",
      price: "$39.99",
      rating: 4.8,
      reviews: 634,
      image: "/priline-carbon-fiber-petg.png",
      description: "Premium filament with carbon fibers for ultra-strong parts",
      specs: ["1.75mm", "1kg", "220-250°C", "Carbon"],
      colors: "3 colors",
      amazonLink: "#",
    },
  ]

  const articles = [
    {
      id: 1,
      slug: "complete-filament-types-guide-2024",
      title: "Complete Guide to 3D Printing Filament Types 2024",
      excerpt:
        "Detailed guide to choosing the right filament: PLA, ABS, PETG, TPU and other materials. Comparison of properties, applications, and printing tips.",
      readTime: "10 min",
      author: "Elena Morrison",
      date: "January 18, 2024",
      category: "Materials",
      image: "/filament-types-guide.jpg",
    },
    {
      id: 2,
      slug: "how-to-store-3d-printer-filament",
      title: "How to Properly Store 3D Printer Filament",
      excerpt:
        "Tips for storing filament to maintain print quality and extend shelf life. Humidity, temperature, and storage containers.",
      readTime: "5 min",
      author: "Andrew Smith",
      date: "January 15, 2024",
      category: "Care",
      image: "/filament-storage-tips.jpg",
    },
    {
      id: 3,
      slug: "best-filament-brands-2024-comparison",
      title: "Best Filament Brands 2024: Comparison and Review",
      excerpt:
        "Comparison of popular filament manufacturers by quality, price, and range. SUNLU, Overture, HATCHBOX, GEEETECH, and others.",
      readTime: "15 min",
      author: "Olivia Knight",
      date: "January 12, 2024",
      category: "Reviews",
      image: "/filament-brands-comparison.jpg",
    },
    {
      id: 4,
      slug: "special-filaments-wood-metal-carbon-fiber",
      title: "Special Filaments: Wood, Metal, Carbon Fiber",
      excerpt:
        "Overview of exotic filaments with special properties. Wood, metal, carbon, and other composite materials for unique projects.",
      readTime: "8 min",
      author: "Max Foster",
      date: "January 10, 2024",
      category: "Special",
      image: "/special-filaments-overview.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-green-600 font-medium border-b-2 border-green-600 pb-1">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Best 3D Printing Filaments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality materials, expert reviews, and detailed guides for all types of 3D printing projects
          </p>
        </div>

        {/* Featured Articles Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Expert Articles on Filaments</h2>
            <Badge variant="outline" className="text-green-600 border-green-200">
              {articles.length} articles
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full">
                  <div className="relative">
                    <Image
                      src={article.image || "/placeholder.svg?height=200&width=400&query=3d printing filament guide"}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 hover:bg-green-700">{article.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl leading-tight group-hover:text-green-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{article.excerpt}</CardDescription>
                    <Button variant="ghost" className="mt-4 p-0 h-auto text-green-600 hover:text-green-700">
                      Read more →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recommended Filaments</h2>
            <Badge variant="outline" className="text-green-600 border-green-200">
              Top {filaments.length} materials
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filaments.map((filament) => (
              <Card key={filament.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={filament.image || "/placeholder.svg"}
                      alt={filament.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-orange-600 hover:bg-orange-700">Bestseller</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{filament.name}</CardTitle>
                    <span className="text-2xl font-bold text-green-600">{filament.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(filament.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {filament.rating} ({filament.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{filament.description}</CardDescription>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {filament.specs.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs justify-center">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-600">Available:</span>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {filament.colors}
                    </Badge>
                  </div>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={filament.amazonLink} target="_blank">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy on Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Material Guide */}
        <section className="mb-16 bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Material Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">PLA</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Easy to print, biodegradable, ideal for beginners and decorative items
              </p>
              <Badge variant="outline" className="mt-2 border-blue-200 text-blue-700">
                190-220°C
              </Badge>
            </div>
            <div className="text-center p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">ABS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strong, heat-resistant, suitable for functional parts and mechanical components
              </p>
              <Badge variant="outline" className="mt-2 border-red-200 text-red-700">
                220-250°C
              </Badge>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">PETG</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chemical resistant, transparent, combines PLA ease with ABS strength
              </p>
              <Badge variant="outline" className="mt-2 border-green-200 text-green-700">
                220-250°C
              </Badge>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">TPU</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Flexible, elastic material for printing rubber-like items and gaskets
              </p>
              <Badge variant="outline" className="mt-2 border-purple-200 text-purple-700">
                210-230°C
              </Badge>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a printer for your filaments?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore our reviews of the best 3D printers for working with various materials
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/">← Go to printers</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  )
}
