import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowLeft, Clock, User, Calendar, Shield, Droplets, Sun } from "lucide-react"

export default function HowToStore3DPrinterFilament() {
  const storageProblems = [
    {
      problem: "Moisture Absorption",
      effects: ["Bubbles during printing", "Poor layer adhesion", "Uneven surface", "Nozzle clogging"],
      materials: ["PLA", "PETG", "Nylon", "PVA"],
    },
    {
      problem: "UV Degradation",
      effects: ["Color change", "Loss of strength", "Material brittleness"],
      materials: ["PLA", "ABS", "PETG"],
    },
    {
      problem: "Temperature Changes",
      effects: ["Spool deformation", "Diameter changes", "Internal stress"],
      materials: ["All types"],
    },
  ]

  const storageContainers = [
    {
      type: "Vacuum Bags",
      price: "$5-10",
      pros: ["Maximum moisture protection", "Compact storage", "Transparency"],
      cons: ["Single-use", "Can damage spool"],
      bestFor: "Long-term storage",
    },
    {
      type: "Airtight Containers",
      price: "$15-30",
      pros: ["Reusable", "Protection from damage", "Easy access"],
      cons: ["Take up more space", "More expensive"],
      bestFor: "Active use",
    },
    {
      type: "Dry Boxes with Heating",
      price: "$50-150",
      pros: ["Active drying", "Humidity control", "Professional solution"],
      cons: ["High price", "Consume energy"],
      bestFor: "Professional use",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/filaments" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-blue-600 hover:text-blue-700 transition-colors">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/filaments" className="hover:text-blue-600 transition-colors">
            Filaments
          </Link>
          <span>/</span>
          <span className="text-gray-900">How to Store Filament</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-blue-600 hover:bg-blue-700 mb-4">Care</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Properly Store 3D Printer Filament
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Andrew Smith</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
            </div>

            <Image
              src="/filament-storage-tips.png"
              alt="Proper Filament Storage"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Proper filament storage is critically important for quality 3D printing. Improperly stored material can
              absorb moisture, lose properties, and lead to printing problems. In this guide, we'll cover all aspects of
              proper storage.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Main Threats to Filament</h2>

            <div className="space-y-6 mb-12">
              {storageProblems.map((item, index) => (
                <Card key={index} className="border-l-4 border-red-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        {index === 0 ? (
                          <Droplets className="h-5 w-5 text-red-600" />
                        ) : index === 1 ? (
                          <Sun className="h-5 w-5 text-red-600" />
                        ) : (
                          <Shield className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <CardTitle className="text-xl text-red-700">{item.problem}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Consequences:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {item.effects.map((effect, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              {effect}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Vulnerable Materials:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.materials.map((material, i) => (
                            <Badge key={i} variant="outline" className="border-red-200 text-red-700">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Storage Methods</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {storageContainers.map((container, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{container.type}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {container.price}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-blue-600 font-medium">{container.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 text-sm">Advantages:</h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {container.pros.map((pro, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-1">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 text-sm">Disadvantages:</h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {container.cons.map((con, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-500 mr-1">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step-by-Step Storage Guide</h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-4">Proper Storage Algorithm:</h3>
              <ol className="space-y-4 text-blue-800">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong>Preparation:</strong> Make sure the filament is dry. If necessary, dry it in an oven at
                    40-50°C for 4-6 hours.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong>Add desiccant:</strong> Place silica gel packets (2-4 per spool) in the container.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong>Sealing:</strong> Place the spool in an airtight container or vacuum bag.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong>Labeling:</strong> Mark the packaging date, material type, and color for convenience.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                    5
                  </span>
                  <div>
                    <strong>Placement:</strong> Store in a cool, dry place away from direct sunlight.
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Storage Conditions by Material Type</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-4 text-left font-semibold">Material</th>
                    <th className="border-b p-4 text-center font-semibold">Humidity</th>
                    <th className="border-b p-4 text-center font-semibold">Temperature</th>
                    <th className="border-b p-4 text-center font-semibold">Special Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">PLA</td>
                    <td className="p-4 text-center">{"<40%"}</td>
                    <td className="p-4 text-center">15-25°C</td>
                    <td className="p-4 text-center text-sm">Moisture sensitive</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">ABS</td>
                    <td className="p-4 text-center">{"<60%"}</td>
                    <td className="p-4 text-center">15-30°C</td>
                    <td className="p-4 text-center text-sm">Less sensitive</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">PETG</td>
                    <td className="p-4 text-center">{"<45%"}</td>
                    <td className="p-4 text-center">15-25°C</td>
                    <td className="p-4 text-center text-sm">Medium sensitivity</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">TPU</td>
                    <td className="p-4 text-center">{"<50%"}</td>
                    <td className="p-4 text-center">15-25°C</td>
                    <td className="p-4 text-center text-sm">Avoid compression</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">Nylon</td>
                    <td className="p-4 text-center">{"<20%"}</td>
                    <td className="p-4 text-center">15-25°C</td>
                    <td className="p-4 text-center text-sm">Very hygroscopic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Signs of Spoiled Filament</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">Visual Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Color change or cloudiness</li>
                    <li>• White residue on surface</li>
                    <li>• Brittleness and breakage</li>
                    <li>• Spool deformation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700">Printing Problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Bubbles and popping during extrusion</li>
                    <li>• Poor layer adhesion</li>
                    <li>• Uneven surface</li>
                    <li>• Nozzle clogging</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Restoring Wet Filament</h2>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-green-900 mb-4">Drying Methods:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Oven (budget method):</h4>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• PLA: 40-45°C, 4-6 hours</li>
                    <li>• ABS: 60-70°C, 2-4 hours</li>
                    <li>• PETG: 65-70°C, 4-6 hours</li>
                    <li>• Use a thermometer for control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Food Dehydrator (recommended):</h4>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• More precise temperature control</li>
                    <li>• Even heating</li>
                    <li>• Safe for spools</li>
                    <li>• Can dry multiple spools</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Proper filament storage is an investment in the quality of your prints. By spending a little time and
              money on storage organization, you'll save a lot of time troubleshooting printing problems and get
              consistently high-quality results.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Practical Tip</h3>
              <p className="text-blue-800">
                Keep a filament storage log with packaging dates and conditions. This will help track shelf life and the
                effectiveness of different storage methods.
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
                <Link href="/articles/best-filament-brands-2024-comparison">Next Article →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
