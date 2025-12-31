"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, LayoutDashboard, Menu, ScrollText, Search, ShieldCheck, Wallet, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/don-hang", label: "Đơn hàng", Icon: ScrollText },
    { href: "/vung-xanh", label: "Vùng xanh & quy định", Icon: ShieldCheck },
  ]

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
               <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-black text-xl text-gray-900 tracking-tight">GreenLogistics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                  isActive(link.href) ? "text-emerald-600" : "text-gray-500 hover:text-emerald-600"
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

            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-gray-900 leading-none mb-1">Nguyễn Văn A</p>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">Khách hàng cá nhân</p>
              </div>
              <Avatar className="h-10 w-10 border-2 border-emerald-50 shadow-sm group-hover:border-emerald-500 transition-colors">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">A</AvatarFallback>
              </Avatar>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-500">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  isActive(link.href) ? "bg-emerald-50 text-emerald-600" : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                <link.Icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
