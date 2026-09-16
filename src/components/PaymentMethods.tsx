import React from 'react';
import { CreditCard, Smartphone, Wallet, ShieldAlert, MessageCircle } from 'lucide-react';

export const PaymentMethods: React.FC = () => {
  return (
    <section id="payment-methods" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            طرق الدفع المتاحة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نوفر وسائل دفع محلية سهلة ومباشرة لجميع الطلاب داخل العراق.
          </p>
        </div>

        {/* Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* ZainCash */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-center flex flex-col items-center hover:border-slate-300 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">ZainCash (زين كاش)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              تحويل مباشر وسريع عبر محفظة زين كاش الإلكترونية.
            </p>
          </div>

          {/* Mastercard */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-center flex flex-col items-center hover:border-slate-300 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Mastercard (ماستركارد)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              تحويل عبر البطاقات والخدمات المصرفية المحلية المعتمدة.
            </p>
          </div>

          {/* Mobile Credit */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-center flex flex-col items-center hover:border-slate-300 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">رصيد الهاتف</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              تحويل رصيد عبر شبكات الاتصال:
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-700">
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Zain</span>
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Asiacell</span>
              <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Korek</span>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-slate-900 mb-0.5">ملاحظة حول بيانات التحويل:</p>
            <p>
              يتم تزويدك ببيانات الدفع المناسبة بعد التواصل معنا عبر WhatsApp أو Telegram. الموقع لا يحتوي على بوابات دفع إلكترونية أو أرقام حسابات مصرفية معلنة حفاظاً على الخصوصية والأمان.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تواصل للدفع</span>
          </a>
        </div>
      </div>
    </section>
  );
};
