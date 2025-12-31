import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"
import OrderForm from "@/components/order-form"
import OrderMap from "@/components/order-map"
import StepsProgress from "@/components/steps-progress"

export const metadata = {
  title: "Tạo đơn hàng mới - GreenLogistics",
  description: "Tạo đơn hàng vận chuyển xanh với xe điện",
}

export default function CreateOrderPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <StepsProgress currentStep={1} />
      <Suspense fallback={<div className="flex-1 bg-gray-100" />}>
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map Section */}
            <OrderMap />
            {/* Form Section */}
            <OrderForm />
          </div>
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}
