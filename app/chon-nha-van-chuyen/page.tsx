"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import StepsProgress from "@/components/steps-progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Bike, ChevronDown, Package, RotateCcw, Search, Truck, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const carriers = [
  {
    id: 1,
    name: "EcoExpress",
    type: "100% Xe điện",
    icon: Bike,
    price: 45000,
    time: "1-2 ngày",
    co2: -2.4,
    recommended: true,
    originalPrice: 60000,
  },
  {
    id: 2,
    name: "FastMove",
    type: "Hybrid",
    icon: Truck,
    price: 75000,
    time: "Trong ngày",
    co2: -1.1,
    recommended: false,
    originalPrice: null,
  },
  {
    id: 3,
    name: "GreenPacket",
    type: "Tái chế",
    icon: Package,
    price: 32000,
    time: "3-4 ngày",
    co2: -0.8,
    recommended: false,
    originalPrice: null,
  },
]

export default function ChooseCarrierPage() {
  const [vehicleTypes, setVehicleTypes] = useState<string[]>(["100% Xe điện", "Hybrid"])
  const [priceRange, setPriceRange] = useState([0, 150000])
  const [sortBy, setSortBy] = useState("recommended")
  const [selectedCarrier, setSelectedCarrier] = useState<number | null>(1)
  const [ev100Only, setEv100Only] = useState(false)
  const [highRatingOnly, setHighRatingOnly] = useState(false)
  const router = useRouter()

  const filteredCarriers = carriers
    .filter((carrier) => vehicleTypes.length === 0 || vehicleTypes.includes(carrier.type))
    .filter((carrier) => carrier.price >= priceRange[0] && carrier.price <= priceRange[1])
    .filter((carrier) => !ev100Only || carrier.type === "100% Xe điện")
    .filter((carrier) => !highRatingOnly || carrier.recommended)
    .sort((a, b) => {
      if (sortBy === "recommended") return b.recommended ? 1 : -1
      if (sortBy === "price") return a.price - b.price
      if (sortBy === "time") return 0
      if (sortBy === "co2") return Math.abs(b.co2) - Math.abs(a.co2)
      return 0
    })

  const toggleVehicleType = (type: string) => {
    setVehicleTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const resetFilters = () => {
    setVehicleTypes(["100% Xe điện", "Hybrid"])
    setPriceRange([0, 150000])
    setSortBy("recommended")
    setEv100Only(false)
    setHighRatingOnly(false)
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      <StepsProgress currentStep={2} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Chọn nhà vận chuyển</h1>
            </div>
            <p className="text-gray-500 max-w-2xl">
              So sánh các đối tác vận chuyển <span className="text-emerald-600 font-medium text-lg">xe điện (EV)</span> để tối ưu chi phí và giảm khí thải carbon.
            </p>
          </div>
          <div className="flex items-center">
            <span className="bg-emerald-50 text-emerald-600 text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Bước 2/3
            </span>
          </div>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Bộ lọc tìm kiếm
            </h3>
            <button
              onClick={resetFilters}
              className="ml-auto text-sm text-gray-500 hover:text-emerald-600 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại bộ lọc
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Vehicle Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Loại phương tiện</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full h-12 rounded-xl border-gray-100 bg-gray-50/50 focus:ring-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Tất cả loại xe" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại xe</SelectItem>
                  <SelectItem value="ev">100% Xe điện</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Khoảng giá</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full h-12 rounded-xl border-gray-100 bg-gray-50/50 focus:ring-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Tất cả mức giá" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả mức giá</SelectItem>
                  <SelectItem value="under50">Dưới 50.000đ</SelectItem>
                  <SelectItem value="over50">Trên 50.000đ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Delivery Time */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Thời gian giao</label>
              <Select defaultValue="anytime">
                <SelectTrigger className="w-full h-12 rounded-xl border-gray-100 bg-gray-50/50 focus:ring-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Mọi thời điểm" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="anytime">Mọi thời điểm</SelectItem>
                  <SelectItem value="today">Trong ngày</SelectItem>
                  <SelectItem value="tomorrow">Ngày mai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* CO2 Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mức giảm CO2</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full h-12 rounded-xl border-gray-100 bg-gray-50/50 focus:ring-emerald-500/20">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-bold text-gray-400">CO₂</span>
                    <SelectValue placeholder="Tất cả mức giảm" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả mức giảm</SelectItem>
                  <SelectItem value="high">Cao nhất (&gt; 2kg)</SelectItem>
                  <SelectItem value="medium">Trung bình (1-2kg)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-50">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <Checkbox
                  checked={ev100Only}
                  onCheckedChange={(checked) => setEv100Only(checked === true)}
                  className="w-5 h-5 rounded-md border-gray-200 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Chỉ hiện xe điện 100%</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <Checkbox
                checked={highRatingOnly}
                onCheckedChange={(checked) => setHighRatingOnly(checked === true)}
                className="w-5 h-5 rounded-md border-gray-200 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Đánh giá &gt; 4.5 sao</span>
            </label>
          </div>
        </div>

        {/* Results Info and Sorting */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Kết quả tìm kiếm</h2>
            <span className="text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md text-sm font-bold">
              {filteredCarriers.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 font-medium">Sắp xếp theo:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px] h-10 rounded-xl border-gray-100 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Đề xuất tốt nhất</SelectItem>
                <SelectItem value="price">Giá thấp nhất</SelectItem>
                <SelectItem value="co2">Giảm CO₂ nhiều nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Carrier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCarriers.map((carrier) => {
            const Icon = carrier.icon
            const isSelected = selectedCarrier === carrier.id
            const isEco = carrier.type === "100% Xe điện"

            return (
              <div
                key={carrier.id}
                onClick={() => setSelectedCarrier(carrier.id)}
                className={`group relative bg-white rounded-[2rem] p-8 border-2 transition-all cursor-pointer ${
                  isSelected
                    ? "border-emerald-500 shadow-[0_20px_40px_rgba(16,185,129,0.1)] ring-1 ring-emerald-500"
                    : "border-transparent hover:border-gray-100 hover:shadow-xl"
                }`}
              >
                {/* Selection indicator */}
                <div className="absolute top-8 right-8">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? "border-emerald-500 bg-white" : "border-gray-200"
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-emerald-500"></div>}
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isEco ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{carrier.name}</h3>
                    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      isEco ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                    }`}>
                      <Zap className="w-3 h-3 fill-current" />
                      {carrier.type}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Thời gian:</span>
                    <span className="text-gray-900 font-bold">{carrier.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Khí thải tiết kiệm:</span>
                    <span className={`font-bold ${carrier.co2 < 0 ? "text-emerald-500" : "text-gray-900"}`}>
                      {carrier.co2} kg CO2
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between border-t border-gray-50 pt-6">
                  <div>
                    <span className="text-3xl font-black text-emerald-500">
                      {carrier.price.toLocaleString("vi-VN")}
                      <span className="text-xl ml-0.5">đ</span>
                    </span>
                  </div>
                  {carrier.originalPrice && (
                    <span className="text-sm text-gray-300 line-through font-bold">
                      {carrier.originalPrice.toLocaleString("vi-VN")}đ
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between w-full mx-auto">
          <button
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all group"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Quay lại
          </button>
          <button
            className="flex items-center gap-3 px-12 py-4 rounded-2xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-500/30 transition-all group"
            onClick={() => router.push("/thanh-toan")}
          >
            Tiếp tục
            <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
