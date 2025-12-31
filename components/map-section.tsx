"use client"

import { useState } from "react"
import { MapPin, ZoomIn, ZoomOut, Navigation2, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react"

export default function MapSection() {
  const [selectedZone, setSelectedZone] = useState("green")

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 md:h-full min-h-96 bg-gray-200">
              {/* Placeholder Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Bản đồ giao hàng tương tác</p>
                  <p className="text-gray-500 text-sm mt-1">Tích hợp bản đồ thực tế tại đây</p>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute right-4 top-4 space-y-2 z-10">
                <button className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-50 transition">
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-50 transition">
                  <ZoomOut className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-gray-50 transition">
                  <Navigation2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Legend */}
              <div className="absolute left-4 bottom-4 bg-white rounded-lg shadow-lg p-4 z-10">
                <p className="text-sm font-semibold text-gray-900 mb-3">LỘP BẢN ĐỒ</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                    <span className="text-sm text-gray-700">Vùng Xanh (Lối)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <span className="text-sm text-gray-700">Vùng Đêm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1">
            {/* Header with Icon */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-bold text-lg text-gray-900">Quy định hoạt động</h2>
            </div>

            <div className="bg-white rounded-xl p-1 shadow-sm mb-6 flex gap-1">
              <button
                onClick={() => setSelectedZone("green")}
                className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition ${
                  selectedZone === "green" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Vùng Xanh
              </button>
              <button
                onClick={() => setSelectedZone("yellow")}
                className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition ${
                  selectedZone === "yellow" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Vùng Đêm
              </button>
            </div>

            {/* Regulations Info */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-lime-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Xe điện & Xe đạp hàng hóa</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-semibold text-lime-600 bg-lime-50 px-2 py-1 rounded">
                        Được phép
                      </span>
                      <span className="text-xs text-gray-600">Hoạt động 24/7</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Không giới hạn tải trong dưới 500kg.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Xe tải động cơ dót trong</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">Hạn chế</span>
                      <span className="text-xs text-gray-600">Cấm 06:00 - 22:00</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Chi được phép giao hàng ban đêm.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Vì sao cần vùng đêm?</h3>
                    <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                      Vùng đêm là khu vực trong chuyên quan trong (Transloading Hubs), nơi hàng hóa từ xe tải hang nặng
                      được chuyển sang các phương tiện không phát thải để giảm 40% lượng khí thải nơi đó.
                    </p>
                    <a
                      href="#"
                      className="text-xs text-lime-600 font-semibold mt-3 inline-flex items-center gap-1 hover:underline"
                    >
                      Xem chi tiết báo cáo <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
