export interface Plan {
  id: string;
  durationDays: number | null;
  endsAt?: string;
  nameArabic: string;
  durationArabic: string;
  priceIqd: number;
  formattedPrice: string;
  originalPriceIqd: number;
  formattedOriginalPrice: string;
  discountPercent: number;
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
    priceIqd: 5000,
    formattedPrice: '5,000',
    originalPriceIqd: 10000,
    formattedOriginalPrice: '10,000',
    discountPercent: 50,
    description: 'مثالية للتحضير السريع والمراجعة المكثفة قبل موعد الامتحان.',
    dailyRateText: '167 د.ع / يوم تقريباً',
  },
  {
    id: 'plan_90',
    durationDays: 90,
    nameArabic: '3 أشهر',
    durationArabic: '90 يوماً',
    priceIqd: 10000,
    formattedPrice: '10,000',
    originalPriceIqd: 20000,
    formattedOriginalPrice: '20,000',
    discountPercent: 50,
    description: 'الخيار المتوازن للدراسة والاستعداد المنظم على مدى ثلاثة أشهر.',
    dailyRateText: '111 د.ع / يوم تقريباً',
  },
  {
    id: 'season_2027',
    durationDays: null,
    endsAt: '2027-08-01',
    nameArabic: 'الموسم الكامل',
    durationArabic: 'حتى 1/8/2027',
    priceIqd: 20000,
    formattedPrice: '20,000',
    originalPriceIqd: 40000,
    formattedOriginalPrice: '40,000',
    discountPercent: 50,
    isPopular: true,
    badge: 'أفضل قيمة',
    description: 'اشتراك يغطي موسم الاختبارات كاملًا حتى 1/8/2027 بأفضل تكلفة.',
    dailyRateText: 'صالح حتى نهاية الموسم',
  },
];
