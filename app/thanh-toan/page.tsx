"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import StepsProgress from "@/components/steps-progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    ArrowLeft,
    Building2,
    ChevronRight,
    CreditCard,
    Info,
    Leaf,
    ShieldCheck,
    Truck,
    Wallet
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      <Header />
      <StepsProgress currentStep={3} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Thanh toán an toàn</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded uppercase">Bước 3/4</span>
            Vui lòng chọn phương thức thanh toán phù hợp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Payment Methods Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 bg-gray-50/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phương thức thanh toán</h3>
              </div>

              <div className="p-8">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  {/* Credit Card Option */}
                  <div className={`relative rounded-2xl border-2 transition-all p-6 ${
                    paymentMethod === "card" ? "border-emerald-500 bg-emerald-50/30" : "border-gray-100 hover:border-gray-200"
                  }`}>
                    <div className="flex items-start gap-4">
                      <RadioGroupItem value="card" id="card" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="card" className="flex items-center justify-between cursor-pointer mb-1">
                          <span className="text-lg font-bold text-gray-900">Thẻ tín dụng / Ghi nợ quốc tế</span>
                          <div className="flex gap-2">
                             <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-2 py-0.5 rounded border border-gray-200 uppercase tracking-tighter">Visa</span>
                             <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-2 py-0.5 rounded border border-gray-200 uppercase tracking-tighter">MC</span>
                          </div>
                        </Label>
                        <p className="text-sm text-gray-500 mb-6">Thanh toán an toàn qua cổng OnePay</p>

                        {paymentMethod === "card" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="md:col-span-2 space-y-2">
                              <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Số thẻ</Label>
                              <div className="relative">
                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input placeholder="0000 0000 0000 0000" className="pl-12 h-14 rounded-xl border-gray-100 bg-white" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ngày hết hạn</Label>
                              <Input placeholder="MM/YY" className="h-14 rounded-xl border-gray-100 bg-white" />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">CVC/CVV</Label>
                              <div className="relative">
                                <Input placeholder="123" className="h-14 rounded-xl border-gray-100 bg-white pr-10" />
                                <Info className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                              </div>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                              <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tên chủ thẻ</Label>
                              <Input placeholder="NGUYEN VAN A" className="h-14 rounded-xl border-gray-100 bg-white uppercase" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* E-wallet Option */}
                  <div className={`rounded-2xl border-2 transition-all p-6 ${
                    paymentMethod === "wallet" ? "border-emerald-500 bg-emerald-50/30" : "border-gray-100 hover:border-gray-200"
                  }`}>
                    <div className="flex items-start gap-4">
                      <RadioGroupItem value="wallet" id="wallet" className="mt-1" />
                      <div className="flex-1 cursor-pointer" onClick={() => setPaymentMethod("wallet")}>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">Ví điện tử (MoMo / ZaloPay)</span>
                          <Wallet className="w-5 h-5 text-emerald-500" />
                        </div>
                        <p className="text-sm text-gray-500">Quét mã thanh toán nhanh chóng</p>
                      </div>
                    </div>
                  </div>

                  {/* Bank Transfer Option */}
                  <div className={`rounded-2xl border-2 transition-all p-6 ${
                    paymentMethod === "bank" ? "border-emerald-500 bg-emerald-50/30" : "border-gray-100 hover:border-gray-200"
                  }`}>
                    <div className="flex items-start gap-4">
                      <RadioGroupItem value="bank" id="bank" className="mt-1" />
                      <div className="flex-1 cursor-pointer" onClick={() => setPaymentMethod("bank")}>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">Chuyển khoản ngân hàng</span>
                          <Building2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <p className="text-sm text-gray-500">VietQR - Tự động xác nhận trong 5 phút</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 text-gray-400 py-4">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
               <p className="text-sm">Thông tin thanh toán của bạn được mã hóa và bảo mật tuyệt đối.</p>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sticky top-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Tóm tắt đơn hàng</h3>
                <span className="text-xs text-gray-400 font-mono">#GR-882910</span>
              </div>

              {/* Path Visualization */}
              <div className="relative pl-6 space-y-8 mb-8 border-l-2 border-dashed border-gray-100 ml-2">
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-0 w-5 h-5 rounded-full border-2 border-emerald-500 bg-white"></div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Điểm lấy hàng</p>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Kho A, Khu công nghiệp Tân Bình, TP.HCM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-0 w-5 h-5 rounded-full bg-emerald-500"></div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Điểm giao hàng</p>
                  <p className="text-sm font-bold text-gray-900 leading-tight">123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
                </div>
              </div>

              {/* Vehicle Box */}
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Truck className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Xe tải điện 1.5 Tấn</p>
                  <p className="text-[10px] font-medium text-gray-400">Zero Emissions</p>
                </div>
              </div>

              {/* Green Badge */}
              <div className="bg-emerald-50 rounded-2xl p-4 flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm font-medium">Giảm phát thải CO2</span>
                </div>
                <span className="text-sm font-bold text-emerald-600">+2.5 kg</span>
              </div>

              {/* Price Details */}
              <div className="space-y-4 mb-8 pt-8 border-t border-gray-50">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Phí vận chuyển</span>
                  <span className="text-gray-900 font-bold">850.000 đ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Phí dịch vụ xanh</span>
                  <span className="text-gray-900 font-bold">50.000 đ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Thuế GTGT (8%)</span>
                  <span className="text-gray-900 font-bold">72.000 đ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-500 font-medium">Mã giảm giá (ECO2023)</span>
                  <span className="text-emerald-500 font-bold">-50.000 đ</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Tổng thanh toán</p>
                  <p className="text-[10px] text-gray-400">(Đã bao gồm thuế)</p>
                </div>
                <p className="text-3xl font-black text-gray-900">922.000 đ</p>
              </div>

              <Button
                onClick={() => router.push("/hoan-tat")}
                className="w-full h-16 mt-10 bg-emerald-500 hover:bg-emerald-600 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-500/20 gap-3 group"
              >
                Xác nhận thanh toán
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed">
                Bằng việc xác nhận, bạn đồng ý với <span className="underline cursor-pointer">Điều khoản dịch vụ</span> của chúng tôi.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex border-t border-gray-100 pt-10 px-4 items-center justify-between">
          <Button variant="ghost" className="text-gray-500 hover:text-emerald-600 gap-2 font-bold" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
            Quay lại bước chọn nhà vận chuyển
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
