"use client"

import Header from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    ArrowRight,
    Bell,
    Calendar,
    LayoutDashboard,
    Leaf,
    LogOut,
    Navigation,
    ScrollText,
    Search,
    Settings,
    TrendingUp,
    Truck,
    User,
    Wallet,
    Zap
} from "lucide-react"
import { useState } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Truck, label: "Fleet Management" },
    { icon: ScrollText, label: "Order History" },
    { icon: Wallet, label: "Earnings" },
    { icon: User, label: "Profile" },
  ]

  const stats = [
    {
      label: "Số xe đang hoạt động",
      value: "12",
      trend: "+2 new",
      icon: Zap,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      label: "Đơn đang xử lý",
      value: "45",
      trend: "",
      icon: Calendar,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      label: "Tổng km hôm nay",
      value: "320",
      unit: "km",
      trend: "",
      icon: Navigation,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      label: "CO₂ giảm được",
      value: "85",
      unit: "kg",
      trend: "+12% vs avg",
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
  ]

  const activities = [
    { id: "#ORD-7721", customer: "Nguyen Van A", vehicle: "EV-Truck 04 (51C-123.45)", status: "In Transit", statusColor: "bg-blue-100 text-blue-600", eta: "14:30 PM", avatar: "A" },
    { id: "#ORD-7722", customer: "Tran Thi B", vehicle: "EV-Van 12 (51D-987.65)", status: "Picking Up", statusColor: "bg-orange-100 text-orange-600", eta: "15:15 PM", avatar: "B" },
    { id: "#ORD-7723", customer: "Le Van C", vehicle: "EV-Truck 08 (51C-555.55)", status: "Completed", statusColor: "bg-emerald-100 text-emerald-600", eta: "12:00 PM", avatar: "C" },
  ]

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">

      {/* Main Content */}
      <main className="flex-1 flex flex-col ">
        <Header />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  {stat.trend && (
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      {stat.trend}
                    </span>
                  )}
                </div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                <div className="flex items-baseline gap-2 leading-none">
                  <span className="text-4xl font-black text-gray-900">{stat.value}</span>
                  {stat.unit && <span className="text-lg font-black text-gray-400">{stat.unit}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Live Fleet Tracking */}
            <div className="xl:col-span-2 bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Live Fleet Tracking</h3>
                <Button variant="ghost" className="text-emerald-600 font-black gap-2 hover:bg-emerald-50 rounded-xl">
                  View Full Map
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="relative h-[480px] rounded-[2rem] overflow-hidden border border-gray-50">
                 {/* Fake Map */}
                 <div
                  className="absolute inset-0 bg-cover bg-center grayscale shadow-inner"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80")' }}
                 >
                    <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply"></div>
                 </div>

                 {/* Map Markers */}
                 <div className="absolute top-[30%] left-[40%] group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-500 p-0.5 animate-bounce">
                       <div className="w-full h-full bg-emerald-50 rounded-full flex items-center justify-center">
                          <Truck className="w-5 h-5 text-emerald-600" />
                       </div>
                    </div>
                 </div>
                 <div className="absolute top-[60%] left-[60%] group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-500 p-0.5">
                       <div className="w-full h-full bg-emerald-50 rounded-full flex items-center justify-center">
                          <Truck className="w-5 h-5 text-emerald-600" />
                       </div>
                    </div>
                 </div>
                 <div className="absolute top-[45%] left-[25%] group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-500 p-0.5">
                       <div className="w-full h-full bg-emerald-50 rounded-full flex items-center justify-center">
                          <Truck className="w-5 h-5 text-emerald-600" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* CO2 Chart */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">Xu hướng giảm thải CO₂</h3>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black">
                   <TrendingUp className="w-3 h-3" />
                   +15%
                </div>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-2 leading-none mb-1">
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">1.2 TONS</span>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Last 7 Days</p>
              </div>

              {/* Fake Line Chart with SVG */}
              <div className="flex-1 relative flex items-end">
                <svg className="w-full h-48 group" viewBox="0 0 400 200">
                   <path
                     d="M0,180 Q50,160 100,100 T200,80 T300,120 T400,20"
                     fill="none"
                     stroke="#10B981"
                     strokeWidth="6"
                     strokeLinecap="round"
                     className="drop-shadow-[0_10px_10px_rgba(16,185,129,0.3)] transition-all duration-1000"
                   />
                   <path
                     d="M0,180 Q50,160 100,100 T200,80 T300,120 T400,20 L400,200 L0,200 Z"
                     fill="url(#gradient)"
                     opacity="0.1"
                   />
                   <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" stopColor="#10B981" />
                       <stop offset="100%" stopColor="transparent" />
                     </linearGradient>
                   </defs>
                </svg>

                {/* Chart labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-tighter pt-4">
                   <span>Mon</span>
                   <span>Tue</span>
                   <span>Wed</span>
                   <span>Thu</span>
                   <span>Fri</span>
                   <span>Sat</span>
                   <span>Sun</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h3>
              <Button variant="ghost" className="text-emerald-600 font-black gap-2 hover:bg-emerald-50 rounded-xl">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest pl-4">Order ID</th>
                    <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
                    <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">Vehicle (EV)</th>
                    <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest text-right pr-4">ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {activities.map((activity) => (
                    <tr key={activity.id} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="py-8 font-black text-emerald-600 text-sm pl-4">{activity.id}</td>
                      <td className="py-8">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border border-gray-100 shadow-sm transition-transform group-hover:scale-110">
                            <AvatarFallback className="bg-emerald-50 text-emerald-700 font-bold">{activity.avatar}</AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-black text-gray-900">{activity.customer}</p>
                        </div>
                      </td>
                      <td className="py-8">
                         <p className="text-sm font-black text-emerald-600 bg-emerald-50/50 px-3 py-1 rounded-lg inline-block">{activity.vehicle}</p>
                      </td>
                      <td className="py-8">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black ${activity.statusColor} shadow-sm`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-current`}></div>
                          {activity.status}
                        </div>
                      </td>
                      <td className="py-8 text-right font-black text-gray-500 text-sm pr-4">{activity.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
