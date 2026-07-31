import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const FooterCTA: React.FC = () => {
  return (
    <div className="w-full text-center py-12 px-6 relative rounded-3xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white/80 shadow-2xl overflow-hidden">
      {/* Background Grid Squares Overlay */}
      <div className="absolute inset-0 bg-grid-squares bg-vignette-card opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-fuchsia-100/80 text-fuchsia-700 text-xs font-bold mb-4 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-600" />
          <span>Join over 50,000+ creators & teams</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-lg">
          Ready to cut through the noise?
        </h2>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:opacity-95 shadow-xl shadow-fuchsia-500/35 hover:shadow-2xl hover:shadow-fuchsia-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Get Started for Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
