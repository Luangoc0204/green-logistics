"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import StepsProgress from "@/components/steps-progress"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, Home, Package, Share2, Truck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      <Header />
      <StepsProgress currentStep={4} />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-emerald-500/10 border border-gray-100 overflow-hidden text-center p-12 md:p-20">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4">Thanh toán thành công!</h1>
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Đơn hàng <span className="text-emerald-600 font-bold">#GR-882910</span> của bạn đã được xác nhận và đang chờ nhà vận chuyển lấy hàng.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-left flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Truck className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dự kiến giao</p>
                <p className="text-base font-bold text-gray-900">14:00 - Hôm nay</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-left flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Package className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Mã vận đơn</p>
                <p className="text-base font-bold text-gray-900">EV-5542091</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                onClick={() => router.push("/")}
                className="h-14 px-10 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl gap-2 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </Button>
            <Button
                variant="outline"
                className="h-14 px-10 border-2 border-gray-100 font-bold rounded-2xl gap-2 hover:bg-gray-50"
            >
              <Download className="w-5 h-5" />
              Tải hóa đơn
            </Button>
          </div>

          <button className="mt-10 text-emerald-600 font-bold flex items-center gap-2 mx-auto hover:underline">
            <Share2 className="w-4 h-4" />
            Chia sẻ hành trình xanh của bạn
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
