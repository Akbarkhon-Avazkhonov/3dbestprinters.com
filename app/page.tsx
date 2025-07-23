import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Printer, Star, ExternalLink, ShoppingCart, Clock, User } from "lucide-react"

export default function PrintersPage() {
  const printers = [
    {
      id: 1,
      name: "Creality Ender 3 V3 SE",
      price: "$199",
      rating: 4.5,
      reviews: 2847,
      image: "/creality-ender-3d-printer.png",
      description: "Perfect printer for beginners with automatic bed leveling",
      features: ["Auto-leveling", "20 min assembly", "220×220×250 mm"],
      amazonLink: "#",
    },
    {
      id: 2,
      name: "Prusa MINI+",
      price: "$429",
      rating: 4.8,
      reviews: 1523,
      image: "/prusa-mini-orange.png",
      description: "Compact and reliable printer with excellent print quality",
      features: ["Magnetic bed", "Wi-Fi", "180×180×180 mm"],
      amazonLink: "#",
    },
    {
      id: 3,
      name: "Bambu Lab A1 mini",
      price: "$299",
      rating: 4.7,
      reviews: 892,
      image: "/bambu-lab-a1-mini-white.png",
      description: "Modern printer with automatic calibration and smart features",
      features: ["Auto-calibration", "Quiet operation", "180×180×180 mm"],
      amazonLink: "#",
    },
    {
      id: 4,
      name: "Anycubic Kobra 2",
      price: "$179",
      rating: 4.4,
      reviews: 1247,
      image: "/anycubic-kobra-2-3d-printer.png",
      description: "Fast and affordable printer with high printing speed",
      features: ["250mm/s speed", "Auto-leveling", "220×220×250 mm"],
      amazonLink: "#",
    },
    {
      id: 5,
      name: "Elegoo Neptune 4",
      price: "$239",
      rating: 4.6,
      reviews: 634,
      image: "/elegoo-neptune-4-3d-printer.png",
      description: "Innovative printer with improved extrusion system",
      features: ["Klipper firmware", "Touch screen", "225×225×265 mm"],
      amazonLink: "#",
    },
    {
      id: 6,
      name: "Flashforge Adventurer 4",
      price: "$399",
      rating: 4.3,
      reviews: 456,
      image: "/flashforge-adventurer-4.png",
      description: "Enclosed printer for various materials",
      features: ["Enclosed chamber", "HEPA filter", "220×200×250 mm"],
      amazonLink: "#",
    },
  ]

  const articles = [
    {
      id: 1,
      slug: "top-10-best-3d-printers-2024",
      title: "Top 10 Best 3D Printers of 2024 for Beginners",
      excerpt:
        "Detailed review of the most popular and quality 3D printers for different budgets. Examining models from $150 to $500 with their advantages and disadvantages.",
      readTime: "8 min",
      author: "Alex Peterson",
      date: "January 15, 2024",
      category: "Reviews",
      image: "/3d-printer-review-hero.jpg",
    },
    {
      id: 2,
      slug: "how-to-choose-first-3d-printer-guide",
      title: "How to Choose Your First 3D Printer: Complete Guide 2024",
      excerpt:
        "Everything a beginner needs to know when choosing a 3D printer - from printing technologies to software. Step-by-step guide with practical advice.",
      readTime: "12 min",
      author: "Maria Sanders",
      date: "January 10, 2024",
      category: "Guides",
      image: "/3d-printer-guide-hero.jpg",
    },
    {
      id: 3,
      slug: "fdm-vs-sla-printers-comparison",
      title: "FDM vs SLA Printers: What to Choose in 2024",
      excerpt:
        "Detailed comparison of the two main 3D printing technologies with examples, prices, and recommendations for different tasks and budgets.",
      readTime: "6 min",
      author: "David Cooper",
      date: "January 8, 2024",
      category: "Technology",
      image: "/fdm-vs-sla-comparison.jpg",
    },
    {
      id: 4,
      slug: "best-budget-3d-printers-under-200",
      title: "Best Budget 3D Printers Under $200 in 2024",
      excerpt:
        "Review of affordable 3D printers for those who want to start 3D printing without big investments. Comparison of features and capabilities.",
      readTime: "10 min",
      author: "Igor Walker",
      date: "January 5, 2024",
      category: "Budget",
      image: "/budget-3d-printers.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Printer className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-gray-600 hover:text-blue-600 transition-colors">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Best 3D Printers of 2024</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed reviews, expert articles, and recommendations for choosing the perfect 3D printer for your projects
          </p>
        </div>

        {/* Featured Articles Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Best Articles About 3D Printers</h2>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              {articles.length} articles
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full">
                  <div className="relative">
                    <Image
                      src={article.image || "/placeholder.svg?height=200&width=400&query=3d printer article"}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
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
                    <Button variant="ghost" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read more →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recommended 3D Printers</h2>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Top {printers.length} models
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printers.map((printer) => (
              <Card key={printer.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={printer.image || "/placeholder.svg"}
                      alt={printer.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-600 hover:bg-green-700">Best Seller</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{printer.name}</CardTitle>
                    <span className="text-2xl font-bold text-blue-600">{printer.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
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
                    <span className="text-sm text-gray-600">
                      {printer.rating} ({printer.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{printer.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {printer.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={printer.amazonLink} target="_blank">
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

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start 3D printing?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore our materials on filaments for a complete understanding of 3D printing
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/filaments">Go to filaments →</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  )
}
