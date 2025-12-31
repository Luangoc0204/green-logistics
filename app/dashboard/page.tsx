"use client";

import Header from "@/components/header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Leaf,
  Navigation,
  TrendingUp,
  Truck,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { AuthGuard } from "@/components/auth-guard";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const stats = [
    {
      label: "Số xe đang hoạt động",
      value: "12",
      trend: "+2 new",
      icon: Zap,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Đơn đang xử lý",
      value: "45",
      trend: "",
      icon: Calendar,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      label: "Tổng km hôm nay",
      value: "320",
      unit: "km",
      trend: "",
      icon: Navigation,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      label: "CO₂ giảm được",
      value: "85",
      unit: "kg",
      trend: "+12% vs avg",
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  const activities = [
    {
      id: "#ORD-7721",
      customer: "Nguyen Van A",
      vehicle: "EV-Truck 04 (51C-123.45)",
      status: "In Transit",
      statusColor: "bg-blue-100 text-blue-600",
      eta: "14:30 PM",
      avatar: "A",
    },
    {
      id: "#ORD-7722",
      customer: "Tran Thi B",
      vehicle: "EV-Van 12 (51D-987.65)",
      status: "Picking Up",
      statusColor: "bg-orange-100 text-orange-600",
      eta: "15:15 PM",
      avatar: "B",
    },
    {
      id: "#ORD-7723",
      customer: "Le Van C",
      vehicle: "EV-Truck 08 (51C-555.55)",
      status: "Completed",
      statusColor: "bg-emerald-100 text-emerald-600",
      eta: "12:00 PM",
      avatar: "C",
    },
  ];

  return (
    <AuthGuard>
      <div className="flex bg-[#F8FAFC] min-h-screen">
        {/* Main Content */}
        <main className="flex-1 flex flex-col w-full">
          <Header />

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 custom-scrollbar max-w-7xl mx-auto w-full">
            {/* Quick Access Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quan-ly-phuong-tien"
                className="flex-1 min-w-[200px]"
              >
                <Button className="w-full h-20 bg-white hover:bg-emerald-50 border border-gray-100 shadow-sm rounded-[1.5rem] flex items-center justify-between px-8 group transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black text-gray-900 uppercase tracking-widest">
                      Quản lý phương tiện
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
              <Link href="/quan-ly-tai-xe" className="flex-1 min-w-[200px]">
                <Button className="w-full h-20 bg-white hover:bg-emerald-50 border border-gray-100 shadow-sm rounded-[1.5rem] flex items-center justify-between px-8 group transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black text-gray-900 uppercase tracking-widest">
                      Quản lý tài xế
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </div>

            {/* ... stats grid and charts ... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div
                      className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center ${stat.color}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    {stat.trend && (
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-2 leading-none">
                    <span className="text-3xl sm:text-4xl font-black text-gray-900">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-base sm:text-lg font-black text-gray-400">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
              {/* Live Fleet Tracking */}
              <div className="xl:col-span-2 bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                    Live Fleet Tracking
                  </h3>
                  <Button
                    variant="ghost"
                    className="text-emerald-600 font-black gap-2 hover:bg-emerald-50 rounded-xl"
                  >
                    View Full Map
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="relative h-[480px] rounded-[2rem] overflow-hidden border border-gray-50">
                  {/* Fake Map */}
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale shadow-inner"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80")',
                    }}
                  >
                    <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply"></div>
                  </div>

                  {/* Map Markers ... */}
                </div>
              </div>

              {/* CO2 Chart */}
              <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
                    Xu hướng giảm thải CO₂
                  </h3>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black">
                    <TrendingUp className="w-3 h-3" />
                    +15%
                  </div>
                </div>
                {/* ... chart content ... */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2 leading-none mb-1">
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">
                      1.2 TONS
                    </span>
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Last 7 Days
                  </p>
                </div>

                {/* SVG Chart ... */}
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
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-6 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
                  Recent Activity
                </h3>
                <Button
                  variant="ghost"
                  className="text-emerald-600 font-black gap-2 hover:bg-emerald-50 rounded-xl"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-50">
                      <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest pl-4">
                        Order ID
                      </th>
                      <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        Customer
                      </th>
                      <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        Vehicle (EV)
                      </th>
                      <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        Status
                      </th>
                      <th className="pb-6 text-[11px] font-black text-gray-400 uppercase tracking-widest text-right pr-4">
                        ETA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {activities.map((activity) => (
                      <tr
                        key={activity.id}
                        className="group hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 sm:py-8 font-black text-emerald-600 text-[13px] sm:text-sm pl-4 whitespace-nowrap">
                          {activity.id}
                        </td>
                        <td className="py-4 sm:py-8">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border border-gray-100 shadow-sm transition-transform group-hover:scale-110">
                              <AvatarFallback className="bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-base">
                                {activity.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <p className="text-[13px] sm:text-sm font-black text-gray-900 whitespace-nowrap">
                              {activity.customer}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 sm:py-8">
                          <p className="text-[13px] sm:text-sm font-black text-emerald-600 bg-emerald-50/50 px-3 py-1 rounded-lg inline-block whitespace-nowrap">
                            {activity.vehicle}
                          </p>
                        </td>
                        <td className="py-4 sm:py-8">
                          <div
                            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black ${activity.statusColor} shadow-sm whitespace-nowrap`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-current`}
                            ></div>
                            {activity.status}
                          </div>
                        </td>
                        <td className="py-4 sm:py-8 text-right font-black text-gray-500 text-[13px] sm:text-sm pr-4 whitespace-nowrap">
                          {activity.eta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
