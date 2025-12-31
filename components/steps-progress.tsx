"use client"

import { CheckCircle2 } from "lucide-react"

interface StepsProgressProps {
  currentStep: number
}

export default function StepsProgress({ currentStep }: StepsProgressProps) {
  const steps = [
    { number: 1, label: "Tạo đơn hàng" },
    { number: 2, label: "Chọn nhà vận chuyển" },
    { number: 3, label: "Thanh toán" },
    { number: 4, label: "Hoàn tất" },
  ]

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Circles and Lines Row */}
          <div className="flex items-center justify-center w-full max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1 last:flex-none">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all z-10 shrink-0 ${
                    currentStep > step.number
                      ? "bg-emerald-500 text-white"
                      : currentStep === step.number
                        ? "bg-white border-4 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle2 className="w-6 h-6" /> : step.number}
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-[-2px] transition-all ${
                      currentStep > step.number ? "bg-emerald-500" : "bg-gray-100"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Labels Row */}
          <div className="flex justify-between w-full max-w-2xl mt-4 px-2">
            {steps.map((step) => (
              <p
                key={step.number}
                className={`text-[13px] font-bold whitespace-nowrap text-center transition-colors min-w-[40px] ${
                  currentStep > step.number
                    ? "text-emerald-500"
                    : currentStep === step.number
                      ? "text-gray-900"
                      : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
