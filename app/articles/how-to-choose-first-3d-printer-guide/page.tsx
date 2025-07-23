import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, ArrowLeft, Clock, User, Calendar, CheckCircle } from "lucide-react"

export default function HowToChooseFirst3DPrinterGuide() {
  const steps = [
    {
      step: 1,
      title: "Determine Your Budget",
      description: "Entry-level printers cost $150-200, quality models - $300-500",
      details: "Don't forget to budget for filament, tools, and possible upgrades",
    },
    {
      step: 2,
      title: "Choose Build Volume Size",
      description: "Standard sizes: 180x180x180mm (compact) or 220x220x250mm (medium)",
      details: "Larger build volume = larger printer and higher price",
    },
    {
      step: 3,
      title: "Decide: Pre-assembled or Kit",
      description: "Pre-assembled printers cost more but save time. Kits are cheaper but require assembly",
      details: "Assembling a kit helps you better understand the printer's mechanics",
    },
    {
      step: 4,
      title: "Check Features",
      description: "Auto-leveling, heated bed, power loss recovery",
      details: "These features significantly simplify printer use",
    },
  ]

  const printerTypes = [
    {
      type: "FDM (Fused Deposition Modeling)",
      description: "The most popular type for beginners",
      pros: ["Affordable price", "Safety", "Wide range of materials"],
      cons: ["Visible layer lines", "Requires support for complex shapes"],
      bestFor: "Prototypes, functional parts, learning",
    },
    {
      type: "SLA (Stereolithography)",
      description: "High-quality details, but requires more attention",
      pros: ["High detail", "Smooth surface", "Precision"],
      cons: ["Toxic resin", "Requires post-processing", "More expensive to operate"],
      bestFor: "Miniatures, jewelry, dental applications",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Printer className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
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
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">How to Choose Your First 3D Printer</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-600 hover:bg-green-700 mb-4">Guides</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Choose Your First 3D Printer: Complete Guide 2024
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Maria Sanders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>12 min read</span>
              </div>
            </div>

            <Image
              src="/3d-printer-guide-hero.jpg"
              alt="3D Printer Selection Guide"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Choosing your first 3D printer can seem like a daunting task due to the many available options. This guide
              will help you make an informed decision based on your needs, budget, and experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Step-by-Step Selection Plan</h2>

            <div className="space-y-6 mb-12">
              {steps.map((item) => (
                <Card key={item.step} className="border-l-4 border-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-2">{item.description}</CardDescription>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">3D Printer Types</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {printerTypes.map((type, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{type.type}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                      <ul className="space-y-1 text-sm">
                        {type.pros.map((pro, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                      <ul className="space-y-1 text-sm">
                        {type.cons.map((con, i) => (
                          <li key={i} className="flex items-center">
                            <span className="h-4 w-4 text-red-500 mr-2 flex-shrink-0">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <h4 className="font-semibold text-gray-700 mb-1">Best for:</h4>
                      <p className="text-sm text-gray-600">{type.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Important Specifications</h2>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What to look for:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technical specifications:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Positioning accuracy (0.1-0.2mm)</li>
                    <li>• Maximum extruder temperature</li>
                    <li>• Heated bed availability</li>
                    <li>• Print speed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usability:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Automatic bed leveling</li>
                    <li>• Print recovery after power failure</li>
                    <li>• Documentation quality</li>
                    <li>• Community activity</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Budget Recommendations</h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">$150-250: Entry Level</h4>
                <p className="text-gray-700">
                  Creality Ender 3, Anycubic Kobra - require setup, but excellent value for money
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">$250-400: Mid-Range</h4>
                <p className="text-gray-700">Bambu Lab A1 mini, Elegoo Neptune - more automation and convenience</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">$400+: Premium</h4>
                <p className="text-gray-700">Prusa MINI+, Original Prusa i3 - maximum quality and reliability</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Beginner's Tip</h3>
              <p className="text-blue-800">
                Start with a simple FDM printer in the $200-300 range. This will allow you to learn the basics of 3D
                printing without a large investment. After gaining experience, you can decide if you need a more
                advanced printer.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Choosing your first 3D printer is a balance between budget, functionality, and ease of use. Don't chase
              the most expensive models - start with a proven mid-range printer, learn the basics, and then decide if
              you need additional features.
            </p>
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
                <Link href="/articles/fdm-vs-sla-printers-comparison">Next Article →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
