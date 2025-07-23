import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Sparkles,
  Hammer,
  CloudLightningIcon as Lightning,
  TreePine,
} from "lucide-react"

export default function SpecialFilamentsWoodMetalCarbonFiber() {
  const specialFilaments = [
    {
      name: "Wood PLA",
      icon: TreePine,
      temperature: "190-220°C",
      difficulty: "Easy",
      composition: "PLA + 20-40% wood fibers",
      color: "amber",
      properties: {
        strength: "Medium",
        flexibility: "Low",
        postProcessing: "Excellent",
        smell: "Pleasant woody",
      },
      pros: [
        "Can be sanded and painted",
        "Pleasant smell during printing",
        "Unique texture",
        "Easily processed with tools",
      ],
      cons: [
        "May clog nozzle",
        "Requires larger nozzle (0.6mm+)",
        "Less durable than standard PLA",
        "Moisture-sensitive",
      ],
      applications: [
        "Decorative items",
        "Furniture elements",
        "Artistic projects",
        "Prototypes of wooden products",
      ],
      tips: "Use a 0.6mm or larger nozzle, print slowly (30-40mm/s)",
      price: "$25-35",
      brands: ["eSUN", "SUNLU", "GEEETECH"],
    },
    {
      name: "Metal-filled PLA",
      icon: Hammer,
      temperature: "190-220°C",
      difficulty: "Medium",
      composition: "PLA + 30-50% metal particles",
      color: "gray",
      properties: {
        strength: "High",
        flexibility: "Low",
        postProcessing: "Good",
        smell: "Neutral",
      },
      pros: [
        "Heavier than regular plastic",
        "Can be polished to a shine",
        "Metallic appearance",
        "Good thermal conductivity",
      ],
      cons: ["Abrasive to nozzle", "Expensive", "May delaminate", "Requires steel nozzle"],
      applications: [
        "Decorative items",
        "Jewelry prototypes",
        "Collectible models",
        "Artistic sculptures",
      ],
      tips: "Always use a steel nozzle, print slowly",
      price: "$40-60",
      brands: ["Proto-pasta", "ColorFabb", "Fillamentum"],
    },
    {
      name: "Carbon Fiber",
      icon: Lightning,
      temperature: "220-250°C",
      difficulty: "Difficult",
      composition: "PETG/PLA + carbon fibers",
      color: "slate",
      properties: {
        strength: "Very high",
        flexibility: "Low",
        postProcessing: "Limited",
        smell: "Mild",
      },
      pros: ["Exceptional strength", "Lightweight", "High stiffness", "Heat resistance"],
      cons: ["Highly abrasive", "Expensive", "Requires special nozzle", "Difficult to print"],
      applications: [
        "Drones and quadcopters",
        "Automotive parts",
        "Sports equipment",
        "Engineering prototypes",
      ],
      tips: "Use a hardened steel nozzle, enclosed chamber",
      price: "$60-100",
      brands: ["PRILINE", "MarkForged", "3DXTECH"],
    },
    {
      name: "Glow-in-the-Dark",
      icon: Sparkles,
      temperature: "190-220°C",
      difficulty: "Easy",
      composition: "PLA + phosphorescent particles",
      color: "green",
      properties: {
        strength: "Medium",
        flexibility: "Low",
        postProcessing: "Good",
        smell: "Neutral",
      },
      pros: ["Glows in the dark", "Easy to print", "Safe", "Unique effect"],
      cons: ["Weak glow", "Requires 'charging' with light", "Limited colors", "Can be abrasive"],
      applications: ["Toys", "Decorative elements", "Emergency signs", "Nightlights"],
      tips: "'Charge' the item with bright light before use",
      price: "$30-45",
      brands: ["SUNLU", "GEEETECH", "Polymaker"],
    },
  ]

  const postProcessingGuide = [
    {
      material: "Wood PLA",
      steps: [
        "Sanding with sandpaper (220-400 grit)",
        "Wood stain or paint",
        "Varnish or wax for protection",
        "Can be carved with tools",
      ],
    },
    {
      material: "Metal-filled",
      steps: [
        "Sanding with fine sandpaper",
        "Polishing with metal paste",
        "Patination for an aged effect",
        "Protective coating against oxidation",
      ],
    },
    {
      material: "Carbon Fiber",
      steps: [
        "Minimal post-processing",
        "Light sanding if necessary",
        "Avoid aggressive processing",
        "Protect against dust during sanding",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/filaments" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">3dbestprinters.com</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-orange-600 hover:text-orange-700 transition-colors">
                Filaments
              </Link>
              </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/filaments" className="hover:text-orange-600 transition-colors">
            Filaments
          </Link>
          <span>/</span>
          <span className="text-gray-900">Special Filaments</span>
        </div>

        {/* Article Header */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-orange-600 hover:bg-orange-700 mb-4">Special</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Special Filaments: Wood, Metal, Carbon Fiber
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Maxim Fedorov</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
            </div>

            <Image
              src="/special-filaments-overview.png"
              alt="Special filaments for 3D printing"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Special filaments unlock new possibilities for 3D printing, enabling the creation of items with unique
              properties and appearances. From wood composites to carbon fiber, each material has its own
              characteristics and applications.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Overview of Special Materials</h2>

            <div className="space-y-8 mb-12">
              {specialFilaments.map((filament, index) => {
                const Icon = filament.icon
                return (
                  <Card key={index} className="overflow-hidden border-2">
                    <CardHeader
                      className={`bg-gradient-to-r pb-4 ${
                        filament.color === "amber"
                          ? "from-amber-50 to-amber-100"
                          : filament.color === "gray"
                            ? "from-gray-50 to-gray-100"
                            : filament.color === "slate"
                              ? "from-slate-50 to-slate-100"
                              : "from-green-50 to-green-100"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                              filament.color === "amber"
                                ? "bg-amber-200"
                                : filament.color === "gray"
                                  ? "bg-gray-200"
                                  : filament.color === "slate"
                                    ? "bg-slate-200"
                                    : "bg-green-200"
                            }`}
                          >
                            <Icon
                              className={`h-8 w-8 ${
                                filament.color === "amber"
                                  ? "text-amber-700"
                                  : filament.color === "gray"
                                    ? "text-gray-700"
                                    : filament.color === "slate"
                                      ? "text-slate-700"
                                      : "text-green-700"
                              }`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-gray-900 mb-2">{filament.name}</CardTitle>
                            <CardDescription className="text-base mb-2">{filament.composition}</CardDescription>
                            <div className="flex items-center space-x-4 text-sm">
                              <Badge variant="outline">{filament.temperature}</Badge>
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
                              <span className="text-gray-600">{filament.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid lg:grid-cols-4 gap-6 mb-6">
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-gray-700 mb-3">Properties:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Strength:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.strength}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Flexibility:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.flexibility}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Post-Processing:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.postProcessing}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Smell:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.smell}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="font-semibold text-green-700 mb-3 text-sm">Advantages:</h4>
                              <ul className="space-y-1 text-xs text-gray-700">
                                {filament.pros.map((pro, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-green-500 mr-1">✓</span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-red-700 mb-3 text-sm">Disadvantages:</h4>
                              <ul className="space-y-1 text-xs text-gray-700">
                                {filament.cons.map((con, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-red-500 mr-1">✗</span>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-3 text-sm">Applications:</h4>
                              <ul className="space-y-1 text-xs text-gray-700">
                                {filament.applications.map((app, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-blue-500 mr-1">•</span>
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-700 mb-2 text-sm">💡 Printing Tip:</h4>
                          <p className="text-xs text-gray-600">{filament.tips}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 text-sm">🏭 Recommended Brands:</h4>
                          <div className="flex flex-wrap gap-1">
                            {filament.brands.map((brand, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {brand}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Post-Processing of Special Materials</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {postProcessingGuide.map((guide, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">{guide.material}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-sm text-gray-700">
                      {guide.steps.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Equipment Requirements</h2>

            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-4">Important Requirements:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Nozzles:</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>
                      • <strong>Wood PLA:</strong> Brass 0.6mm+ or steel
                    </li>
                    <li>
                      • <strong>Metal-filled:</strong> Hardened steel required
                    </li>
                    <li>
                      • <strong>Carbon Fiber:</strong> Hardened steel or ruby
                    </li>
                    <li>
                      • <strong>Glow:</strong> Brass or steel
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Additional:</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• Heated bed for better adhesion</li>
                    <li>• Enclosed chamber for Carbon Fiber</li>
                    <li>• Ventilation when working with composites</li>
                    <li>• Protective gear during post-processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cost and Efficiency Comparison</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-4 text-left font-semibold">Material</th>
                    <th className="border-b p-4 text-center font-semibold">Price/kg</th>
                    <th className="border-b p-4 text-center font-semibold">Difficulty</th>
                    <th className="border-b p-4 text-center font-semibold">Uniqueness</th>
                    <th className="border-b p-4 text-center font-semibold">Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Wood PLA</td>
                    <td className="p-4 text-center">$25-35</td>
                    <td className="p-4 text-center">
                      <Badge variant="default" className="bg-green-600">
                        Easy
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">High</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Decor, hobbies</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Metal-filled</td>
                    <td className="p-4 text-center">$40-60</td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary">Medium</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Very High</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Decor, prototypes</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Carbon Fiber</td>
                    <td className="p-4 text-center">$60-100</td>
                    <td className="p-4 text-center">
                      <Badge variant="destructive">Difficult</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Medium</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Functional</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">Glow-in-Dark</td>
                    <td className="p-4 text-center">$30-45</td>
                    <td className="p-4 text-center">
                      <Badge variant="default" className="bg-green-600">
                        Easy
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">High</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Decor, toys</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Safety During Operation</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">Precautions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Use ventilation when printing composites</li>
                    <li>• Wear a mask when sanding Carbon Fiber</li>
                    <li>• Safety goggles during post-processing</li>
                    <li>• Gloves when working with abrasive materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">Equipment Maintenance</CardTitle>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">Equipment Maintenance</CardTitle>
                  </CardHeader>
                </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Regularly replace nozzles after abrasive materials</li>
                      <li>• Clean extruder from composite residues</li>
                      <li>• Check wear on filament guides</li>
                      <li>• Calibrate printer after material change</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Special filaments open up endless possibilities for creativity and functional applications. Wood
                PLA is ideal for decorative projects, Metal-filled creates stunning visual effects, Carbon Fiber
                provides maximum strength, and Glow-in-the-Dark adds a touch of magic to your creations.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                <h3 className="font-semibold text-orange-900 mb-2">Recommendation for Beginners</h3>
                <p className="text-orange-800">
                  Start with Wood PLA—it’s forgiving and yields impressive results. Once mastered, move to
                  Metal-filled for unique decorative items. Save Carbon Fiber for later, when you’ve gained experience.
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
                  <Link href="/articles/complete-filament-types-guide-2024">To Main Materials →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}