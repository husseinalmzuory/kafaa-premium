import React from 'react';
import { ShieldCheck, Mail, Sparkles } from 'lucide-react';

export const HowToSubscribe: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'اختر الباقة المناسبة',
      description: 'حدد المدة التي تناسب خطتك الدراسية (شهر، 3 أشهر، 6 أشهر، أو سنة كاملة).',
    },
    {
      number: '2',
      title: 'تواصل معنا',
      description: 'راسلنا مباشرة عبر WhatsApp أو Telegram وأبلغنا بالباقة المختارة.',
    },
    {
      number: '3',
      title: 'اختر وسيلة الدفع',
      description: 'اختر الوسيلة الأنسب لك (زين كاش، ماستركارد، أو رصيد هاتف) واستلم تفاصيل التحويل.',
    },
    {
      number: '4',
      title: 'أرسل إثبات التحويل والإيميل',
      description: 'أرسل لقطة شاشة لإثبات الدفع والبريد الإلكتروني المسجل في تطبيق كفاءة.',
    },
    {
      number: '5',
      title: 'تفعيل فوري لـ Premium',
      description: 'يقوم الفريق بتفعيل اشتراكك وتحديث حسابك في التطبيق مباشرة.',
    },
  ];

  return (
    <section id="how-to-subscribe" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-slate-200/80 text-slate-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>5 خطوات بسيطة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            كيفية الاشتراك
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            خطوات ميسرة وسريعة للاستفادة من كامل إمكانيات تطبيق كفاءة.
          </p>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between relative shadow-xs"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 font-black text-sm flex items-center justify-center mb-3">
                  {step.number}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions & Security Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3.5">
            <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              <span className="font-bold block mb-1">البريد الإلكتروني للحساب:</span>
              تأكد من إرسال البريد الإلكتروني نفسه المستخدم في حساب كفاءة لضمان تفعيل الاشتراك على الحساب الصحيح.
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <span className="font-bold block mb-1">تنبيه أمني هام:</span>
              لن نطلب منك كلمة مرور حسابك مطلقاً. لا تشارك كلمة المرور مع أي جهة أو شخص.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
