import { Zap, Shield, Leaf } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "100% EV",
    subtitle: "ĐỘI XE ĐIỆN",
    description: "Loại bỏ hoàn toàn khí thải độc hại trong.",
  },
  {
    icon: Shield,
    title: "Zero Emission",
    subtitle: "TUÂN THỬ VÙNG CẤM",
    description: "Được cấp phép hoạt động trong các vùng lệnh cấm thải.",
  },
  {
    icon: Leaf,
    title: "Verified",
    subtitle: "GIẢM THIỂU CO₂",
    description: "Bảo cáo phát thải môi gian cho công ty hàng.",
  },
]

export default function Features() {
  return (
    <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-lime-600" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{feature.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
