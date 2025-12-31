"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, Truck, Star, Search, Calendar, Bike, Car } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OrderForm() {
  const router = useRouter()
  const [pickup, setPickup] = useState("")
  const [delivery, setDelivery] = useState("")
  const [cargoType, setCargoType] = useState("light")
  const [vehicleType, setVehicleType] = useState("bike")
  const [weight, setWeight] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [notes, setNotes] = useState("")
  const [isEligible, setIsEligible] = useState(true)

  return (
    <div className="bg-white">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tạo đơn hàng mới</h1>
          <p className="text-gray-600 mt-2">Nhập chi tiết đơn hàng vận chuyển xe điện</p>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Điểm lấy hàng (Vùng đêm)</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Kho văn Bình Tân, Đường số 7"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Delivery Location */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Điểm giao hàng (Vùng xanh)</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5">📍</div>
            <input
              type="text"
              placeholder="Tòa nhà Bitexco, Quận 1"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Eligibility Check */}
        {isEligible && (
          <div className="bg-lime-50 border border-lime-200 rounded-lg p-4 flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Đơn hàng đủ điều kiện vào vùng xanh</p>
              <p className="text-sm text-gray-600">Phương tiện EV được phép hoạt động 24/7</p>
            </div>
          </div>
        )}

        {/* Cargo Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Loại hàng hóa</label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setCargoType("light")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                cargoType === "light" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Package className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Hàng nhẹ</span>
            </button>
            <button
              onClick={() => setCargoType("heavy")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                cargoType === "heavy" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Hàng nặng</span>
            </button>
            <button
              onClick={() => setCargoType("special")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                cargoType === "special" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Star className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Đặc biệt</span>
            </button>
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Loại xe vận chuyển</label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setVehicleType("bike")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                vehicleType === "bike" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Bike className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Xe máy</span>
            </button>
            <button
              onClick={() => setVehicleType("car")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                vehicleType === "car" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Car className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Ô tô</span>
            </button>
            <button
              onClick={() => setVehicleType("van")}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                vehicleType === "van" ? "border-lime-500 bg-lime-50" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Xe van</span>
            </button>
          </div>
        </div>

        {/* Weight and Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Cân nặng (kg)</label>
            <input
              type="number"
              placeholder="Vd: 25"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Kích thước (cm)</label>
            <input
              type="text"
              placeholder="Vd: 30x40x50"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Date Time */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Thời gian mong muốn</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Ghi chú tài xế</label>
          <textarea
            placeholder="Ví dụ: Gọi trước khi đến 15 phút..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* CO2 Savings */}
        <div className="bg-lime-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lime-600 font-semibold">🌱</span>
            <span className="text-gray-700 font-medium">Tiết kiệm 1.2kg CO2</span>
          </div>
          <span className="text-gray-500 text-sm">Tổng chỉ phí ước tính</span>
        </div>

        {/* Cost Display */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-right">
            <p className="text-gray-600 text-sm mb-2">Tổng chỉ phí ước tính</p>
            <p className="text-3xl font-bold text-gray-900">145.000đ</p>
          </div>
        </div>

        {/* Book Button */}
        <Button onClick={() => router.push("/chon-nha-van-chuyen")} className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 rounded-lg text-lg h-auto">
          Đặt xe ngay
        </Button>
      </div>
    </div>
  )
}
