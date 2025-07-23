import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowLeft, Clock, User, Calendar, Thermometer } from "lucide-react"

export default function CompleteFilamentTypesGuide2024() {
  const filamentTypes = [
    {
      name: "PLA (Polylactic Acid)",
      temperature: "190-220°C",
      difficulty: "Easy",
      strength: "Medium",
      flexibility: "Low",
      color: "blue",
      description: "Biodegradable plastic made from corn starch",
      pros: ["Easy to print", "Odorless", "Biodegradable", "No heated bed required"],
      cons: ["Low heat resistance", "Brittle", "Not suitable for functional parts"],
      applications: ["Prototypes", "Decorative items", "Toys", "Learning"],
      tips: "Use speed 50-60mm/s, bed temperature 50-60°C",
    },
    {
      name: "ABS (Acrylonitrile Butadiene Styrene)",
      temperature: "220-250°C",
      difficulty: "Medium",
      strength: "High",
      flexibility: "Medium",
      color: "red",
      description: "Strong engineering plastic for functional parts",
      pros: ["High strength", "Heat resistant", "Chemical resistant", "Can be acetone smoothed"],
      cons: ["Strong odor", "Requires heated bed", "Prone to warping"],
      applications: ["Enclosures", "Automotive parts", "Tools", "Mechanical parts"],
      tips: "Always use an enclosure and ventilation",
    },
    {
      name: "PETG (Polyethylene Terephthalate Glycol)",
      temperature: "220-250°C",
      difficulty: "Easy",
      strength: "High",
      flexibility: "Medium",
      color: "green",
      description: "Combines PLA ease with ABS strength",
      pros: ["Easy to print", "Transparent", "Chemical resistant", "Food safe"],
      cons: ["Can be stringy", "Prone to overheating", "More expensive than PLA"],
      applications: ["Containers", "Medical items", "Protective shields", "Functional parts"],
      tips: "Print slowly (30-50mm/s) for best quality",
    },
    {
      name: "TPU (Thermoplastic Polyurethane)",
      temperature: "210-230°C",
      difficulty: "Hard",
      strength: "Medium",
      flexibility: "Very high",
      color: "purple",
      description: "Flexible elastomer for rubber-like items",
      pros: ["Very flexible", "Wear resistant", "Chemical resistant", "Shock absorbing"],
      cons: ["Difficult to print", "Slow printing", "Requires direct drive"],
      applications: ["Phone cases", "Gaskets", "Toys", "Footwear"],
      tips: "Use low speed (15-30mm/s) and direct extruder",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/filaments" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-green-600 hover:text-green-700 transition-colors">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/filaments" className="hover:text-green-600 transition-colors">
            Filaments
          </Link>
          <span>/</span>
          <span className="text-gray-900">Complete Filament Types Guide</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-600 hover:bg-green-700 mb-4">Materials</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Guide to 3D Printing Filament Types 2024
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Elena Morrison</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 18, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>10 min read</span>
              </div>
            </div>

            <Image
              src="/filament-types-guide.png"
              alt="Filament Types Guide"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Choosing the right filament is critically important for successful 3D printing. In this detailed guide,
              we'll examine the main types of filaments, their properties, applications, and printing tips for each
              material.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Main Filament Types</h2>

            <div className="space-y-8 mb-12">
              {filamentTypes.map((filament, index) => (
                <Card key={index} className="overflow-hidden border-2">
                  <CardHeader
                    className={`bg-gradient-to-r ${
                      filament.color === "blue"
                        ? "from-blue-50 to-blue-100"
                        : filament.color === "red"
                          ? "from-red-50 to-red-100"
                          : filament.color === "green"
                            ? "from-green-50 to-green-100"
                            : "from-purple-50 to-purple-100"
                    } pb-4`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">{filament.name}</CardTitle>
                        <CardDescription className="text-base">{filament.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            filament.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : filament.color === "red"
                                ? "bg-red-100 text-red-800"
                                : filament.color === "green"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          <Thermometer className="h-4 w-4 mr-1" />
                          {filament.temperature}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                        <Badge
                          variant={
                            filament.difficulty === "Easy"
                              ? "default"
                              : filament.difficulty === "Medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {filament.difficulty}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Strength</div>
                        <Badge variant="outline">{filament.strength}</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Flexibility</div>
                        <Badge variant="outline">{filament.flexibility}</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Temperature</div>
                        <Badge variant="outline">{filament.temperature}</Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Advantages:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {filament.pros.map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">Disadvantages:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {filament.cons.map((con, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Applications:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {filament.applications.map((app, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">💡 Printing Tip:</h4>
                      <p className="text-sm text-gray-600">{filament.tips}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Special Filaments</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Wood PLA</CardTitle>
                  <CardDescription>Filament with wood fibers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Contains real wood fibers, can be sanded, stained, and processed like wood.
                  </p>
                  <Badge variant="outline" className="mr-2">
                    190-220°C
                  </Badge>
                  <Badge variant="secondary">Decorative</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Carbon Fiber</CardTitle>
                  <CardDescription>Reinforced with carbon fibers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Ultra-strong material with carbon fibers, lightweight and rigid.
                  </p>
                  <Badge variant="outline" className="mr-2">
                    220-250°C
                  </Badge>
                  <Badge variant="secondary">Functional</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Metal-filled</CardTitle>
                  <CardDescription>With metal particles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Contains metal particles, heavier than regular plastic, can be polished.
                  </p>
                  <Badge variant="outline" className="mr-2">
                    190-220°C
                  </Badge>
                  <Badge variant="secondary">Decorative</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Glow-in-the-Dark</CardTitle>
                  <CardDescription>Glows in the dark</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Stores light and glows in the dark, great for decorative items.
                  </p>
                  <Badge variant="outline" className="mr-2">
                    190-220°C
                  </Badge>
                  <Badge variant="secondary">Decorative</Badge>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How to Choose a Filament</h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-4">Step-by-step selection algorithm:</h3>
              <ol className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong>Determine the purpose:</strong> decorative item, functional part, or prototype
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong>Consider operating conditions:</strong> temperature, loads, chemical exposure
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong>Assess your experience:</strong> beginners should start with PLA
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong>Check your printer capabilities:</strong> maximum temperature, heated bed
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The right choice of filament determines the success of your project. Start with PLA to learn the basics,
              move to PETG for functional parts, use ABS for strong items, and experiment with specialty materials for
              unique projects.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="font-semibold text-green-900 mb-2">Expert Recommendation</h3>
              <p className="text-green-800">
                Always buy filament from reputable manufacturers. Quality material costs a bit more but saves time and
                frustration by providing consistent printing results.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/filaments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Filaments
              </Link>
            </Button>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="/articles/how-to-store-3d-printer-filament">Next Article →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
