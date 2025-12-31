"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Activity,
  Battery,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  Search,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const vehicles = [
  {
    id: "EV-001",
    plate: "29C-123.45",
    driver: "Minh Hoàng",
    type: "VinFast VF8",
    category: "SUV điện",
    battery: 92,
    range: "350 km",
    status: "Đang trống",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=100&h=60&fit=crop",
  },
  {
    id: "EV-004",
    plate: "29D-888.99",
    driver: "Thanh Hà",
    type: "Thaco Towner",
    category: "Xe tải nhỏ",
    battery: 15,
    range: "Low",
    status: "Đang sạc",
    image:
      "https://images.unsplash.com/photo-1519003722824-192d992a6058?w=100&h=60&fit=crop",
  },
  {
    id: "EV-008",
    plate: "29-M1 452.11",
    driver: "Quốc Toàn",
    type: "VinFast Feliz",
    category: "Xe máy điện",
    battery: 65,
    range: "~50 km",
    status: "Đang giao hàng",
    orderId: "#DH-9021",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f97db44ad8?w=100&h=60&fit=crop",
  },
  {
    id: "EV-012",
    plate: "29A-678.90",
    driver: "Hùng Võ",
    type: "VinFast VF9",
    category: "SUV điện cỡ lớn",
    battery: 98,
    range: "~400 km",
    status: "Đang trống",
    image:
      "https://images.unsplash.com/photo-1621136138611-4b130005785f?w=100&h=60&fit=crop",
  },
  {
    id: "EV-015",
    plate: "29H-999.00",
    driver: "-- Chưa gán --",
    type: "Xe tải nhỏ",
    category: "Dongben",
    battery: 0,
    range: "-- km",
    status: "Bảo trì",
    image:
      "https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?w=100&h=60&fit=crop",
  },
];

export default function VehicleManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs & Title */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-[40px] font-black text-gray-900 tracking-tighter leading-tight">
              Danh sách phương tiện
            </h1>
            <p className="text-gray-500 font-bold">
              Quản lý và theo dõi trạng thái đội xe điện dự án GreenLogistics
            </p>
          </div>
          <Link href="/quan-ly-phuong-tien/them-moi">
            <Button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Plus className="w-5 h-5" />
              Thêm xe mới
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard
            title="Tổng số xe"
            value="45"
            increment="+2 mới"
            icon={<Truck className="w-5 h-5 text-gray-600" />}
          />
          <StatsCard
            title="Đang trống"
            value="28"
            suffix="xe"
            icon={<Zap className="w-5 h-5 text-emerald-500" />}
            active
          />
          <StatsCard
            title="Đang sạc"
            value="12"
            suffix="xe"
            icon={<Battery className="w-5 h-5 text-blue-500" />}
          />
          <StatsCard
            title="Đang giao hàng"
            value="5"
            suffix="xe"
            icon={<Activity className="w-5 h-5 text-orange-500" />}
          />
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
          {/* Filters Bar */}
          <div className="p-8 border-b border-gray-50 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
              <Input
                placeholder="Tìm theo biển số, ID xe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-bold"
              />
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="h-14 w-48 rounded-2xl border-gray-100 bg-gray-50/50 font-bold text-gray-700">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-gray-100">
                  <SelectItem value="all" className="font-bold">
                    Tất cả trạng thái
                  </SelectItem>
                  <SelectItem value="free" className="font-bold">
                    Đang trống
                  </SelectItem>
                  <SelectItem value="charging" className="font-bold">
                    Đang sạc
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-14 w-48 rounded-2xl border-gray-100 bg-gray-50/50 font-bold text-gray-700">
                  <SelectValue placeholder="Loại xe" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-gray-100">
                  <SelectItem value="all" className="font-bold">
                    Tất cả loại xe
                  </SelectItem>
                  <SelectItem value="car" className="font-bold">
                    Ô tô
                  </SelectItem>
                  <SelectItem value="bike" className="font-bold">
                    Xe máy
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-50">
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Phương tiện & Biển số
                  </th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Tài xế
                  </th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Loại xe
                  </th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Trạng thái pin
                  </th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Trạng thái
                  </th>
                  <th className="px-8 py-5 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {vehicles.map((v) => (
                  <tr
                    key={v.id}
                    className="hover:bg-gray-50/30 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                          <img
                            src={v.image}
                            alt={v.type}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-black text-gray-900 leading-none mb-1.5">
                            {v.id}
                          </p>
                          <span className="text-[11px] font-bold text-gray-400 px-2 py-0.5 bg-gray-100 rounded border border-gray-200 uppercase tracking-tighter">
                            {v.plate}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[10px] font-black text-emerald-600">
                          {v.driver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm font-bold text-gray-700">
                          {v.driver}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div>
                        <p className="text-sm font-black text-gray-900 leading-none mb-1">
                          {v.type}
                        </p>
                        <p className="text-[11px] font-bold text-gray-400">
                          {v.category}
                        </p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="w-40">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-gray-900">
                            {v.battery}%
                          </span>
                          <span className="text-[10px] font-bold text-gray-400">
                            {v.range}
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              v.battery > 50
                                ? "bg-emerald-500"
                                : v.battery > 20
                                ? "bg-orange-400"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${v.battery}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <StatusBadge status={v.status} orderId={v.orderId} />
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400 hover:text-gray-900">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Hiển thị 1 đến 5 trong số 45 kết quả
            </p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 hover:text-gray-900 transition-colors cursor-not-allowed opacity-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500 text-white font-black shadow-lg shadow-emerald-500/20">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 hover:text-gray-900 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function StatsCard({
  title,
  value,
  suffix,
  increment,
  icon,
  active = false,
}: any) {
  return (
    <div
      className={`bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/20 group hover:scale-[1.02] transition-all cursor-pointer ${
        active ? "ring-2 ring-emerald-500/20 bg-emerald-50/10" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
            active
              ? "bg-emerald-500 text-white shadow-emerald-500/20"
              : "bg-gray-50 text-gray-400 shadow-gray-100"
          }`}
        >
          {icon}
        </div>
        {increment && (
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-widest whitespace-nowrap">
            {increment}
          </span>
        )}
      </div>
      <div>
        <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] mb-2 leading-none">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black text-gray-900 leading-none">
            {value}
          </h4>
          {suffix && (
            <span className="text-xs font-bold text-gray-400">{suffix}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
  orderId,
}: {
  status: string;
  orderId?: string;
}) {
  const styles: any = {
    "Đang trống": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Đang sạc": "bg-blue-50 text-blue-600 border-blue-100 animate-pulse",
    "Đang giao hàng": "bg-orange-50 text-orange-600 border-orange-100",
    "Bảo trì": "bg-gray-50 text-gray-400 border-gray-100",
  };

  return (
    <div className="flex flex-col gap-1.5 items-start">
      <div
        className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 ${styles[status]}`}
      >
        {status === "Đang sạc" && <Zap className="w-3 h-3 fill-current" />}
        {status === "Đang giao hàng" && <Activity className="w-3 h-3" />}
        {status}
      </div>
      {orderId && (
        <p className="text-[10px] font-bold text-gray-400 ml-1">
          #{" "}
          <span className="hover:text-emerald-500 cursor-pointer underline decoration-gray-200 underline-offset-4">
            {orderId}
          </span>
        </p>
      )}
    </div>
  );
}
