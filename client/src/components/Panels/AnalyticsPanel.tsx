import React, { useState } from "react";
import { BarChart3, TrendingUp, Users, MousePointerClick } from "lucide-react";
import { Card, CardHeader, CardContent, Chip } from "@heroui/react";

export const AnalyticsPanel: React.FC = () => {
  const [timeframe, setTimeframe] = useState("30d");

  // Dummy data for presentation
  const stats = [
    {
      label: "Total Clicks",
      value: "25,482",
      trend: "+12.5%",
      icon: MousePointerClick,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Unique Visitors",
      value: "18,291",
      trend: "+8.2%",
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      label: "Conversion Rate",
      value: "14.3%",
      trend: "+2.1%",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <Card className="w-full h-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg text-white shadow-sm">
            <BarChart3 className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            Analytics Overview
          </h3>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          {["7d", "30d", "All"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                timeframe === t
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-4 gap-4">
        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}
                >
                  <stat.icon className="w-4 h-4" />
                </div>
                <Chip
                  size="sm"
                  color="success"
                  variant="soft"
                  className="font-bold text-[10px]"
                >
                  {stat.trend}
                </Chip>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-800">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dummy Chart Area */}
        <div className="mt-2 w-full h-48 bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 mix-blend-multiply"></div>
          <div className="flex flex-col items-center justify-center text-slate-400 gap-2 relative z-10 group-hover:scale-110 transition-transform">
            <BarChart3 className="w-8 h-8 opacity-50" />
            <span className="text-xs font-semibold tracking-wide">
              Interactive Chart Visualization
            </span>
          </div>

          {/* Faux chart bars */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-6 pb-4 opacity-40">
            {[40, 70, 45, 90, 65, 85, 120, 50, 80, 100].map((h, i) => (
              <div
                key={i}
                className="w-8 bg-gradient-to-t from-fuchsia-200 to-fuchsia-400 rounded-t-sm"
                style={{ height: `${h}px` }}
              ></div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsPanel;
