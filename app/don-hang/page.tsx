"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Leaf,
  MoreVertical,
  Package,
  Plus,
  Search,
  Truck,
  Zap
} from "lucide-react"
import Link from "next/link"

const orders = [
  {
    id: "#ORD-2023-089",
    time: "20/10/2023",
    subTime: "08:30 AM",
    pickup: "Kho A, Q. Tân Bình",
    delivery: "Kho B, TP. Thủ Đức",
    carrier: "VinFast Logistics",
    carrierType: "Xe điện",
    status: "Đang vận chuyển",
    statusColor: "text-blue-600 bg-blue-50",
    statusDot: "bg-blue-500",
    co2: "2.4 kg"
  },
  {
    id: "#ORD-2023-088",
    time: "19/10/2023",
    subTime: "14:15 PM",
    pickup: "123 Nguyễn Huệ, Q.1",
    delivery: "456 Lê Duẩn, Q.1",
    carrier: "EcoExpress",
    carrierType: "Xe điện",
    status: "Đã hoàn thành",
    statusColor: "text-emerald-600 bg-emerald-50",
    statusDot: "bg-emerald-500",
    co2: "1.8 kg"
  },
  {
    id: "#ORD-2023-087",
    time: "19/10/2023",
    subTime: "09:00 AM",
    pickup: "KCN VSIP 1",
    delivery: "Cảng Cát Lái",
    carrier: "GreenTrans",
    carrierType: "Xe điện",
    status: "Chờ xử lý",
    statusColor: "text-orange-600 bg-orange-50",
    statusDot: "bg-orange-500",
    co2: "Đang tính toán"
  },
  {
    id: "#ORD-2023-086",
    time: "18/10/2023",
    subTime: "16:45 PM",
    pickup: "Kho C, Q. Bình Thạnh",
    delivery: "Kho D, Q. Gò Vấp",
    carrier: "VinFast Logistics",
    carrierType: "Xe điện",
    status: "Đã hoàn thành",
    statusColor: "text-emerald-600 bg-emerald-50",
    statusDot: "bg-emerald-500",
    co2: "1.1 kg"
  }
]

import { AuthGuard } from "@/components/auth-guard"

export default function OrderListPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50/50 flex flex-col">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Danh sách đơn hàng</h1>
              <p className="text-gray-500 font-medium">Quản lý và theo dõi các lô hàng vận chuyển xanh của bạn.</p>
            </div>
            <Link href="/tao-don-hang">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-14 px-8 rounded-2xl shadow-xl shadow-emerald-500/20 gap-2 text-lg">
                <Plus className="w-6 h-6" />
                Tạo đơn hàng mới
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6">
              <div className="w-16 h-16 rounded-[2rem] bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">Đang vận chuyển</p>
                <p className="text-3xl font-black text-gray-900">4 Đơn</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6">
              <div className="w-16 h-16 rounded-[2rem] bg-orange-50 flex items-center justify-center text-orange-600 shadow-inner">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">Chờ xử lý</p>
                <p className="text-3xl font-black text-gray-900">2 Đơn</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-emerald-500 shadow-sm flex items-center gap-6">
              <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">CO2 đã giảm</p>
                <p className="text-3xl font-black text-emerald-600">124.5 kg</p>
              </div>
            </div>
          </div>

          {/* Filters and Table Card */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden mb-10">
            {/* Tabs */}
            <div className="flex border-b border-gray-50 px-8 pt-6 overflow-x-auto scrollbar-hide">
              <button className="px-6 py-4 border-b-4 border-emerald-500 text-sm font-black text-gray-900 whitespace-nowrap">
                Tất cả (12)
              </button>
              <button className="px-6 py-4 border-b-4 border-transparent text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors whitespace-nowrap">
                Chờ xử lý (2)
              </button>
              <button className="px-6 py-4 border-b-4 border-transparent text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors whitespace-nowrap">
                Đang vận chuyển (4)
              </button>
              <button className="px-6 py-4 border-b-4 border-transparent text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors whitespace-nowrap">
                Đã hoàn thành (6)
              </button>
            </div>

            {/* Filter Bar */}
            <div className="p-8 flex flex-col md:flex-row items-center gap-4 border-b border-gray-50">
              <div className="relative flex-1 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                <Input
                  placeholder="Tìm theo Mã vận đơn, Tên đối tác..."
                  className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-sm font-medium"
                />
              </div>
              <div className="relative w-full md:w-64 group">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                <Input
                  placeholder="Lọc theo ngày"
                  className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-sm font-medium"
                />
              </div>
              <Button variant="ghost" className="h-14 px-6 rounded-2xl gap-2 font-bold text-emerald-600 hover:bg-emerald-50">
                <Filter className="w-5 h-5" />
                Bộ lọc nâng cao
              </Button>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-50/50">
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50">Mã vận đơn</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50">Thời gian</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50 text-center">Lộ trình</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50">Đối tác vận chuyển</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50">Trạng thái</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-emerald-100/50 text-right">Tiết kiệm CO2</th>
                    <th className="px-8 py-5 border-b border-emerald-100/50"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-8 font-black text-emerald-600 text-sm">
                        <Link href={`/don-hang/${order.id.replace("#", "")}`} className="hover:underline">
                          {order.id}
                        </Link>
                      </td>
                      <td className="px-8 py-8">
                        <p className="text-sm font-black text-gray-900 leading-none mb-1">{order.time}</p>
                        <p className="text-[10px] font-bold text-emerald-600 tracking-tighter uppercase">{order.subTime}</p>
                      </td>
                      <td className="px-8 py-8 min-w-[240px]">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                            <span className="text-xs font-bold text-gray-500 leading-tight">{order.pickup}</span>
                          </div>
                          <div className="h-4 border-l-2 border-dashed border-gray-100 ml-1"></div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                            <span className="text-xs font-bold text-gray-500 leading-tight">{order.delivery}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700">
                            <Truck className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-gray-900">{order.carrier}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Zap className="w-3 h-3 text-emerald-500 fill-current" />
                              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tight">{order.carrierType}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black ${order.statusColor}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${order.statusDot}`}></div>
                          {order.status}
                        </div>
                      </td>
                      <td className="px-8 py-8 text-right">
                        {order.co2.includes("kg") ? (
                          <div className="inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                            <Leaf className="w-3.5 h-3.5" />
                            <span className="text-sm font-black">{order.co2}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-bold text-gray-300 italic">Đang tính toán...</span>
                        )}
                      </td>
                      <td className="px-8 py-8 text-right">
                        <button className="p-2 text-gray-300 hover:text-gray-900 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer of card: Pagination */}
            <div className="p-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-400 font-bold">
                Hiển thị <span className="text-gray-900">1</span> đến <span className="text-gray-900">4</span> trong số <span className="text-gray-900">12</span> kết quả
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-emerald-500">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button className="w-10 h-10 p-0 rounded-xl bg-emerald-500 text-white font-black shadow-lg shadow-emerald-500/20">1</Button>
                <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl text-gray-400 font-bold hover:bg-emerald-50 hover:text-emerald-500">2</Button>
                <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl text-gray-400 font-bold hover:bg-emerald-50 hover:text-emerald-500">3</Button>
                <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-emerald-500">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="bg-emerald-950 rounded-[3rem] p-10 md:p-14 mb-10 overflow-hidden relative group">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                  Giảm <span className="text-emerald-400">15%</span> cho đơn hàng tiếp theo
                </h2>
                <p className="text-emerald-100/60 font-medium text-lg mb-8 leading-relaxed">
                  Cảm ơn bạn đã đồng hành cùng chúng tôi trong hành trình giảm thiểu khí thải carbon. Sử dụng mã <span className="text-white font-black bg-emerald-900/50 px-3 py-1 rounded-lg border border-emerald-800">GOGREEN2024</span> cho đơn hàng vận chuyển EV tiếp theo.
                </p>
              </div>
              <Button className="h-16 px-12 rounded-[2rem] bg-white text-emerald-950 hover:bg-emerald-50 font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
                Sao chép mã
              </Button>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-50 py-10 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-bold text-gray-400">© 2024 GreenLogistics. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors">Chính sách bảo mật</Link>
              <Link href="#" className="text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors">Điều khoản sử dụng</Link>
              <Link href="#" className="text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors">Hỗ trợ</Link>
            </div>
          </div>
        </footer>
      </div>
    </AuthGuard>
  )
}
