"use client";

import { Compass } from "lucide-react";
import { useState } from "react";

export default function OrderMap() {
  const [zoom, setZoom] = useState(13);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg h-full min-h-96 lg:min-h-screen sticky top-8">
      {/* Map Content */}
      <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://maps.google.com/maps?q=Ho+Chi+Minh+City&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          title="Google Maps"
          className="w-full h-full"
        ></iframe>

        {/* Floating Green Zone Info */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900">
              Khu vực phát thải thấp (Green Zone)
            </span>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-4 z-10">
          <button className="p-4 bg-white text-emerald-500 rounded-2xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
