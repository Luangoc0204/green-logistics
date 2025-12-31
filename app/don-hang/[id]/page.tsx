"use client";

import { AuthGuard } from "@/components/auth-guard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ConfigProvider, Steps } from "antd";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  Leaf,
  MessageCircle,
  Navigation,
  Phone,
  Truck,
  Weight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { use } from "react";

// Mock Data for the views
const mockOrders = {
  "ORD-2023-089": {
    id: "#ORD-2023-089",
    status: "IN_TRANSIT",
    time: "14:30, Hôm nay",
    impact: "2.4 kg",
    driver: {
      name: "Nguyễn Văn A",
      rating: "4.9",
      trips: "120",
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be50d13b?w=100&h=100&fit=crop",
      vehicle: "VinFast VF e34",
    },
    route: {
      pickup: "Kho A, KCN Tân Bình, TP.HCM",
      delivery: "72 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
      distance: "12.5 km",
    },
  },
  "ORD-2023-088": {
    id: "#ORD-2024-889",
    status: "COMPLETED",
    time: "14:30, 24/05/2024",
    deliveredBy: "VinFast EcoMove",
    impact: "2.4 kg",
    duration: "45 phút",
    cost: "45.000 đ",
    weight: "5.2 kg",
    driver: {
      name: "Nguyễn Văn An",
      rating: "4.9",
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be50d13b?w=100&h=100&fit=crop",
      vehicle: "VinFast VF e34",
    },
    route: {
      pickup: "Kho A, KCN Tân Bình, TP.HCM",
      delivery: "72 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
      distance: "12.5 km",
    },
  },
};

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const idStr = decodeURIComponent(resolvedParams.id);

  // Choose view based on ID suffix for demo purposes
  const isTracking = idStr.endsWith("89");
  const orderData = isTracking
    ? mockOrders["ORD-2023-089"]
    : mockOrders["ORD-2023-088"];

  if (isTracking) {
    return <TrackingView order={orderData} />;
  }

  return <CompletedView order={orderData} />;
}

// --- VIEW 1: COMPLETED DETAILS ---
function CompletedView({ order }: any) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50/50 flex flex-col">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-emerald-600">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/don-hang" className="hover:text-emerald-600">
              Lịch sử đơn hàng
            </Link>
            <span>/</span>
            <span className="text-gray-900">{order.id}</span>
          </nav>

          {/* Action Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                  Chi tiết đơn hàng{" "}
                  <span className="text-emerald-500">
                    {order.id.replace("#ORD-2024-", "#")}
                  </span>
                </h1>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1 rounded-full uppercase">
                  Hoàn thành
                </span>
              </div>
              <p className="text-gray-500 font-medium">
                Được giao bởi{" "}
                <span className="text-gray-900 font-bold">
                  {order.deliveredBy}
                </span>{" "}
                vào lúc {order.time}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="h-12 border-gray-100 rounded-xl font-bold gap-2 text-gray-600 hover:bg-gray-50"
              >
                <AlertTriangle className="w-4 h-4" />
                Báo cáo
              </Button>
              <Button className="h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl gap-2 shadow-lg shadow-emerald-500/20">
                <Download className="w-4 h-4" />
                Tải hóa đơn
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map Placeholder */}
              <div className="relative h-[480px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">
                {/* Fake Map Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale shadow-inner"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80")',
                  }}
                >
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                </div>

                {/* Route Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center p-1.5 shadow-lg shadow-blue-500/30 shrink-0 mt-1">
                        <div className="w-full h-full rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">
                          Điểm lấy hàng
                        </p>
                        <p className="text-sm font-bold text-gray-900 leading-tight">
                          {order.route.pickup}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center p-1.5 shadow-lg shadow-emerald-500/30 shrink-0 mt-1">
                        <div className="w-full h-full rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none mb-1">
                          Điểm giao hàng
                        </p>
                        <p className="text-sm font-bold text-gray-900 leading-tight">
                          {order.route.delivery}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gray-100 hidden md:block"></div>
                  <div className="text-center md:text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Tổng quãng đường
                    </p>
                    <p className="text-3xl font-black text-gray-900">
                      {order.route.distance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                      Thời gian vận chuyển
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {order.duration}
                    </p>
                    <p className="text-[10px] font-bold text-emerald-500 mt-1">
                      Sớm hơn dự kiến 5p
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                      Chi phí
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {order.cost}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 italic">
                      Đã thanh toán qua Visa
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <Weight className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                      Khối lượng
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {order.weight}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 mt-1">
                      Hàng hóa tiêu chuẩn
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Green Impact Card */}
              <div className="bg-emerald-50/50 rounded-[3rem] p-10 border border-emerald-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-emerald-300/30 transition-all duration-700"></div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <Leaf className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="text-xs font-black text-emerald-900 uppercase tracking-widest">
                    Tác động xanh
                  </h3>
                </div>

                <div className="space-y-1 mb-8">
                  <p className="text-sm font-bold text-emerald-900/60 leading-none">
                    CO2 đã giảm được
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-emerald-600 leading-tight tracking-tighter">
                      {order.impact.replace(" kg", "")}
                    </span>
                    <span className="text-2xl font-black text-emerald-600/60 uppercase tracking-tighter">
                      kg
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] font-black text-emerald-900/40 uppercase tracking-widest">
                    So sánh phát thải (gram)
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-gray-500">Xe tải Diesel</span>
                      <span className="text-gray-900">2.8 kg</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 w-full rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-emerald-700">Xe điện (Bạn)</span>
                      <span className="text-emerald-700">0.4 kg</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden border border-emerald-100">
                      <div className="h-full bg-emerald-500 w-[15%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-emerald-100/50 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-emerald-900/70 leading-relaxed italic">
                    Bạn đã giảm{" "}
                    <span className="text-emerald-600 font-extrabold">85%</span>{" "}
                    lượng khí thải so với vận chuyển truyền thống. Cảm ơn bạn vì
                    đã chọn xanh!
                  </p>
                </div>
              </div>

              {/* Carrier Info */}
              <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-white">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                    Nhà vận chuyển
                  </h3>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-4 border-emerald-50">
                      <AvatarImage src={order.driver.avatar} />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1 shadow-md">
                      <span className="text-[11px] leading-none mb-0.5">★</span>{" "}
                      {order.driver.rating}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 leading-tight mb-1">
                      {order.driver.name}
                    </h4>
                    <p className="text-xs font-bold text-gray-400">
                      {order.deliveredBy}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50/50 rounded-2xl p-6 mb-8 border border-gray-100/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Phương tiện
                      </p>
                      <p className="text-sm font-black text-gray-900">
                        {order.driver.vehicle}
                      </p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                      EV
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-14 border-gray-100 rounded-2xl font-black gap-2 hover:bg-gray-50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Nhắn tin
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 border-gray-100 rounded-2xl font-black gap-2 hover:bg-gray-50"
                  >
                    <Phone className="w-5 h-5" />
                    Gọi điện
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
}

// --- VIEW 2: IN-TRANSIT TRACKING ---
function TrackingView({ order }: any) {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-[520px] h-full bg-white border-r border-gray-100 overflow-y-auto custom-scrollbar flex flex-col p-8 lg:p-10 shadow-2xl relative z-10 shrink-0">
          {/* Tracking Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest">
                Giao hàng vùng xanh
              </span>
              <span className="text-[10px] font-bold text-emerald-400 opacity-60 ml-2">
                Cập nhật 1 phút trước
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">
              {order.id}
            </h1>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4 text-emerald-500" />
              <p className="text-sm font-bold">
                Dự kiến giao hàng:{" "}
                <span className="text-gray-900">{order.time}</span>
              </p>
            </div>
          </div>

          {/* Green Box */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-8 mb-10 group hover:bg-emerald-50 transition-colors">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-white rounded-[1.25rem] flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 fill-current" />
              </div>
              <div>
                <h3 className="text-sm font-black text-emerald-950 uppercase tracking-widest mb-1 leading-none">
                  Tác động xanh
                </h3>
                <p className="text-xs font-bold text-emerald-800/60 leading-relaxed mb-1">
                  Chuyến đi này giảm{" "}
                  <span className="text-emerald-600 font-extrabold">
                    {order.impact} CO2
                  </span>{" "}
                  nhờ sử dụng xe điện trong vùng xanh.
                </p>
              </div>
            </div>
          </div>

          {/* Tracking Flow */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-gray-500" />
              </div>
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none">
                Tiến độ vận chuyển
              </h3>
            </div>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#10b981",
                  fontFamily: "inherit",
                },
              }}
            >

              {/* Vertical Detailed Timeline */}
              <div className="pl-2">
                <Steps
                  direction="vertical"
                  current={3}
                  size="small"
                  items={[
                    {
                      title: (
                        <span className="text-sm font-black text-gray-900">
                          Đã tạo đơn
                        </span>
                      ),
                      description: (
                        <span className="text-[11px] font-bold text-gray-400">
                          08:00 AM • Kho ngoại quan
                        </span>
                      ),
                    },
                    {
                      title: (
                        <span className="text-sm font-black text-gray-900">
                          Đang nhận hàng
                        </span>
                      ),
                      description: (
                        <span className="text-[11px] font-bold text-gray-400">
                          09:15 AM • Đã bàn giao cho tài xế
                        </span>
                      ),
                    },
                    {
                      title: (
                        <span className="text-sm font-black text-gray-900">
                          Đang trung chuyển (vùng đệm)
                        </span>
                      ),
                      description: (
                        <span className="text-[11px] font-bold text-gray-400">
                          10:30 AM • Đã rời trạm trung chuyển
                        </span>
                      ),
                    },
                    {
                      title: (
                        <span className="text-sm font-black text-emerald-600">
                          Đang giao trong vùng xanh
                        </span>
                      ),
                      description: (
                        <div className="mt-2 text-[11px] font-bold">
                          <p className="text-gray-500 mb-2">
                            10:45 AM (Hiện tại)
                          </p>
                          <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100/50 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <p className="text-emerald-900/60 leading-relaxed italic">
                              Xe đang di chuyển trong vùng phát thải thấp (Green
                              Zone). Lộ trình tối ưu hóa.
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: (
                        <span className="text-sm font-black text-gray-400">
                          Hoàn thành
                        </span>
                      ),
                      description: (
                        <span className="text-[11px] font-bold text-gray-400">
                          Dự kiến 11:30 AM
                        </span>
                      ),
                    },
                  ]}
                />
              </div>
            </ConfigProvider>
          </div>

          <div className="mt-auto pt-10 border-t border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Avatar className="h-16 w-16 border-4 border-emerald-50 shadow-sm">
                    <AvatarImage src={order.driver.avatar} />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-50 shadow-inner">
                    <span className="text-gray-900 text-[10px] font-black leading-none mb-0.5">
                      ★
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 leading-none">
                    TÀI XẾ CỦA BẠN
                  </p>
                  <h4 className="text-xl font-black text-gray-900 leading-none">
                    {order.driver.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[11px] font-bold text-gray-900">
                      {order.driver.rating}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[11px] font-bold text-gray-400">
                      {order.driver.trips} chuyến
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="h-12 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg shadow-emerald-500/20 gap-2">
                  <Phone className="w-4 h-4" />
                  Gọi điện
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 rounded-2xl bg-gray-50 border-gray-200 text-gray-600 hover:bg-100 font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-2 bg-gray-50/50 rounded-2xl border border-gray-100">
              <div className="pl-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5 leading-none">
                  Phương tiện
                </p>
                <p className="text-sm font-black text-gray-900">
                  {order.driver.vehicle}{" "}
                  <span className="text-gray-300 font-medium ml-2">
                    30H-123.45
                  </span>
                </p>
              </div>
              <div className="bg-emerald-500 text-white text-[10px] font-black px-4 py-2 rounded-xl flex items-center gap-2">
                <Zap className="w-3 h-3 fill-current" />
                100% EV
              </div>
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="flex-1 relative bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              order.route.delivery
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
            title="Google Maps"
            className="w-full h-full"
          ></iframe>

          {/* Map Controls (Overlay) */}
          <div className="absolute bottom-10 right-10 flex flex-col gap-4 z-20">
            <button className="p-4 bg-white text-emerald-500 rounded-2xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform">
              <Navigation className="w-6 h-6 fill-current" />
            </button>
          </div>

          {/* Floating Indicators (Overlay over real map) */}
          <div className="absolute top-10 left-10 z-20">
            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900">
                Tài xế đang cách 2.4 km
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
