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
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const drivers = [
  {
    id: "DRV-001",
    name: "Nguyễn Văn A",
    phone: "0901 234 567",
    plate: "29E-123.45",
    vehicleType: "Xe tải điện 1.5T",
    status: "Đang hoạt động",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: "DRV-002",
    name: "Trần Thị B",
    phone: "0912 345 678",
    plate: "29E-678.90",
    vehicleType: "Van điện nhỏ",
    status: "Nghỉ phép",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "DRV-003",
    name: "Lê Văn C",
    phone: "0987 654 321",
    plate: "29E-111.22",
    vehicleType: "Xe máy điện",
    status: "Đang hoạt động",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: "DRV-004",
    name: "Phạm Văn D",
    phone: "0933 445 566",
    plate: "29E-333.44",
    vehicleType: "Xe tải điện 1.5T",
    status: "Bảo trì xe",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
  },
  {
    id: "DRV-005",
    name: "Hoàng Thị E",
    phone: "0966 778 899",
    plate: "29E-555.66",
    vehicleType: "Van điện lớn",
    status: "Đang hoạt động",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export default function DriverManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-[40px] font-black text-gray-900 tracking-tighter leading-tight">
              Quản lý đội ngũ tài xế
            </h1>
            <p className="text-gray-500 font-bold max-w-2xl text-lg">
              Theo dõi danh sách, phân công phương tiện và quản lý trạng thái
              hoạt động của đội ngũ tài xế xe điện.
            </p>
          </div>
          <Link href="/quan-ly-tai-xe/them-moi">
            <Button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Plus className="w-5 h-5" />
              Thêm tài xế mới
            </Button>
          </Link>
        </div>

        {/* Filters & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-2 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
            <Input
              placeholder="Tìm kiếm theo tên, SĐT hoặc biển số xe..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 pl-14 rounded-2xl border-gray-100 bg-white shadow-sm ring-ring focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-bold"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-white shadow-sm font-bold text-gray-700 px-6">
              <SelectValue placeholder="Tất cả trạng thái" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-gray-100">
              <SelectItem value="all" className="font-bold">
                Tất cả trạng thái
              </SelectItem>
              <SelectItem value="active" className="font-bold">
                Đang hoạt động
              </SelectItem>
              <SelectItem value="leave" className="font-bold">
                Nghỉ phép
              </SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-white shadow-sm font-bold text-gray-700 px-6">
              <SelectValue placeholder="Tất cả loại xe" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-gray-100">
              <SelectItem value="all" className="font-bold">
                Tất cả loại xe
              </SelectItem>
              <SelectItem value="truck" className="font-bold">
                Xe tải điện
              </SelectItem>
              <SelectItem value="van" className="font-bold">
                Van điện
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-50">
                  <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Tài xế
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Số điện thoại
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Biển số xe
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Loại xe
                  </th>
                  <th className="px-8 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Trạng thái
                  </th>
                  <th className="px-8 py-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {drivers.map((d) => (
                  <tr
                    key={d.id}
                    className="hover:bg-gray-50/30 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-50 shrink-0">
                          <img
                            src={d.avatar}
                            alt={d.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-black text-gray-900 leading-none mb-1">
                            {d.name}
                          </p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            ID: {d.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-gray-700">
                        {d.phone}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[11px] font-bold text-gray-500 px-3 py-1.5 bg-gray-100 rounded-xl border border-gray-200/50 uppercase tracking-tight">
                        {d.plate}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-gray-500">
                        {d.vehicleType}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <StatusBadge status={d.status} />
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-all text-gray-400 hover:text-gray-900">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Hiển thị <span className="text-gray-900">1-5</span> trong số{" "}
              <span className="text-gray-900">42</span> tài xế
            </p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 hover:text-gray-900 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500 text-white font-black shadow-lg shadow-emerald-500/20">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-400 hover:text-gray-900 transition-colors">
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

function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    "Đang hoạt động": "bg-emerald-50 text-emerald-600 border-emerald-100",
    "Nghỉ phép": "bg-orange-50 text-orange-600 border-orange-100",
    "Bảo trì xe": "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <div
      className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 ${styles[status]}`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Đang hoạt động"
            ? "bg-emerald-500 animate-pulse"
            : status === "Nghỉ phép"
            ? "bg-orange-500"
            : "bg-gray-400"
        }`}
      ></div>
      {status}
    </div>
  );
}
