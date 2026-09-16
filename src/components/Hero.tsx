import React from 'react';
import { Crown, Sparkles, ArrowDown, CheckCircle2, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 text-amber-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
          <span>الخدمة الرسمية لتطبيق كفاءة</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.2] mb-6">
          استفد من كامل محتوى <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">كفاءة</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-medium">
          وصول إلى المحتوى المتقدم والامتحانات السابقة وتجربة أكثر اكتمالاً داخل تطبيق كفاءة للتحضير لاختبار الكفاءة الوطني العراقي.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-12">
          <a
            href="#pricing"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white text-base font-bold px-8 py-3.5 rounded-xl shadow-md shadow-amber-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-5 h-5" />
            <span>عرض الباقات</span>
          </a>
          <a
            href="#how-to-subscribe"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-base font-semibold px-6 py-3.5 rounded-xl transition-all hover:border-slate-300"
          >
            <span>كيفية الاشتراك</span>
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Key Points Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 text-right sm:text-center max-w-3xl mx-auto">
          <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>جميع الامتحانات السابقة</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>بدون إعلانات</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>الامتحان الشامل بلا قيود</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <Shield className="w-4 h-4 text-amber-600 shrink-0" />
            <span>تفعيل مباشر على حسابك</span>
          </div>
        </div>
      </div>
    </section>
  );
};
