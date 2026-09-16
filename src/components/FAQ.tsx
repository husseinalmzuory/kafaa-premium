import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'متى يبدأ الاشتراك؟',
      a: 'تبدأ مدة الاشتراك من وقت تفعيل Premium على حسابك في التطبيق وليس من وقت الدفع.',
    },
    {
      q: 'هل أحتاج إلى إنشاء حساب جديد؟',
      a: 'لا، يتم تفعيل Premium على حساب كفاءة الحالي الخاص بك مباشرة.',
    },
    {
      q: 'ما المعلومات المطلوبة للتفعيل؟',
      a: 'البريد الإلكتروني المستخدم في حساب كفاءة وإثبات الدفع (وصل التحويل).',
    },
    {
      q: 'هل أحتاج إلى إرسال كلمة المرور؟',
      a: 'لا. لا ترسل كلمة مرور حسابك لأي شخص تحت أي ظرف.',
    },
    {
      q: 'ماذا أفعل بعد التفعيل؟',
      a: 'افتح تطبيق كفاءة وتحقق من ظهور شارة Premium وفتح جميع المزايا في حسابك.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-slate-200/80 text-slate-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>إجابات واضحة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            أبرز الاستفسارات المتعلقة بخدمة Kafaa Premium وتفعيل الاشتراكات.
          </p>
        </div>

        {/* FAQ Items List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                <span className="text-amber-600 font-extrabold">س:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-5">
                <span className="text-slate-400 font-bold ml-1">ج:</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
