"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { logout } from "@/lib/redux/slices/authSlice";
import {
  Bell,
  ChevronDown,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  ScrollText,
  Search,
  Settings,
  ShieldCheck,
  Truck,
  User as UserIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/quan-ly-tai-xe", label: "Tài xế", Icon: UserIcon },
    { href: "/quan-ly-phuong-tien", label: "Xe điện", Icon: Truck },
    { href: "/don-hang", label: "Đơn hàng", Icon: ScrollText },
    { href: "/vung-xanh", label: "Vùng xanh & quy định", Icon: ShieldCheck },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-black text-xl text-gray-900 tracking-tight">
              GreenLogistics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-600"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                <link.Icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            <div className="h-8 w-px bg-gray-100 hidden lg:block"></div>

            <div className="flex items-center gap-4">
              {!isAuthenticated ? (
                <Link href="/dang-nhap">
                  <Button className="hidden sm:flex bg-emerald-500 hover:bg-emerald-600 text-white font-black h-12 px-8 rounded-xl shadow-lg shadow-emerald-500/20 border-none transition-all active:scale-95">
                    Đăng nhập
                  </Button>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-3 pl-2 group cursor-pointer outline-none">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-black text-gray-900 leading-none mb-1 group-hover:text-emerald-600 transition-colors">
                          {user?.name}
                        </p>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">
                          {user?.role === "carrier"
                            ? "Nhà vận chuyển"
                            : "Khách hàng"}
                        </p>
                      </div>
                      <Avatar className="h-10 w-10 border-2 border-emerald-50 shadow-sm group-hover:border-emerald-500 transition-colors">
                        <AvatarImage
                          src={
                            user?.avatar ||
                            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80"
                          }
                        />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">
                          {user?.name?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-64 p-2 rounded-2xl border-gray-100 shadow-xl mt-2"
                  >
                    <DropdownMenuLabel className="p-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-black text-gray-900">
                          {user?.name}
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-50" />
                    <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-emerald-50 focus:text-emerald-600 font-bold text-sm">
                      <UserIcon className="w-4 h-4" />
                      Trang cá nhân
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-emerald-50 focus:text-emerald-600 font-bold text-sm">
                      <CreditCard className="w-4 h-4" />
                      Lịch sử thanh toán
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-emerald-50 focus:text-emerald-600 font-bold text-sm">
                      <Settings className="w-4 h-4" />
                      Cài đặt
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-50" />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="flex items-center gap-3 p-3 rounded-xl cursor-pointer focus:bg-red-50 focus:text-red-600 font-black text-sm text-red-500"
                    >
                      <LogOut className="w-4 h-4" />
                      Đăng xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-2 pt-2 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                <link.Icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
            {!isAuthenticated ? (
              <Link
                href="/dang-nhap"
                className="flex items-center gap-3 px-4 py-3 text-sm font-black text-emerald-600 bg-emerald-50 rounded-xl"
              >
                <LogOut className="w-5 h-5 rotate-180" />
                Đăng nhập
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-black text-red-500 hover:bg-red-50 rounded-xl transition-all"
              >
                <LogOut className="w-5 h-5" />
                Đăng xuất
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
