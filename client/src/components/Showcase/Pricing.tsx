import React, { useState } from "react";
import { Check, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { Card, CardContent, Button, Chip } from "@heroui/react";

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free Starter",
      desc: "Perfect for individuals and side projects.",
      price: "$0",
      period: "forever",
      icon: Sparkles,
      color: "text-slate-700 bg-slate-100",
      buttonVariant: "ghost" as const,
      buttonText: "Get Started Free",
      popular: false,
      features: [
        "Up to 1,000 links / month",
        "Single & Bulk Link Shortener",
        "Basic Click Analytics",
        "HD QR Code Generator",
        "Community Support",
      ],
    },
    {
      name: "Pro Growth",
      desc: "Ideal for creators, marketers & growing brands.",
      price: annual ? "$7" : "$9",
      period: "/ month",
      icon: Zap,
      color: "text-fuchsia-600 bg-fuchsia-50",
      buttonVariant: "primary" as const,
      buttonText: "Start 14-Day Free Trial",
      popular: true,
      features: [
        "Unlimited Short Links",
        "Up to 5 Custom Branded Domains",
        "Real-Time Geo & Device Analytics",
        "Custom Slugs & Expiration Dates",
        "CSV Bulk Export & Import",
        "Ad-Free Clean Redirects",
      ],
    },
    {
      name: "Team Enterprise",
      desc: "For high-volume teams and scalable infrastructure.",
      price: annual ? "$24" : "$29",
      period: "/ month",
      icon: Shield,
      color: "text-purple-600 bg-purple-50",
      buttonVariant: "ghost" as const,
      buttonText: "Upgrade to Team",
      popular: false,
      features: [
        "Everything in Pro Growth",
        "Unlimited Custom Domains",
        "Team Workspaces (10 Seats)",
        "REST API & Webhooks Access",
        "Custom SSL Certificate",
        "Dedicated 24/7 Priority Support",
      ],
    },
  ];

  return (
    <div id="pricing" className="w-full py-10 scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-8 space-y-2">
        <Chip
          color="accent"
          variant="soft"
          size="sm"
          className="font-bold mb-2"
        >
          <Rocket className="w-3.5 h-3.5 mr-1" /> Simple & Transparent Pricing
        </Chip>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Scale your links without limits.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-medium">
          Start for free. Upgrade as your audience grows. No hidden fees.
        </p>

        {/* Annual Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span
            className={`text-xs font-bold ${!annual ? "text-slate-900" : "text-slate-400"}`}
          >
            Monthly Billing
          </span>
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className="w-12 h-6 rounded-full bg-slate-200 p-1 transition-colors relative focus:outline-none"
          >
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-md transition-transform ${
                annual ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
          <span
            className={`text-xs font-bold flex items-center gap-1.5 ${annual ? "text-slate-900" : "text-slate-400"}`}
          >
            Annual Billing
            <Chip
              size="sm"
              color="success"
              variant="soft"
              className="text-[10px] font-extrabold h-5"
            >
              Save 25%
            </Chip>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          return (
            <Card
              key={idx}
              className={`relative bg-white/80 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? "border-fuchsia-400 ring-2 ring-fuchsia-400/50 shadow-2xl shadow-fuchsia-500/20 scale-[1.02]"
                  : "border-white/80 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Chip
                    color="accent"
                    variant="soft"
                    size="sm"
                    className="font-extrabold text-[10px] uppercase tracking-wider bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md border-none px-3"
                  >
                    Most Popular
                  </Chip>
                </div>
              )}

              <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-2xl ${plan.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {plan.name}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl font-black text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-6">
                    {plan.desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full font-bold text-xs py-3 rounded-xl transition-all shadow-md ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-fuchsia-500/30"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
