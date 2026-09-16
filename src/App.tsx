import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { PaymentMethods } from './components/PaymentMethods';
import { HowToSubscribe } from './components/HowToSubscribe';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import type { Plan } from './data/plans';

export const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20 md:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Pricing onSelectPlan={setSelectedPlan} selectedPlan={selectedPlan} />
        <PaymentMethods />
        <HowToSubscribe />
        <Contact selectedPlan={selectedPlan} />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyBar selectedPlan={selectedPlan} />
    </div>
  );
};

export default App;
