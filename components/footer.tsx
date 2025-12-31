import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-lime-500 rounded"></div>
              <span className="font-bold text-lg text-white">GreenLogistics</span>
            </div>
            <p className="text-sm text-gray-400">Giải pháp vận chuyển thông minh cho tương lai xanh bên vững.</p>
          </div>

          {/* Sản phẩm */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Giải pháp vận chuyển
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Thuê xe điện
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API tích hợp
                </a>
              </li>
            </ul>
          </div>

          {/* Công ty */}
          <div>
            <h4 className="text-white font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tuyên dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© 2025 GreenLogistics. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lime-500 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lime-500 transition"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
