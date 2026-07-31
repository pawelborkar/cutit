import React, { useState } from "react";
import {
  Link2,
  Search,
  Copy,
  Edit3,
  Trash2,
  ExternalLink,
  Check,
  Filter,
} from "lucide-react";
import { Card, CardHeader, CardContent, Button, Chip } from "@heroui/react";

interface LinkItem {
  id: string;
  shortUrl: string;
  destUrl: string;
  clicks: number;
  date: string;
  status: "active" | "expired";
}

export const LinksManagerPanel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const dummyLinks: LinkItem[] = [
    {
      id: "1",
      shortUrl: "cutit.in/summer-sale",
      destUrl:
        "https://store.brand.com/campaigns/summer-2026/promo?utm_source=twitter&utm_medium=social",
      clicks: 12450,
      date: "Oct 24, 2026",
      status: "active",
    },
    {
      id: "2",
      shortUrl: "cutit.in/webinar-reg",
      destUrl: "https://zoom.us/webinar/register/WN_xYz123",
      clicks: 892,
      date: "Oct 22, 2026",
      status: "active",
    },
    {
      id: "3",
      shortUrl: "brand.co/app-dl",
      destUrl: "https://apps.apple.com/app/id123456789",
      clicks: 4521,
      date: "Oct 15, 2026",
      status: "active",
    },
    {
      id: "4",
      shortUrl: "cutit.in/x7y8z9",
      destUrl: "https://example.com/very/long/path/to/document.pdf",
      clicks: 12,
      date: "Oct 10, 2026",
      status: "expired",
    },
  ];

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(`https://${url}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Card className="w-full h-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between p-6 pb-4 border-b border-slate-100 gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-lg text-white shadow-sm">
            <Link2 className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">My Links</h3>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center bg-white border border-slate-200 shadow-sm w-full sm:w-64 rounded-lg px-3 py-1.5">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800"
            />
          </div>
          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            className="bg-white border border-slate-200 shadow-sm text-slate-600"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
              <th className="py-3 px-4">SHORT LINK</th>
              <th className="py-3 px-4">DESTINATION</th>
              <th className="py-3 px-4">CLICKS</th>
              <th className="py-3 px-4">DATE</th>
              <th className="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dummyLinks.map((link) => (
              <tr
                key={link.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">
                      {link.shortUrl}
                    </span>
                    {link.status === "expired" && (
                      <Chip
                        size="sm"
                        color="danger"
                        variant="soft"
                        className="text-[9px] h-4"
                      >
                        Expired
                      </Chip>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="text-xs text-slate-500 font-mono truncate max-w-[200px] flex items-center gap-1">
                    {link.destUrl}
                    <a
                      href={link.destUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3 text-fuchsia-500 hover:text-fuchsia-700" />
                    </a>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-semibold text-slate-700">
                    {link.clicks.toLocaleString()}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {link.date}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="ghost"
                      onPress={() => handleCopy(link.shortUrl, link.id)}
                      className="text-slate-400 hover:text-emerald-500"
                    >
                      {copiedId === link.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="ghost"
                      className="text-slate-400 hover:text-blue-500"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="ghost"
                      className="text-slate-400 hover:text-rose-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default LinksManagerPanel;
