import { Package, Truck, MapPin } from "lucide-react"

const steps = [
  {
    icon: Package,
    number: "1",
    title: "Booking (Đặt đơn)",
    description: "Khách hàng tạo đơn trên ứng dụng hoặc website. Hệ thống tự động phân phối xe giới thiệu.",
  },
  {
    icon: Truck,
    number: "2",
    title: "EV Pickup at Hub",
    description: "Hàng hóa được tập kết tại vùng đêm để chuyên sang đội xe điện chuyên dụng.",
  },
  {
    icon: MapPin,
    number: "3",
    title: "Last Mile Delivery",
    description: "Giao hàng chạy cuối trong vùng xanh, không nằng sợ, không khí thải.",
  },
]

export default function Process() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Quy trình vận hành tối ưu</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Hệ thống của chúng tôi tự động hóa quy trình từ khâu đặt đơn đến giao hàng cuối, đảm bảo hiệu quả và bảo vệ
            môi trường.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-gray-400" />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-bold text-gray-200 mb-2">{step.number}</h3>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h4>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
