"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut, Compass } from "lucide-react"

export default function OrderMap() {
  const [zoom, setZoom] = useState(13)

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg h-full min-h-96 lg:min-h-screen sticky top-8">
      {/* Map Background */}
      <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 flex items-center justify-center relative">
        {/* Map Image Placeholder */}
        <img src="/ho-chi-minh-city-delivery-map-with-green-zones.jpg" alt="Delivery map" className="w-full h-full object-cover" />

        {/* Pickup Marker */}
        <div className="absolute left-1/3 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-orange-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
            🔺
          </div>
          <p className="text-xs font-semibold mt-2 text-gray-900 whitespace-nowrap">Điểm lấy hàng</p>
        </div>

        {/* Delivery Marker */}
        <div className="absolute right-1/4 bottom-1/3 transform translate-x-1/2 translate-y-1/2">
          <div className="w-10 h-10 bg-lime-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
            📍
          </div>
          <p className="text-xs font-semibold mt-2 text-gray-900 whitespace-nowrap">Điểm giao hàng</p>
        </div>

        {/* Green Zone Label */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ● Vùng Xanh (Low Emission Zone)
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Zoom Controls */}
          <div className="bg-white rounded-lg shadow-lg flex flex-col">
            <button
              onClick={() => setZoom(Math.min(zoom + 1, 18))}
              className="p-2 hover:bg-gray-100 transition-colors border-b border-gray-200"
            >
              <ZoomIn className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => setZoom(Math.max(zoom - 1, 10))} className="p-2 hover:bg-gray-100 transition-colors">
              <ZoomOut className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Compass Control */}
          <button className="bg-white rounded-lg shadow-lg p-2 hover:bg-gray-100 transition-colors">
            <Compass className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Attribution */}
        <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white bg-opacity-80 px-2 py-1 rounded">
          Map data ©
        </div>
      </div>
    </div>
  )
}
