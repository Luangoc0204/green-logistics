import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-green-900 py-12 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Sắn sáng chuyển đổi xanh?
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-base md:text-lg mb-8 md:mb-10">
          Tham gia mạng lưới logistics bền vững ngay hôm nay để giảm chi phí vận hành và bảo vệ môi trường.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-lg text-base md:text-lg">
            Bắt đầu ngay
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-green-800 font-semibold px-8 py-3 rounded-lg text-base md:text-lg bg-transparent"
          >
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  )
}
