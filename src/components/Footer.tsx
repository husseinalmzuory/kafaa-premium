import React from 'react';
import { Crown, MessageCircle, Send } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_INTL, getWhatsAppUrl, getTelegramUrl } from '../utils/contactLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Crown className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">كفاءة | Kafaa Premium</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              الخدمة الرسمية لتطبيق كفاءة المخصص للتحضير والتدريب على اختبار الكفاءة الوطني العراقي.
            </p>
          </div>

          {/* Contact quick reminder */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl(null)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {CONTACT_PHONE_INTL}</span>
            </a>
            <a
              href={getTelegramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Telegram: {CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right text-xs text-slate-500">
          <p>
            تطبيق كفاءة هو تطبيق تعليمي مستقل للتحضير لاختبار الكفاءة الوطني.
          </p>
          <p dir="ltr">
            © {currentYear} Kafaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
