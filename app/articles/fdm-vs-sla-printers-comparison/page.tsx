import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, ArrowLeft, Clock, User, Calendar, Zap, Droplets } from "lucide-react"

export default function FDMvsSLAPrintersComparison() {
  const comparisonData = [
    {
      category: "Printer Cost",
      fdm: "$150-500",
      sla: "$200-800",
      winner: "FDM",
    },
    {
      category: "Material Cost",
      fdm: "$20-30/kg",
      sla: "$50-80/L",
      winner: "FDM",
    },
    {
      category: "Surface Quality",
      fdm: "Visible layers",
      sla: "Smooth surface",
      winner: "SLA",
    },
    {
      category: "Detail Level",
      fdm: "0.1-0.3mm",
      sla: "0.01-0.05mm",
      winner: "SLA",
    },
    {
      category: "Build Volume",
      fdm: "Up to 300x300x400mm",
      sla: "Up to 200x200x250mm",
      winner: "FDM",
    },
    {
      category: "Safety",
      fdm: "Safe",
      sla: "Toxic resin",
      winner: "FDM",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Printer className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">3dbestprinters.com</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-purple-600 hover:text-purple-700 transition-colors">
                3D Printers
              </Link>
              <Link href="/filaments" className="text-gray-600 hover:text-purple-600 transition-colors">
                Filaments
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">FDM vs SLA Printers</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">Technology</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              FDM vs SLA Printers: What to Choose in 2024
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>David Cooper</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>January 8, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
            </div>

            <Image
              src="/fdm-vs-sla-comparison.png"
              alt="FDM vs SLA Printers Comparison"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              FDM and SLA represent two different philosophies of 3D printing. Each technology has its advantages and
              disadvantages. In this article, we'll compare both technologies in detail to help you make the right
              choice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl text-blue-600">FDM (Fused Deposition Modeling)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base mb-4">
                    Technology of layer-by-layer deposition of melted plastic through an extruder
                  </CardDescription>
                  <h4 className="font-semibold mb-2">How it works:</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    A plastic filament is heated in the extruder and extruded through a nozzle, forming an object layer
                    by layer on a moving platform.
                  </p>
                  <h4 className="font-semibold mb-2">Materials:</h4>
                  <p className="text-sm text-gray-700">PLA, ABS, PETG, TPU, Wood, Metal-filled and many others</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-purple-50">
                  <div className="flex items-center space-x-3">
                    <Droplets className="h-8 w-8 text-purple-600" />
                    <CardTitle className="text-2xl text-purple-600">SLA (Stereolithography)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base mb-4">
                    Technology of curing liquid photopolymer resin with ultraviolet light
                  </CardDescription>
                  <h4 className="font-semibold mb-2">How it works:</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    A UV laser or LCD screen exposes liquid resin, curing it layer by layer. The platform rises, forming
                    the finished object.
                  </p>
                  <h4 className="font-semibold mb-2">Materials:</h4>
                  <p className="text-sm text-gray-700">Standard resin, Tough, Flexible, Castable, Ceramic-filled</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Detailed Comparison</h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-4 text-left font-semibold">Characteristic</th>
                    <th className="border-b p-4 text-center font-semibold text-blue-600">FDM</th>
                    <th className="border-b p-4 text-center font-semibold text-purple-600">SLA</th>
                    <th className="border-b p-4 text-center font-semibold">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{row.category}</td>
                      <td className="p-4 text-center">{row.fdm}</td>
                      <td className="p-4 text-center">{row.sla}</td>
                      <td className="p-4 text-center">
                        <Badge
                          variant={row.winner === "FDM" ? "default" : "secondary"}
                          className={row.winner === "FDM" ? "bg-blue-600" : "bg-purple-600"}
                        >
                          {row.winner}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">When to Choose FDM</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Functional parts:</strong> cases, mounts, tools
                </li>
                <li>
                  • <strong>Large objects:</strong> vases, decor, prototypes
                </li>
                <li>
                  • <strong>Learning:</strong> safe for children and beginners
                </li>
                <li>
                  • <strong>Limited budget:</strong> low cost of printer and materials
                </li>
                <li>
                  • <strong>Material variety:</strong> from flexible to reinforced
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">When to Choose SLA</h2>
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>High detail:</strong> miniatures, jewelry
                </li>
                <li>
                  • <strong>Smooth surface:</strong> no visible print layers
                </li>
                <li>
                  • <strong>Small details:</strong> complex geometry and thin elements
                </li>
                <li>
                  • <strong>Professional applications:</strong> dentistry, medicine
                </li>
                <li>
                  • <strong>High precision prototypes:</strong> for casting and molding
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The choice between FDM and SLA depends on your specific needs. FDM is better for beginners, functional
              parts, and limited budgets. SLA is ideal for highly detailed models and professional applications, but
              requires more attention to safety and post-processing.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
              <h3 className="font-semibold text-gray-900 mb-2">Our Recommendation</h3>
              <p className="text-gray-800">
                For your first printer, choose FDM. After mastering the basics of 3D printing, you can decide if you
                need an SLA printer for specific tasks requiring high detail.
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
                <Link href="/articles/best-budget-3d-printers-under-200">Next Article →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
