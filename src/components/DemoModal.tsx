import { useEffect } from "react";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex items-center justify-between p-4 border-b border-borderLight bg-slate-50/50">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Play size={18} />
                <h2 id="modal-title">Product Demo</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate hover:text-navy hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pale text-primary rounded-2xl flex items-center justify-center mb-6">
                <Play size={32} className="ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Interactive Demo Coming Soon</h3>
              <p className="text-slate max-w-md mx-auto mb-8">
                This is a placeholder for the product demo video. In a real application, this would contain an embedded video player or an interactive product walkthrough.
              </p>
              
              <div className="bg-pale border border-borderLight rounded-xl p-6 w-full max-w-lg mb-8">
                <h4 className="font-semibold text-navy mb-2">Demo highlights would include:</h4>
                <ul className="text-sm text-slate space-y-2 text-left list-disc list-inside">
                  <li>Adding daily sales and expenses quickly</li>
                  <li>Viewing the end-of-day profit summary</li>
                  <li>Managing low-stock inventory items</li>
                  <li>Offline synchronization demonstration</li>
                </ul>
              </div>
              
              <Button onClick={onClose} variant="primary">
                Close Demo
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
