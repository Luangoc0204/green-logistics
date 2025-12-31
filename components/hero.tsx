import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
              <span className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wide">
                SUSTAINABLE LOGISTICS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
              Dịch vụ vận chuyển xanh cho <span className="text-lime-500">vùng phát thải</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Smart logistics connecting zero-emission zones. Reliable, fast, and 100% electric. Chúng tôi kết nối các
              kho ngoài quận với trung tâm thành phố bằng dội xe điện chuyên dụng.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12">
              <Link href="/tao-don-hang" className="flex-1 sm:flex-none">
                <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 md:px-8 rounded-lg flex items-center justify-center gap-2">
                  <div className="w-4 h-4 bg-black rounded"></div>
                  Tạo đơn vận chuyển
                </Button>
              </Link>
              <Link href="#" className="flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold px-6 md:px-8 rounded-lg flex items-center justify-center gap-2 bg-transparent"
                >
                  <div className="w-4 h-4 border-2 border-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  Đăng ký nhà vận chuyển
                </Button>
              </Link>
            </div>

            {/* Trust Section */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Được tin dùng bởi <span className="font-semibold">500+ doanh nghiệp</span>
              </p>
            </div>
          </div>

          {/* Right Image/Map */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/vietnam-delivery-map-green-logistics.jpg" alt="Delivery Map" fill className="object-cover" />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 right-4 bg-lime-500 text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base">
              <div className="w-3 h-3 bg-green-700 rounded-full"></div>
              Vùng xanh (Zero Emission)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
