import React from "react";
import { Globe, Plus, Clock, ChevronRight, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardContent, Button, Chip } from "@heroui/react";

export const CustomDomainsPanel: React.FC = () => {
  return (
    <Card className="w-full h-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">
      <CardHeader className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-lg text-white shadow-sm">
            <Globe className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Custom Domains</h3>
        </div>
        <Button size="sm" className="bg-slate-900 text-white font-semibold">
          <Plus className="w-3.5 h-3.5 mr-1" /> Add Domain
        </Button>
      </CardHeader>

      <CardContent className="p-6 pt-4 gap-4">
        {/* Active Domain */}
        <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base">brand.co</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <Chip
                    size="sm"
                    color="success"
                    variant="soft"
                    className="text-[10px] font-bold h-4"
                  >
                    Active
                  </Chip>
                  <span className="text-[11px] text-slate-500 font-medium">
                    SSL Provisioned
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-slate-700">1.2M</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Links
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Pending Domain */}
        <div className="bg-white/60 border border-amber-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base">
                  promo.brand.co
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <Chip
                    size="sm"
                    color="warning"
                    variant="soft"
                    className="text-[10px] font-bold h-4"
                  >
                    Configuring DNS
                  </Chip>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Checking records...
                  </span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomDomainsPanel;
