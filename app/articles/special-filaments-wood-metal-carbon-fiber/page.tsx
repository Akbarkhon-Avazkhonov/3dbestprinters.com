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
      difficulty: "Легкий",
      composition: "PLA + 20-40% древесные волокна",
      color: "amber",
      properties: {
        strength: "Средняя",
        flexibility: "Низкая",
        postProcessing: "Отличная",
        smell: "Приятный древесный",
      },
      pros: [
        "Можно шлифовать и окрашивать",
        "Приятный запах при печати",
        "Уникальная текстура",
        "Легко обрабатывается инструментами",
      ],
      cons: [
        "Может засорить сопло",
        "Требует большее сопло (0.6мм+)",
        "Менее прочный чем обычный PLA",
        "Чувствителен к влаге",
      ],
      applications: [
        "Декоративные изделия",
        "Мебельные элементы",
        "Художественные проекты",
        "Прототипы деревянных изделий",
      ],
      tips: "Используйте сопло 0.6мм или больше, печатайте медленно (30-40мм/с)",
      price: "$25-35",
      brands: ["eSUN", "SUNLU", "GEEETECH"],
    },
    {
      name: "Metal-filled PLA",
      icon: Hammer,
      temperature: "190-220°C",
      difficulty: "Средний",
      composition: "PLA + 30-50% металлические частицы",
      color: "gray",
      properties: {
        strength: "Высокая",
        flexibility: "Низкая",
        postProcessing: "Хорошая",
        smell: "Нейтральный",
      },
      pros: [
        "Тяжелее обычного пластика",
        "Можно полировать до блеска",
        "Металлический внешний вид",
        "Хорошая теплопроводность",
      ],
      cons: ["Абразивный для сопла", "Дорогой", "Может расслаиваться", "Требует стальное сопло"],
      applications: [
        "Декоративные изделия",
        "Ювелирные прототипы",
        "Коллекционные модели",
        "Художественные скульптуры",
      ],
      tips: "Обязательно используйте стальное сопло, печатайте медленно",
      price: "$40-60",
      brands: ["Proto-pasta", "ColorFabb", "Fillamentum"],
    },
    {
      name: "Carbon Fiber",
      icon: Lightning,
      temperature: "220-250°C",
      difficulty: "Сложный",
      composition: "PETG/PLA + углеродные волокна",
      color: "slate",
      properties: {
        strength: "Очень высокая",
        flexibility: "Низкая",
        postProcessing: "Ограниченная",
        smell: "Слабый",
      },
      pros: ["Исключительная прочность", "Легкий вес", "Высокая жесткость", "Термостойкость"],
      cons: ["Очень абразивный", "Дорогой", "Требует специальное сопло", "Сложно печатать"],
      applications: [
        "Дроны и квадрокоптеры",
        "Автомобильные детали",
        "Спортивное оборудование",
        "Инженерные прототипы",
      ],
      tips: "Используйте сопло из закаленной стали, закрытую камеру",
      price: "$60-100",
      brands: ["PRILINE", "MarkForged", "3DXTECH"],
    },
    {
      name: "Glow-in-the-Dark",
      icon: Sparkles,
      temperature: "190-220°C",
      difficulty: "Легкий",
      composition: "PLA + фосфоресцентные частицы",
      color: "green",
      properties: {
        strength: "Средняя",
        flexibility: "Низкая",
        postProcessing: "Хорошая",
        smell: "Нейтральный",
      },
      pros: ["Светится в темноте", "Легко печатается", "Безопасен", "Уникальный эффект"],
      cons: ["Слабое свечение", "Требует 'зарядки' светом", "Ограниченные цвета", "Может быть абразивным"],
      applications: ["Игрушки", "Декоративные элементы", "Аварийные указатели", "Ночники"],
      tips: "'Заряжайте' изделие ярким светом перед использованием",
      price: "$30-45",
      brands: ["SUNLU", "GEEETECH", "Polymaker"],
    },
  ]

  const postProcessingGuide = [
    {
      material: "Wood PLA",
      steps: [
        "Шлифовка наждачной бумагой (220-400 грит)",
        "Морилка или краска по дереву",
        "Лак или воск для защиты",
        "Возможна резьба инструментами",
      ],
    },
    {
      material: "Metal-filled",
      steps: [
        "Шлифовка мелкой наждачной бумагой",
        "Полировка металлической пастой",
        "Патинирование для эффекта старения",
        "Защитное покрытие от окисления",
      ],
    },
    {
      material: "Carbon Fiber",
      steps: [
        "Минимальная постобработка",
        "Легкая шлифовка при необходимости",
        "Избегайте агрессивной обработки",
        "Защита от пыли при шлифовке",
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
              <span className="text-2xl font-bold text-gray-900">3D Print Hub</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                3D Принтеры
              </Link>
              <Link href="/filaments" className="text-orange-600 hover:text-orange-700 transition-colors">
                Филаменты
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/filaments" className="hover:text-orange-600 transition-colors">
            Филаменты
          </Link>
          <span>/</span>
          <span className="text-gray-900">Специальные филаменты</span>
        </div>

        {/* Article Header */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-orange-600 hover:bg-orange-700 mb-4">Специальные</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Специальные филаменты: Wood, Metal, Carbon Fiber
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Максим Федоров</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>10 января 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>8 мин чтения</span>
              </div>
            </div>

            <Image
              src="/special-filaments-overview.jpg"
              alt="Специальные филаменты для 3D печати"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Специальные филаменты открывают новые возможности для 3D печати, позволяя создавать изделия с уникальными
              свойствами и внешним видом. От древесных композитов до углеродного волокна - каждый материал имеет свои
              особенности и области применения.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Обзор специальных материалов</h2>

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
                                  filament.difficulty === "Легкий"
                                    ? "default"
                                    : filament.difficulty === "Средний"
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
                          <h4 className="font-semibold text-gray-700 mb-3">Свойства:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Прочность:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.strength}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Гибкость:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.flexibility}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Обработка:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.postProcessing}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span>Запах:</span>
                              <Badge variant="outline" className="text-xs">
                                {filament.properties.smell}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="font-semibold text-green-700 mb-3 text-sm">Преимущества:</h4>
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
                              <h4 className="font-semibold text-red-700 mb-3 text-sm">Недостатки:</h4>
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
                              <h4 className="font-semibold text-blue-700 mb-3 text-sm">Применение:</h4>
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
                          <h4 className="font-semibold text-gray-700 mb-2 text-sm">💡 Совет по печати:</h4>
                          <p className="text-xs text-gray-600">{filament.tips}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 text-sm">🏭 Рекомендуемые бренды:</h4>
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

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Постобработка специальных материалов</h2>

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

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Требования к оборудованию</h2>

            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-4">Важные требования:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Сопла:</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>
                      • <strong>Wood PLA:</strong> Латунь 0.6мм+ или сталь
                    </li>
                    <li>
                      • <strong>Metal-filled:</strong> Закаленная сталь обязательно
                    </li>
                    <li>
                      • <strong>Carbon Fiber:</strong> Закаленная сталь или рубин
                    </li>
                    <li>
                      • <strong>Glow:</strong> Латунь или сталь
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Дополнительно:</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• Подогреваемый стол для лучшей адгезии</li>
                    <li>• Закрытая камера для Carbon Fiber</li>
                    <li>• Вентиляция при работе с композитами</li>
                    <li>• Защитные средства при постобработке</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Сравнение стоимости и эффективности</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b p-4 text-left font-semibold">Материал</th>
                    <th className="border-b p-4 text-center font-semibold">Цена/кг</th>
                    <th className="border-b p-4 text-center font-semibold">Сложность</th>
                    <th className="border-b p-4 text-center font-semibold">Уникальность</th>
                    <th className="border-b p-4 text-center font-semibold">Применение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Wood PLA</td>
                    <td className="p-4 text-center">$25-35</td>
                    <td className="p-4 text-center">
                      <Badge variant="default" className="bg-green-600">
                        Легкий
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Высокая</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Декор, хобби</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Metal-filled</td>
                    <td className="p-4 text-center">$40-60</td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary">Средний</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Очень высокая</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Декор, прототипы</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Carbon Fiber</td>
                    <td className="p-4 text-center">$60-100</td>
                    <td className="p-4 text-center">
                      <Badge variant="destructive">Сложный</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Средняя</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Функциональные</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">Glow-in-Dark</td>
                    <td className="p-4 text-center">$30-45</td>
                    <td className="p-4 text-center">
                      <Badge variant="default" className="bg-green-600">
                        Легкий
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="outline">Высокая</Badge>
                    </td>
                    <td className="p-4 text-center text-sm">Декор, игрушки</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Безопасность при работе</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">Меры предосторожности</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Используйте вентиляцию при печати композитов</li>
                    <li>• Носите маску при шлифовке Carbon Fiber</li>
                    <li>• Защитные очки при постобработке</li>
                    <li>• Перчатки при работе с абразивными материалами</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">Уход за оборудованием</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Регулярно меняйте сопла после абразивных материалов</li>
                    <li>• Очищайте экструдер от остатков композитов</li>
                    <li>• Проверяйте износ направляющих филамента</li>
                    <li>• Калибруйте принтер после смены материала</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Заключение</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Специальные филаменты открывают безграничные возможности для творчества и функциональных применений. Wood
              PLA идеален для декоративных проектов, Metal-filled создает впечатляющие визуальные эффекты, Carbon Fiber
              обеспечивает максимальную прочность, а Glow-in-the-Dark добавляет магии в ваши изделия.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="font-semibold text-orange-900 mb-2">Рекомендация для начинающих</h3>
              <p className="text-orange-800">
                Начните с Wood PLA - он прощает ошибки и дает впечатляющие результаты. После освоения переходите к
                Metal-filled для создания уникальных декоративных изделий. Carbon Fiber оставьте на потом, когда
                наберетесь опыта.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/filaments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к филаментам
              </Link>
            </Button>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="/articles/complete-filament-types-guide-2024">К основным материалам →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
