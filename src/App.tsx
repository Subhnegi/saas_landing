import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      
      <Footer />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}

export default App;
