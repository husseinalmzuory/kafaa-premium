import React from 'react';
import { PLANS, type Plan } from '../data/plans';
import { Check, Sparkles, ArrowLeft } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
  selectedPlan: Plan | null;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, selectedPlan }) => {
  const handlePlanClick = (plan: Plan) => {
    onSelectPlan(plan);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>خيارات اشتراك مرنة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            باقات <span className="text-amber-600">Kafaa Premium</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            اختر الباقة المناسبة لموعد اختبارك وجدولك الدراسي. تبدأ صلاحية الاشتراك فور تفعيل الحساب.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isSelected = selectedPlan?.id === plan.id;
            const isBestValue = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border-2 ${
                  isBestValue
                    ? 'border-amber-500 shadow-lg shadow-amber-500/10 md:-translate-y-2'
                    : isSelected
                    ? 'border-slate-800 shadow-md'
                    : 'border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge || 'أفضل قيمة'}</span>
                  </div>
                )}

                <div>
                  {/* Duration & Name */}
                  <div className="mb-4">
                    <h3 className="text-lg font-extrabold text-slate-900">{plan.nameArabic}</h3>
                    <p className="text-xs font-semibold text-slate-500">{plan.durationArabic}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-950 tracking-tight">
                        {plan.formattedPrice}
                      </span>
                      <span className="text-xs font-bold text-slate-600">د.ع</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium mt-1 block">
                      {plan.dailyRateText}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>كافة الأسئلة والامتحانات السابقة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>الامتحان الشامل وتحدي 60 ثانية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>بدون إعلانات وبدون خصم محاولات</span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    isBestValue
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                      : isSelected
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>اشترك بهذه الباقة</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note under pricing */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            * يتم تفعيل الاشتراك فور تحويل المبلغ وإرسال إثبات الدفع والبريد الإلكتروني المسجل في كفاءة عبر WhatsApp أو Telegram.
          </p>
        </div>
      </div>
    </section>
  );
};
