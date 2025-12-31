"use client";

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
import { Switch } from "@/components/ui/switch";
import {
  ChevronRight,
  CloudUpload,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddVehiclePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs & Header */}
        <div className="mb-10 space-y-4">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-[40px] font-black text-gray-900 tracking-tighter leading-tight mb-2">
                Thêm phương tiện mới
              </h1>
              <p className="text-gray-500 font-bold">
                Nhập thông tin chi tiết để thêm xe điện mới vào đội xe của bạn.
              </p>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100 flex items-center gap-2 self-start md:self-center">
              <Zap className="w-4 h-4 text-emerald-500 fill-current" />
              <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest">
                Zero Emission Vehicle
              </span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/40 p-10 md:p-14 space-y-14">
          {/* Section 1: Thông tin cơ bản */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                Thông tin cơ bản
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Loại xe
                </label>
                <Select>
                  <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 font-bold text-gray-700 px-6 focus:ring-emerald-500/10">
                    <SelectValue placeholder="Chọn loại xe" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-gray-100">
                    <SelectItem value="car" className="font-bold py-3">
                      Ô tô điện
                    </SelectItem>
                    <SelectItem value="bike" className="font-bold py-3">
                      Xe máy điện
                    </SelectItem>
                    <SelectItem value="van" className="font-bold py-3">
                      Xe Van điện
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Biển số xe
                </label>
                <div className="relative">
                  <Input
                    placeholder="29A-123.45"
                    className="h-14 px-6 rounded-2xl border-gray-100 bg-gray-50/50 font-bold focus:ring-emerald-500/10"
                  />
                  <ShieldCheck className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Hình ảnh phương tiện
              </label>
              <div className="border-2 border-dashed border-emerald-100 bg-emerald-50/20 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-emerald-50/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <CloudUpload className="w-8 h-8" />
                </div>
                <p className="text-base font-black text-gray-900 mb-2">
                  Click để tải lên hoặc kéo thả hình ảnh vào đây
                </p>
                <p className="text-xs font-bold text-gray-400">
                  Hỗ trợ định dạng: JPG, PNG, WEBP (Tối đa 5MB)
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Thông số kỹ thuật EV */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                Thông số kỹ thuật EV
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Dung lượng pin (kWh)
                </label>
                <div className="relative">
                  <Input
                    placeholder="e.g. 75"
                    className="h-14 px-6 rounded-2xl border-gray-100 bg-gray-50/50 font-bold focus:ring-emerald-500/10"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-400 uppercase bg-white px-2 py-1 rounded-lg border border-gray-100">
                    kWh
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Phạm vi hoạt động (km)
                </label>
                <div className="relative">
                  <Input
                    placeholder="e.g. 350"
                    className="h-14 px-6 rounded-2xl border-gray-100 bg-gray-50/50 font-bold focus:ring-emerald-500/10"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-400 uppercase bg-white px-2 py-1 rounded-lg border border-gray-100">
                    km
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Cổng sạc
                </label>
                <Select>
                  <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 font-bold text-gray-700 px-6 focus:ring-emerald-500/10">
                    <SelectValue placeholder="Chọn cổng sạc" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-gray-100">
                    <SelectItem value="ccs2" className="font-bold py-3">
                      CCS2 (Standard)
                    </SelectItem>
                    <SelectItem value="chademo" className="font-bold py-3">
                      CHAdeMO
                    </SelectItem>
                    <SelectItem value="type2" className="font-bold py-3">
                      Type 2 (AC)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Section 3: Vận hành */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                Vận hành
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Tài xế phụ trách
                </label>
                <div className="relative group">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                  <Input
                    placeholder="Tìm kiếm tài xế..."
                    className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 font-bold focus:ring-emerald-500/10"
                  />
                </div>
                <p className="text-[10px] font-bold text-gray-400 ml-1">
                  Nhập tên hoặc mã nhân viên để tìm kiếm
                </p>
              </div>
              <div className="bg-gray-50/50 rounded-[2rem] p-8 border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-gray-900 mb-1">
                    Sẵn sàng hoạt động
                  </p>
                  <p className="text-xs font-bold text-gray-400">
                    Xe đã được kiểm tra và sạc đầy
                  </p>
                </div>
                <Switch
                  className="data-[state=checked]:bg-emerald-500"
                  defaultChecked
                />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="pt-10 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-end gap-6">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="w-full sm:w-40 h-14 rounded-2xl border-gray-200 text-gray-600 font-black hover:bg-gray-50 transition-all"
            >
              Hủy bỏ
            </Button>
            <Button className="w-full sm:w-56 h-14 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Plus className="w-5 h-5" />
              Thêm phương tiện
            </Button>
          </div>
        </div>
      </main>

      <div className="mt-10 py-10 text-center">
        <p className="text-sm font-bold text-gray-400 italic">
          © 2024 Green Logistics Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}
