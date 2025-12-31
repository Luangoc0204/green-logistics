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
  ArrowLeft,
  Camera,
  ChevronRight,
  CreditCard,
  FileText,
  Phone,
  Plus,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddDriverPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Info Card */}
          <div className="lg:w-1/3 lg:sticky lg:top-10 h-fit space-y-10">
            <div>
              <h1 className="text-[40px] font-black text-gray-900 tracking-tighter leading-tight mb-4">
                Thêm tài xế mới
              </h1>
              <p className="text-gray-500 font-bold leading-relaxed">
                Thêm một nhân viên giao hàng mới vào đội ngũ của bạn. Đảm bảo
                tất cả các tài liệu được xác minh trước khi đưa vào hoạt động.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-[3rem] p-8 border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-emerald-900 uppercase tracking-widest">
                  Green Standard
                </h3>
              </div>

              <p className="text-sm font-bold text-emerald-900/60 leading-relaxed mb-10">
                Các tài xế được thêm vào đây sẽ tự động được đăng ký vào chương
                trình đào tạo{" "}
                <span className="text-emerald-700 font-black">
                  Lái xe sinh thái
                </span>{" "}
                (Eco-Driving) để tối ưu hóa hiệu suất xe điện.
              </p>

              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl transition-transform group-hover:scale-[1.02] duration-500">
                <img
                  src="https://images.unsplash.com/photo-1580910051074-3eb6948865c5?w=600&h=400&fit=crop"
                  alt="Eco Driver"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">
                    Zero Emissions Fleet
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
            <div className="bg-white rounded-[4rem] border border-gray-100 shadow-2xl shadow-gray-200/40 p-10 md:p-14 space-y-14">
              {/* Profile Photo */}
              <section className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative group">
                  <div className="w-40 h-40 rounded-full bg-gray-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden relative transition-all group-hover:ring-8 group-hover:ring-emerald-50">
                    <User className="w-16 h-16 text-gray-200" />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white/50" />
                    </div>
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full border-4 border-white shadow-lg text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-center md:text-left space-y-2">
                  <h4 className="text-xl font-black text-gray-900 leading-none">
                    Ảnh đại diện
                  </h4>
                  <p className="text-sm font-bold text-gray-400">
                    Tải lên ảnh chân dung rõ nét (JPG/PNG, max 2MB)
                  </p>
                  <Button
                    variant="outline"
                    className="h-10 px-6 rounded-xl border-emerald-100 text-emerald-600 font-black hover:bg-emerald-50 hover:border-emerald-200 transition-all"
                  >
                    Tải ảnh lên
                  </Button>
                </div>
              </section>

              {/* Personal Info Section */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                    <User className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                    Thông tin cá nhân
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField
                    label="Tên tài xế"
                    required
                    icon={<User className="w-5 h-5" />}
                    placeholder="Vd: Nguyễn Văn A"
                  />
                  <FormField
                    label="Số điện thoại"
                    required
                    icon={<Phone className="w-5 h-5" />}
                    placeholder="Vd: 090xxxxx"
                    type="tel"
                  />
                  <FormField
                    label="Số CCCD/CMND"
                    required
                    icon={<CreditCard className="w-5 h-5" />}
                    placeholder="12 chữ số"
                  />
                  <FormField
                    label="Số giấy phép lái xe"
                    required
                    icon={<FileText className="w-5 h-5" />}
                    placeholder="Số hiệu bằng lái"
                  />
                </div>
              </section>

              {/* Assignment Section */}
              <section className="space-y-10 pt-10 border-t border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                    <Truck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                    Phân công phương tiện
                  </h3>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                    Phương tiện phụ trách
                  </label>
                  <Select>
                    <SelectTrigger className="h-16 px-8 rounded-2xl border-gray-100 bg-gray-50/50 font-bold text-gray-700 focus:ring-emerald-500/10">
                      <SelectValue placeholder="Chọn phương tiện khả dụng..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-gray-100">
                      <SelectItem value="ev001" className="py-4 font-bold">
                        EV-001 (VinFast VF8 - 29C-123.45)
                      </SelectItem>
                      <SelectItem value="ev004" className="py-4 font-bold">
                        EV-004 (Thaco Towner - 29D-888.99)
                      </SelectItem>
                      <SelectItem value="unassigned" className="py-4 font-bold">
                        -- Chưa phân công --
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-[10px] font-bold text-gray-400 ml-1">
                    Chỉ hiển thị các xe điện hiện đang trống tài xế.
                  </p>
                </div>
              </section>

              {/* Actions */}
              <div className="pt-10 flex flex-col sm:flex-row items-center justify-end gap-6">
                <Button
                  variant="ghost"
                  onClick={() => router.back()}
                  className="w-full sm:w-40 h-14 rounded-2xl text-gray-400 font-black hover:bg-gray-50 hover:text-gray-900 transition-all"
                >
                  Hủy bỏ
                </Button>
                <Button className="w-full sm:w-60 h-14 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Plus className="w-5 h-5" />
                  Thêm tài xế
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FormField({ label, required, icon, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-emerald-500 transition-colors">
          {icon}
        </div>
        <Input
          {...props}
          className="h-16 pl-14 pr-6 rounded-2xl border-gray-100 bg-gray-50/50 font-bold focus:bg-white focus:ring-emerald-500/10 transition-all"
        />
      </div>
    </div>
  );
}
