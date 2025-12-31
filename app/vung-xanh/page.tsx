"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Bike,
  Building2,
  CheckCircle2,
  Info,
  Layers,
  Minus,
  Navigation,
  Plus,
  Search,
  ShieldCheck,
  Truck
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegulationsPage() {
  const [activeTheme, setActiveTheme] = useState("Vùng Xanh")

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Title Section */}
        <div className="mb-10 px-2">
          <h1 className="text-[42px] font-black text-gray-900 tracking-tight mb-3">Vùng xanh & Quy định</h1>
          <p className="text-lg text-emerald-600 font-medium opacity-80">
            Tra cứu khu vực hoạt động giao nhận xanh và các quy định về phương tiện trong nội đô.
          </p>
        </div>

        {/* Search & City Filter Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col md:flex-row items-end gap-6 mb-10">
          <div className="flex-1 space-y-3 w-full">
            <label className="text-[11px] font-black text-gray-900 uppercase tracking-widest pl-1">Tra cứu địa chỉ</label>
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
              <Input
                placeholder="Nhập địa chỉ của bạn để kiểm tra..."
                className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm font-bold placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="w-full md:w-80 space-y-3">
             <label className="text-[11px] font-black text-gray-900 uppercase tracking-widest pl-1">Thành phố</label>
             <Select defaultValue="hanoi">
               <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50 font-bold text-gray-700">
                 <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <SelectValue placeholder="Chọn thành phố" />
                 </div>
               </SelectTrigger>
               <SelectContent className="rounded-2xl border-gray-100 shadow-xl">
                 <SelectItem value="hanoi" className="font-bold py-3">Hà Nội</SelectItem>
                 <SelectItem value="hcm" className="font-bold py-3">TP. Hồ Chí Minh</SelectItem>
               </SelectContent>
             </Select>
          </div>
          <Button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 gap-2 text-base transition-all group shrink-0 border-none ring-0">
             Kiểm tra
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 relative">
             <div className="relative h-[700px] rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/30">
                {/* Fake Map Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80")' }}
                >
                   <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply"></div>
                </div>

                {/* Layer Control Overlay */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl border border-white/50 w-72">
                   <div className="flex items-center gap-3 mb-8">
                      <Layers className="w-4 h-4 text-emerald-500" />
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Lớp bản đồ</p>
                   </div>
                   <div className="space-y-6">
                      <div className="flex items-center justify-between group cursor-pointer">
                         <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-lg border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center">
                               <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm font-black text-gray-700 tracking-tight">Vùng Xanh (Lõi)</span>
                         </div>
                         <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                      </div>
                      <div className="flex items-center justify-between group cursor-pointer">
                         <div className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-lg border-2 border-orange-400 bg-orange-400 flex items-center justify-center">
                               <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm font-black text-gray-700 tracking-tight">Vùng Đệm</span>
                         </div>
                         <div className="w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
                      </div>
                   </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-8 right-8 flex flex-col gap-4">
                   <button className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center text-gray-700 shadow-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                      <Navigation className="w-6 h-6 fill-current text-emerald-500" />
                   </button>
                   <div className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-50">
                      <button className="w-14 h-16 flex items-center justify-center text-gray-700 border-b border-gray-50 hover:bg-gray-50 transition-colors rounded-t-3xl">
                         <Plus className="w-6 h-6" />
                      </button>
                      <button className="w-14 h-16 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors rounded-b-3xl">
                         <Minus className="w-6 h-6" />
                      </button>
                   </div>
                </div>

                {/* Bottom Center Badge */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                   <div className="bg-white/95 backdrop-blur-md px-10 py-5 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,1)]"></div>
                      <p className="text-base font-black text-gray-900 tracking-tight">
                        Khu vực hiện tại: <span className="text-emerald-600">Hoàn Kiếm (Vùng Xanh)</span>
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Sidebar Section */}
          <div className="space-y-8">
             {/* Regulation Card */}
             <div className="bg-white rounded-[3.5rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/20 min-h-[520px] flex flex-col">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                   <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Quy định hoạt động</h3>
                </div>

                {/* Tabs */}
                <div className="bg-gray-100/80 p-2 rounded-2xl flex mb-10">
                   {["Vùng Xanh", "Vùng Đệm"].map((tab) => (
                      <button
                         key={tab}
                         onClick={() => setActiveTheme(tab)}
                         className={`flex-1 py-4 text-sm font-black rounded-xl transition-all ${
                            activeTheme === tab ? "bg-white text-emerald-600 shadow-xl" : "text-gray-400 hover:text-gray-600"
                         }`}
                      >
                         {tab}
                      </button>
                   ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-12 flex-1">
                   {/* Rule 1 */}
                   <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                         <Bike className="w-9 h-9" />
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-black text-gray-900 leading-none">Xe điện & Xe đạp hàng hóa</h4>
                         </div>
                         <div className="flex items-center gap-2 mb-4">
                            <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-md uppercase">Được phép</span>
                            <span className="text-[10px] font-bold text-gray-400 ml-1">Hoạt động 24/7</span>
                         </div>
                         <p className="text-sm font-bold text-gray-500 leading-relaxed italic opacity-80">
                            Không giới hạn tải trọng dưới 500kg.
                         </p>
                      </div>
                   </div>

                   {/* Rule 2 */}
                   <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-[1.25rem] bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 shadow-inner">
                         <Truck className="w-9 h-9" />
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-black text-gray-900 leading-none">Xe tải động cơ đốt trong</h4>
                         </div>
                         <div className="flex items-center gap-2 mb-4">
                            <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-3 py-1 rounded-md uppercase">Hạn chế</span>
                            <span className="text-[10px] font-bold text-gray-400 ml-1">Cấm 06:00 - 22:00</span>
                         </div>
                         <p className="text-sm font-bold text-gray-500 leading-relaxed italic opacity-80">
                            Chỉ được phép giao hàng ban đêm.
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Why Buffer Zone? */}
             <div className="bg-emerald-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden group border border-emerald-900 shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-700"></div>

                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Info className="w-5 h-5" />
                   </div>
                   <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400">Vì sao cần vùng đệm?</h3>
                </div>

                <p className="text-[15px] font-bold text-emerald-100/70 leading-relaxed mb-10">
                   Vùng đệm là khu vực trung chuyển quan trọng (Transloading Hubs), nơi hàng hóa từ xe tải hạng nặng được chuyển sang các phương tiện không phát thải (xe điện, xe đạp) để đi vào vùng xanh, giúp giảm <span className="text-emerald-400 font-black text-lg">40%</span> lượng khí thải nội đô.
                </p>

                <Link href="#" className="inline-flex items-center gap-2 text-sm font-black text-white hover:text-emerald-300 transition-all group/link">
                   Xem chi tiết báo cáo
                   <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-sm font-bold text-gray-400">© 2024 GreenLogistics. All rights reserved.</p>
           <div className="flex items-center gap-10">
              <Link href="#" className="text-sm font-black text-gray-400 hover:text-emerald-600 transition-colors">Quyền riêng tư</Link>
              <Link href="#" className="text-sm font-black text-gray-400 hover:text-emerald-600 transition-colors">Điều khoản sử dụng</Link>
           </div>
        </div>
      </footer>
    </div>
  )
}
