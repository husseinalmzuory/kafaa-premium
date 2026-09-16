import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import type { Plan } from '../data/plans';
import { getWhatsAppUrl } from '../utils/contactLinks';

interface MobileStickyBarProps {
  selectedPlan: Plan | null;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ selectedPlan }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[11px] font-semibold text-slate-500 block">
            {selectedPlan ? selectedPlan.nameArabic : 'Kafaa Premium'}
          </span>
          <span className="text-xs font-black text-slate-900">
            {selectedPlan ? `${selectedPlan.formattedPrice} د.ع` : 'ابتداءً من 10,000 د.ع'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl(selectedPlan)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تواصل</span>
          </a>

          <a
            href="#pricing"
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs active:scale-95 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>الباقات</span>
          </a>
        </div>
      </div>
    </div>
  );
};
