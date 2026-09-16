export interface Plan {
  id: string;
  durationDays: number;
  nameArabic: string;
  durationArabic: string;
  priceIqd: number;
  formattedPrice: string;
  isPopular?: boolean;
  badge?: string;
  description: string;
  dailyRateText: string;
}

/**
 * الباقات التجارية المعتمدة لخدمة Kafaa Premium
 * مصدر البيانات الموحد لجميع مكونات الموقع
 */
export const PLANS: Plan[] = [
  {
    id: 'plan_30',
    durationDays: 30,
    nameArabic: 'شهر',
    durationArabic: '30 يوماً',
    priceIqd: 10000,
    formattedPrice: '10,000',
    description: 'مثالية للتحضير السريع والمراجعة المكثفة قبل موعد الامتحان.',
    dailyRateText: '333 د.ع / يوم تقريباً',
  },
  {
    id: 'plan_90',
    durationDays: 90,
    nameArabic: '3 أشهر',
    durationArabic: '90 يوماً',
    priceIqd: 20000,
    formattedPrice: '20,000',
    description: 'الخيار المتوازن والأكثر ملاءمة للدراسة والاستعداد المنظم.',
    dailyRateText: '222 د.ع / يوم تقريباً',
  },
  {
    id: 'plan_180',
    durationDays: 180,
    nameArabic: '6 أشهر',
    durationArabic: '180 يوماً',
    priceIqd: 30000,
    formattedPrice: '30,000',
    description: 'تتيح وقتاً وافياً للتدريب على جميع الأسئلة والامتحانات السابقة.',
    dailyRateText: '166 د.ع / يوم تقريباً',
  },
  {
    id: 'plan_365',
    durationDays: 365,
    nameArabic: 'سنة كاملة',
    durationArabic: '365 يوماً',
    priceIqd: 40000,
    formattedPrice: '40,000',
    isPopular: true,
    badge: 'أفضل قيمة',
    description: 'الخيار الأوفر والأطول مدة للحصول على كامل المزايا بأفضل تكلفة.',
    dailyRateText: '110 د.ع / يوم تقريباً',
  },
];
