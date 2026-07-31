import React from "react";
import { Check, X, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      key: "1",
      feature: "Free Custom Branded Domains",
      cutit: true,
      others: false,
      detail: "Boost brand trust & CTR by 34%",
    },
    {
      key: "2",
      feature: "Unlimited Bulk URL Shortening",
      cutit: true,
      others: false,
      detail: "Paste 100s of links in 1 click",
    },
    {
      key: "3",
      feature: "Real-Time Geo & Device Analytics",
      cutit: true,
      others: "Paid Only",
      detail: "Deep visitor metrics instantly",
    },
    {
      key: "4",
      feature: "Custom Slugs & Expiration Rules",
      cutit: true,
      others: "Paid Only",
      detail: "Complete campaign control",
    },
    {
      key: "5",
      feature: "Free QR Code Generator",
      cutit: true,
      others: true,
      detail: "Vector HD download",
    },
    {
      key: "6",
      feature: "No Ad Interstitials or Delays",
      cutit: true,
      others: false,
      detail: "100% clean redirect speeds",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8 space-y-2">
        <Chip
          color="accent"
          variant="soft"
          size="sm"
          className="font-bold mb-2"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1" /> Why Choose cutit.in?
        </Chip>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Built for growth. Free from legacy paywalls.
        </h2>
        <p className="text-sm text-slate-600">
          See how cutit.in stacks up against traditional link shorteners.
        </p>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-xl p-4 sm:p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80">
              <th className="w-1/2 py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Features & Capabilities
              </th>
              <th className="w-1/4 py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-center bg-fuchsia-50/60 text-fuchsia-700 rounded-t-xl">
                cutit.in
              </th>
              <th className="w-1/4 py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-center text-slate-500">
                Legacy Shorteners
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((item) => (
              <tr
                key={item.key}
                className="hover:bg-slate-50/60 transition-colors"
              >
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  <div>{item.feature}</div>
                  <div className="text-[11px] text-slate-400 font-normal">
                    {item.detail}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center bg-fuchsia-50/30">
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-fuchsia-100 text-fuchsia-700">
                    <Check className="w-4 h-4" />
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center text-slate-400 font-medium">
                  {item.others === true ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  ) : item.others === false ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-400">
                      <X className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <Chip
                      size="sm"
                      color="warning"
                      variant="soft"
                      className="text-[11px] font-bold"
                    >
                      {item.others}
                    </Chip>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
