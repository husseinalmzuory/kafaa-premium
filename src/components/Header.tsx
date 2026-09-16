import React, { useState } from 'react';
import { Sparkles, Menu, X, Crown } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">كفاءة</span>
              <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                Premium
              </span>
            </div>
            <span className="text-[11px] text-slate-500 block -mt-0.5">اختبار الكفاءة الوطني</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#benefits" className="hover:text-amber-600 transition-colors">
            المزايا
          </a>
          <a href="#pricing" className="hover:text-amber-600 transition-colors">
            الباقات والأسعار
          </a>
          <a href="#payment-methods" className="hover:text-amber-600 transition-colors">
            طرق الدفع
          </a>
          <a href="#how-to-subscribe" className="hover:text-amber-600 transition-colors">
            كيفية الاشتراك
          </a>
          <a href="#faq" className="hover:text-amber-600 transition-colors">
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>عرض الباقات</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <a
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-600"
          >
            المزايا
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-600"
          >
            الباقات والأسعار
          </a>
          <a
            href="#payment-methods"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-600"
          >
            طرق الدفع
          </a>
          <a
            href="#how-to-subscribe"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-600"
          >
            كيفية الاشتراك
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-600"
          >
            الأسئلة الشائعة
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>عرض الباقات</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
