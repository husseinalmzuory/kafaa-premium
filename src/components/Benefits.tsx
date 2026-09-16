import React from 'react';
import {
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
  Ban,
  Infinity as InfinityIcon,
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      title: 'الوصول إلى جميع التصنيفات المتقدمة',
      description: 'فتح كافة المحاور الدراسية المتقدمة في اللغة الإنجليزية واللغة العربية ومهارات الحاسوب.',
      icon: Layers,
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'الوصول إلى جميع الامتحانات السابقة',
      description: 'التدريب على كافة نماذج أسئلة الامتحانات الوطنية السابقة المعتمدة للسنوات والشهور الماضية.',
      icon: GraduationCap,
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'استخدام الامتحان الشامل دون قيود',
      description: 'خوض الامتحانات الشاملة والمحاكاة للامتحان الحقيقي بدون قيود على عدد المرات أو المحاولات.',
      icon: Sparkles,
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'الوصول إلى تحدي 60 ثانية',
      description: 'ميزة تدريبية سريعة لتعزيز سرعة الاستجابة وتثبيت المعلومات تحت ضغط الوقت.',
      icon: Zap,
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'تجربة بدون إعلانات',
      description: 'تركيز دراسي تام وتصفح سلس لجميع أجزاء التطبيق دون أي إعلانات منبثقة أو مقاطعات.',
      icon: Ban,
      iconBg: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'عدم استهلاك المحاولات أثناء الاستخدام',
      description: 'حل الاختبارات وتكرار النماذج دون خصم أو قلق بشأن نفاد المحاولات اليومية.',
      icon: InfinityIcon,
      iconBg: 'bg-cyan-50 text-cyan-600',
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            ماذا تحصل مع <span className="text-amber-600">Kafaa Premium</span>؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            مزايا حقيقية مصممة لمساعدتك على اجتياز اختبار الكفاءة الوطني بأعلى درجات الجاهزية.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-6 transition-all hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
