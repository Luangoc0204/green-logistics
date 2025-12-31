"use client"

import { useState } from "react"
import { ChevronDown, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchZone() {
  const [city, setCity] = useState("Hà Nội")
  const [isCityOpen, setIsCityOpen] = useState(false)

  const cities = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"]

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-sm font-semibold text-lime-600 mb-2">VÙNG XANH & QUY ĐỊNH</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vùng xanh & Quy định</h1>
          <p className="text-base md:text-lg text-lime-600">
            Tra cứu khu vực hoạt động giao nhận xanh và các quy định về phương tiện trong nội đó.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Address Input */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tra cứu địa chỉ</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nhập địa chỉ của bạn để kiểm tra..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-900"
                />
              </div>
            </div>

            {/* City Dropdown */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Thành phố</label>
              <div className="relative">
                <button
                  onClick={() => setIsCityOpen(!isCityOpen)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <span className="text-gray-900">{city}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
                {isCityOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {cities.map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setCity(c)
                          setIsCityOpen(false)
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 first:rounded-t-lg last:rounded-b-lg transition"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Check Button */}
            <div className="md:col-span-1 flex items-end">
              <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                Kiểm tra
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
