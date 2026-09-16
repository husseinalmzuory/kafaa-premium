import type { Plan } from '../data/plans';

export const CONTACT_PHONE_DISPLAY = '07518464843';
export const CONTACT_PHONE_INTL = '+9647518464843';
export const CONTACT_PHONE_RAW_INTL = '9647518464843';

/**
 * إنشاء رابط WhatsApp مباشر مع رسالة مجهزة مسبقاً
 */
export function getWhatsAppUrl(selectedPlan?: Plan | null): string {
  let message = 'مرحباً، أرغب بالاشتراك في Kafaa Premium.';
  if (selectedPlan) {
    message = `مرحباً، أرغب بالاشتراك في Kafaa Premium لمدة ${selectedPlan.durationArabic} (${selectedPlan.nameArabic}) بسعر ${selectedPlan.formattedPrice} د.ع.`;
  }
  return `https://wa.me/${CONTACT_PHONE_RAW_INTL}?text=${encodeURIComponent(message)}`;
}

/**
 * معلومات Telegram الرسمية
 * تيليجرام لا يوفر فتح محادثة خاصة برقم الهاتف فقط بدون تخزين جهة الاتصال أو معرف مستخدم.
 * لذلك نعرض الرقم بشكل واضح مع ميزة النسخ المباشر.
 */
export const TELEGRAM_PHONE_DISPLAY = '07518464843';
export const TELEGRAM_PHONE_INTL = '+9647518464843';
