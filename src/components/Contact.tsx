import React, { useState } from 'react';
import type { Plan } from '../data/plans';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_INTL,
  getWhatsAppUrl,
  getTelegramUrl,
  TELEGRAM_PHONE_DISPLAY,
} from '../utils/contactLinks';
import {
  MessageCircle,
  Send,
  Copy,
  Check,
  Package,
  Mail,
  Receipt,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  selectedPlan: Plan | null;
}

export const Contact: React.FC<ContactProps> = ({ selectedPlan }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_PHONE_DISPLAY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const whatsappUrl = getWhatsAppUrl(selectedPlan);
  const telegramUrl = getTelegramUrl();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-emerald-200/70">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>تواصل مباشر</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            تواصل معنا للاشتراك
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            راسلنا مباشرة عبر WhatsApp أو Telegram لإتمام تفعيل اشتراكك في أسرع وقت.
          </p>
        </div>

        {/* Selected Plan Banner if chosen */}
        {selectedPlan && (
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-amber-900 font-semibold">الباقة المحددة للتواصل:</p>
                <p className="text-sm sm:text-base font-extrabold text-slate-900">
                  {selectedPlan.nameArabic} ({selectedPlan.durationArabic}) — {selectedPlan.formattedPrice} د.ع
                </p>
              </div>
            </div>
            <a
              href="#pricing"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 underline shrink-0"
            >
              تغيير
            </a>
          </div>
        )}

        {/* What to Send Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-600" />
            <span>عند التواصل أرسل لنا:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <Package className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-0.5">1. الباقة المطلوبة</span>
                <span className="text-[11px] text-slate-500">مدة الباقة وسعرها</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <Mail className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-0.5">2. البريد الإلكتروني</span>
                <span className="text-[11px] text-slate-500">المسجل في تطبيق كفاءة</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <Receipt className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-0.5">3. إثبات الدفع</span>
                <span className="text-[11px] text-slate-500">وصل التحويل بعد الدفع</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* WhatsApp Card */}
          <div className="bg-emerald-500 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md shadow-emerald-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full text-white">
                  الرد الأسرع
                </span>
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">WhatsApp</h3>
              <p className="text-xs text-emerald-50 leading-relaxed mb-4">
                محادثة فورية مع رسالة مجهزة مسبقاً بالباقة وتفاصيل الاشتراك.
              </p>
              <div className="text-xs font-mono font-bold bg-emerald-600/60 text-white px-3 py-1.5 rounded-lg inline-block mb-6" dir="ltr">
                {CONTACT_PHONE_INTL}
              </div>
            </div>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-emerald-800 hover:bg-emerald-50 font-bold py-3.5 px-4 rounded-xl text-center text-sm transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل عبر WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Telegram Card */}
          <div className="bg-sky-600 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md shadow-sky-600/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full text-white">
                  مراسلة مباشرة
                </span>
                <Send className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">Telegram</h3>
              <p className="text-xs text-sky-50 leading-relaxed mb-4">
                فتح محادثة مباشرة في تطبيق Telegram باستخدام رقم الهاتف المعتمد.
              </p>
              <div className="text-xs font-mono font-bold bg-sky-700/60 text-white px-3 py-1.5 rounded-lg inline-block mb-6" dir="ltr">
                {TELEGRAM_PHONE_DISPLAY}
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-sky-800 hover:bg-sky-50 font-bold py-3.5 px-4 rounded-xl text-center text-sm transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>تواصل عبر Telegram</span>
              </a>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 text-xs text-sky-100 hover:text-white underline underline-offset-4 py-1 px-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم نسخ الرقم بنجاح!' : 'نسخ رقم الهاتف'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
