"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Facebook,
  Leaf,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  User
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { useAppDispatch } from "@/lib/redux/hooks"
import { loginStart, loginSuccess } from "@/lib/redux/slices/authSlice"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const [role, setRole] = useState<"user" | "carrier">("user")
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  const handleLogin = async () => {
    dispatch(loginStart())

    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        id: "1",
        name: "Thanh Bình",
        email: "binh@example.com",
        role: role,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80"
      }

      dispatch(loginSuccess(mockUser))
      router.push(callbackUrl)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col font-sans">
      {/* Top Header Navigation */}
      <header className="h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20 bg-white border-b border-gray-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
             <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="font-black text-xl text-gray-900 tracking-tight">GreenLogistics</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-sm font-black text-gray-500 hover:text-emerald-600 transition-colors">Về chúng tôi</Link>
          <Link href="#" className="text-sm font-black text-gray-500 hover:text-emerald-600 transition-colors">Dịch vụ</Link>
          <Link href="#" className="text-sm font-black text-gray-500 hover:text-emerald-600 transition-colors">Trợ giúp</Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-50/30 -z-10 translate-x-20 skew-x-[-10deg]"></div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Illustration & Info */}
          <div className="hidden lg:flex flex-col space-y-12">
            <div className="relative group">
               <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative h-[480px] w-[580px] rounded-[3.5rem] bg-emerald-50/50 border border-emerald-100 overflow-hidden shadow-2xl shadow-emerald-900/5">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-white/20"></div>

                 {/* Visual Mock-up */}
                 <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-gray-900/60 to-transparent text-white">
                    <h2 className="text-3xl font-black mb-2 leading-tight">Giao hàng không khí thải</h2>
                    <p className="text-white/80 font-bold max-w-sm">Cùng kiến tạo tương lai xanh cho logistics đô thị.</p>
                 </div>

                 {/* Floating Badges */}
                 <div className="absolute top-12 left-12 bg-white/90 backdrop-blur px-6 py-4 rounded-3xl shadow-xl border border-white/50 animate-bounce">
                    <Leaf className="w-8 h-8 text-emerald-500" />
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-[580px]">
               <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                     <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2 leading-none">Vận chuyển xanh</h3>
                  <p className="text-xs font-bold text-gray-400 leading-relaxed">Kết nối với mạng lưới xe điện rộng khắp.</p>
               </div>
               <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2 leading-none">Giảm khí thải</h3>
                  <p className="text-xs font-bold text-gray-400 leading-relaxed">Theo dõi lượng CO2 được cắt giảm mỗi đơn hàng.</p>
               </div>
            </div>
          </div>

          {/* Right Side: Auth Form */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-white w-full max-w-[560px] rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
               {/* Tab Switcher */}
               <div className="flex bg-gray-50/50 p-2 border-b border-gray-50">
                  <button
                    onClick={() => setActiveTab("login")}
                    className={`flex-1 py-5 text-sm font-black rounded-2xl transition-all ${activeTab === "login" ? "bg-white text-emerald-600 shadow-md" : "text-gray-400"}`}
                  >
                    Đăng nhập
                  </button>
                  <button
                    onClick={() => setActiveTab("register")}
                    className={`flex-1 py-5 text-sm font-black rounded-2xl transition-all ${activeTab === "register" ? "bg-white text-emerald-600 shadow-md" : "text-gray-400"}`}
                  >
                    Đăng ký
                  </button>
               </div>

               <div className="p-10 sm:p-14">
                  {/* Dynamic Header */}
                  <div className="mb-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                      {activeTab === "login" ? "Chào mừng trở lại!" : "Tạo tài khoản mới"}
                    </h2>
                    <p className="text-emerald-600/70 font-bold">
                      {activeTab === "login" ? "Vui lòng chọn vai trò để tiếp tục." : "Tham gia cùng chúng tôi để bắt đầu hành trình xanh."}
                    </p>
                  </div>

                  {/* Role Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <button
                      onClick={() => setRole("user")}
                      className={`flex items-center justify-center gap-3 h-14 rounded-2xl border-2 transition-all ${role === "user" ? "border-emerald-500 bg-emerald-50/30 text-emerald-700" : "border-gray-100 text-gray-400 hover:border-gray-200"}`}
                    >
                      <User className={`w-5 h-5 ${role === "user" ? "text-emerald-500" : ""}`} />
                      <span className="text-sm font-black">Khách hàng</span>
                    </button>
                    <button
                      onClick={() => setRole("carrier")}
                      className={`flex items-center justify-center gap-3 h-14 rounded-2xl border-2 transition-all ${role === "carrier" ? "border-emerald-500 bg-emerald-50/30 text-emerald-700" : "border-gray-100 text-gray-400 hover:border-gray-200"}`}
                    >
                      <Truck className={`w-5 h-5 ${role === "carrier" ? "text-emerald-500" : ""}`} />
                      <span className="text-sm font-black">Nhà vận chuyển</span>
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    {activeTab === "register" && (
                      <>
                        <div className="space-y-2">
                           <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Họ và tên</label>
                           <div className="relative group">
                              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                              <Input placeholder="Nguyễn Văn A" className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-sm font-bold transition-all" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Số điện thoại</label>
                           <div className="relative group">
                              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 font-bold group-focus-within:text-emerald-500 transition-colors">+84</span>
                              <Input placeholder="0912 345 678" className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-sm font-bold transition-all" />
                           </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                       <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Email hoặc Tên đăng nhập</label>
                       <div className="relative group">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                          <Input placeholder="name@example.com" className="h-14 pl-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-sm font-bold transition-all" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <div className="flex items-center justify-between pl-1">
                          <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Mật khẩu</label>
                          {activeTab === "login" && (
                            <button className="text-[10px] font-black text-emerald-600 hover:text-emerald-700 uppercase tracking-wider">Quên mật khẩu?</button>
                          )}
                       </div>
                       <div className="relative group">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-emerald-500 transition-colors z-10"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-14 pl-14 pr-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-sm font-bold tracking-widest transition-all"
                          />
                       </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleLogin}
                    className="w-full h-16 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 mt-10 gap-3 text-lg border-none active:scale-[0.98] transition-all group"
                  >
                    {activeTab === "login" ? "Đăng nhập ngay" : "Đăng ký ngay"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="relative my-12">
                     <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-50"></div></div>
                     <div className="relative flex justify-center text-[10px] uppercase font-black text-gray-300 tracking-[0.2em] bg-white px-6">
                        Hoặc {activeTab === "login" ? "tiếp tục" : "đăng ký"} với
                     </div>
                  </div>

                  {/* Social Logins */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-sm text-gray-600">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-sm text-gray-600">
                      <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                      Facebook
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-gray-400 font-bold leading-relaxed px-4">
                    Bằng việc {activeTab === "login" ? "đăng nhập" : "đăng ký"}, bạn đồng ý với <Link href="#" className="text-emerald-600 hover:underline">Điều khoản dịch vụ</Link> và <Link href="#" className="text-emerald-600 hover:underline">Chính sách bảo mật</Link> của chúng tôi.
                  </p>

                  {activeTab === "register" && (
                    <p className="mt-8 text-center text-xs font-bold text-gray-500">
                      Đã có tài khoản? <button onClick={() => setActiveTab("login")} className="text-emerald-600 hover:underline">Đăng nhập</button>
                    </p>
                  )}
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="h-20 bg-white border-t border-gray-50 flex items-center justify-center">
         <p className="text-[11px] font-bold text-gray-400 tracking-tight">
           © 2024 GreenLogistics. Cùng nhau xây dựng tương lai xanh.
         </p>
      </footer>
    </div>
  )
}
