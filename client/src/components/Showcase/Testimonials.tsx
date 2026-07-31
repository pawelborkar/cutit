import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@heroui/react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Growth Marketer, Shopify",
      content:
        "Cutit.in's bulk shortening feature completely changed how we handle affiliate links. What used to take hours now takes seconds. The custom alias feature is a lifesaver for our holiday campaigns.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      name: "David Chen",
      role: "Indie Hacker",
      content:
        "I migrated from bitly because I was sick of the paywalls. Cutit gave me custom domains and deep analytics out of the box for free. The frosted glass UI is honestly just the cherry on top. It feels premium.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Elena Rodriguez",
      role: "Community Manager",
      content:
        "We use the QR codes and short links for all our physical event flyers. Being able to track which flyer location gets the most scans in real-time on the dashboard is incredible.",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Loved by teams & creators.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Card
            key={idx}
            className="bg-white/60 backdrop-blur-md border border-white/80 shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6 flex-grow">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
