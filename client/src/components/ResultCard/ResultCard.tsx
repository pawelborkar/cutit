import React, { useState } from "react";
import { Copy, Check, ExternalLink, QrCode } from "lucide-react";
import { Card, CardContent, Button, Chip } from "@heroui/react";

interface ResultCardProps {
  link: string;
  alias?: string;
  expiryDate?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  link,
  alias,
  expiryDate,
}) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Card className="w-full mt-4 bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg">
      <CardContent className="p-4 gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="text-fuchsia-600">Short Link Ready</span>
              {alias && (
                <Chip
                  size="sm"
                  color="warning"
                  variant="soft"
                  className="text-[10px]"
                >
                  Custom Alias
                </Chip>
              )}
              {expiryDate && (
                <Chip
                  size="sm"
                  color="warning"
                  variant="soft"
                  className="text-[10px]"
                >
                  Expires: {expiryDate}
                </Chip>
              )}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-slate-800 hover:text-fuchsia-600 truncate flex items-center gap-1.5 transition-colors w-fit"
            >
              {link}
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div title="Toggle QR Code">
              <Button
                isIconOnly
                variant="ghost"
                onPress={() => setShowQR(!showQR)}
                className="bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <QrCode className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onPress={handleCopy}
              className={`font-bold transition-all duration-200 ${
                copied
                  ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                  : "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-sm shadow-fuchsia-500/30"
              }`}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 mr-1" />
              ) : (
                <Copy className="w-3.5 h-3.5 mr-1" />
              )}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>

        {showQR && (
          <div className="mt-2 pt-3 border-t border-slate-100 flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(link)}`}
              alt="QR Code"
              className="w-32 h-32 rounded-lg border border-slate-200 shadow-sm"
            />
            <span className="text-[11px] text-slate-500 mt-2 font-medium">
              Scan to visit short link
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
