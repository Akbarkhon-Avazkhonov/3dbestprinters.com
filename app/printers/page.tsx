import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, Star, ExternalLink, ArrowLeft, ShoppingCart } from "lucide-react"

export default function PrintersPage() {
  const printers = [
    {
      id: 1,
      name: "Creality Ender 3 V3 SE",
      price: "$199",
      rating: 4.5,
      reviews: 2847,
      image: "/creality-ender-3d-printer.png",
      description: "Идеальный принтер для начинающих с автоматическим выравниванием стола",
      features: ["Автолевелинг", "Сборка за 20 мин", "220×220×250 мм"],
      amazonLink: "#",
    },
    {
      id: 2,
      name: "Prusa MINI+",
      price: "$429",
      rating: 4.8,
      reviews: 1523,
      image: "/prusa-mini-orange.png",
      description: "Компактный и надежный принтер с превосходным качеством печати",
      features: ["Магнитная платформа", "Wi-Fi", "180×180×180 мм"],
      amazonLink: "#",
    },
    {
      id: 3,
      name: "Bambu Lab A1 mini",
      price: "$299",
      rating: 4.7,
      reviews: 892,
      image: "/bambu-lab-a1-mini-white.png",
      description: "Современный принтер с автоматической калибровкой и умными функциями",
      features: ["Автокалибровка", "Тихая работа", "180×180×180 мм"],
      amazonLink: "#",
    },
    {
      id: 4,
      name: "Anycubic Kobra 2",
      price: "$179",
      rating: 4.4,
      reviews: 1247,
      image: "/anycubic-kobra-2-3d-printer.png",
      description: "Быстрый и доступный принтер с высокой скоростью печати",
      features: ["Скорость 250мм/с", "Автолевелинг", "220×220×250 мм"],
      amazonLink: "#",
    },
    {
      id: 5,
      name: "Elegoo Neptune 4",
      price: "$239",
      rating: 4.6,
      reviews: 634,
      image: "/elegoo-neptune-4-3d-printer.png",
      description: "Инновационный принтер с улучшенной системой экструзии",
      features: ["Klipper прошивка", "Сенсорный экран", "225×225×265 мм"],
      amazonLink: "#",
    },
    {
      id: 6,
      name: "Flashforge Adventurer 4",
      price: "$399",
      rating: 4.3,
      reviews: 456,
      image: "/flashforge-adventurer-4.png",
      description: "Закрытый принтер для печати различными материалами",
      features: ["Закрытая камера", "HEPA фильтр", "220×200×250 мм"],
      amazonLink: "#",
    },
  ]

  const articles = [
    {
      title: "Топ-10 лучших 3D принтеров 2024 года",
      excerpt: "Подробный обзор самых популярных и качественных 3D принтеров для разных бюджетов и задач.",
      readTime: "8 мин",
      category: "Обзоры",
    },
    {
      title: "Как выбрать первый 3D принтер: полное руководство",
      excerpt: "Все что нужно знать новичку при выборе 3D принтера - от технологий печати до программного обеспечения.",
      readTime: "12 мин",
      category: "Гайды",
    },
    {
      title: "Сравнение FDM vs SLA принтеров",
      excerpt: "Детальное сравнение двух основных технологий 3D печати с примерами и рекомендациями.",
      readTime: "6 мин",
      category: "Технологии",
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
              <Link href="/printers" className="text-blue-600 font-medium">
                3D Принтеры
              </Link>
              <Link href="/filaments" className="text-gray-600 hover:text-blue-600 transition-colors">
                Филаменты
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-gray-900">3D Принтеры</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Лучшие 3D принтеры 2024</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подробные обзоры и рекомендации по выбору идеального 3D принтера для ваших проектов
          </p>
        </div>

        {/* Articles Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Популярные статьи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Рекомендуемые 3D принтеры</h2>
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
                      {printer.rating} ({printer.reviews} отзывов)
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{printer.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {printer.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                    <Link href={printer.amazonLink} target="_blank">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Купить на Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
