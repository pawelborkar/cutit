import React from "react";
import Header from "../Header/Header";
import InputForm from "../InputForm/InputForm";
import AnalyticsPanel from "../Panels/AnalyticsPanel";
import LinksManagerPanel from "../Panels/LinksManagerPanel";
import CustomDomainsPanel from "../Panels/CustomDomainsPanel";
import ComparisonTable from "../Showcase/ComparisonTable";
import Testimonials from "../Showcase/Testimonials";
import Pricing from "../Showcase/Pricing";
import PartnerLogos from "../Footer/PartnerLogos";
import FooterCTA from "../Footer/FooterCTA";
import { Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-fuchsia-500 selection:text-white relative overflow-hidden">
      {/* BACKGROUND SQUARES GRID LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-squares bg-vignette-mask opacity-80"></div>

      {/* Dynamic Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-purple-400/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pink-400/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <Header />

        {/* SINGLE COLUMN MAIN CONTAINER */}
        <main className="w-full max-w-4xl flex flex-col items-center text-center pt-8 pb-16 space-y-14 relative">
          {/* HERO HEADLINE SECTION */}
          <div className="flex flex-col items-center space-y-4 max-w-2xl relative">
            <Chip
              color="accent"
              variant="soft"
              size="sm"
              className="font-bold tracking-wider uppercase backdrop-blur-md bg-white/70 border border-fuchsia-200 text-fuchsia-700 py-1.5 px-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Next-Gen Link
              Infrastructure
            </Chip>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Short. Track. Engage. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600">
                Optimize Every Link at Scale.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
              The complete link-management platform built for creators, growth
              teams, and modern brands.
            </p>
          </div>

          {/* CORE INTERACTION CARD (URL Shortener Form) */}
          <div className="w-full relative">
            <InputForm />
          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 font-medium pt-2">
            <Chip
              size="sm"
              variant="soft"
              color="default"
              className="bg-white/70 border border-slate-200 backdrop-blur-sm shadow-sm"
            >
              ✓ No credit card required
            </Chip>
            <Chip
              size="sm"
              variant="soft"
              color="default"
              className="bg-white/70 border border-slate-200 backdrop-blur-sm shadow-sm"
            >
              ✓ Free Custom Domains
            </Chip>
            <Chip
              size="sm"
              variant="soft"
              color="default"
              className="bg-white/70 border border-slate-200 backdrop-blur-sm shadow-sm"
            >
              ✓ Single & Bulk Shortening
            </Chip>
          </div>

          {/* FEATURE PANELS STACK (Command Center Showcase) */}
          <div className="w-full flex flex-col gap-8 pt-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Command Center Dashboard
              </h2>
              <p className="text-sm text-slate-500">
                Powerful real-time link management and analytics in one place.
              </p>
            </div>

            {/* 1. Analytics Panel */}
            <div className="w-full transform transition-all hover:scale-[1.005]">
              <AnalyticsPanel />
            </div>

            {/* 2. Links Manager & 3. Custom Domains Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="w-full">
                <LinksManagerPanel />
              </div>
              <div className="w-full">
                <CustomDomainsPanel />
              </div>
            </div>

            {/* 4. Comparison Table */}
            <div className="w-full pt-4">
              <ComparisonTable />
            </div>

            {/* 5. Pricing Section */}
            <div className="w-full">
              <Pricing />
            </div>

            {/* 6. Testimonials */}
            <div className="w-full">
              <Testimonials />
            </div>
          </div>

          {/* PARTNER LOGOS */}
          <div className="w-full">
            <PartnerLogos />
          </div>

          {/* FOOTER CTA */}
          <div className="w-full">
            <FooterCTA />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
