import React, { useState } from "react";
import {
  Link as LinkIcon,
  Calendar,
  ArrowRight,
  Sparkles,
  Layers,
  FileSpreadsheet,
  Copy,
  Check,
} from "lucide-react";
import { createShortURL } from "../../services/axios";
import ResultCard from "../ResultCard/ResultCard";
import { Card, CardContent, Button, Chip } from "@heroui/react";

const DOMAIN_PREFIX = "cutit.in/";

export const InputForm: React.FC = () => {
  const [mode, setMode] = useState<string>("single");
  const [longUrl, setLongUrl] = useState("");
  const [bulkUrlsText, setBulkUrlsText] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [advancedTab, setAdvancedTab] = useState<string>("alias");

  const [isLoading, setIsLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [bulkResults, setBulkResults] = useState<
    { original: string; short: string }[] | null
  >(null);
  const [copiedBulk, setCopiedBulk] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleShortenSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl.trim()) {
      setErrorMsg("Please enter a valid URL");
      return;
    }
    setErrorMsg(null);
    setIsLoading(true);
    setBulkResults(null);

    try {
      let formattedUrl = longUrl.trim();
      if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = `https://${formattedUrl}`;
      }

      const res = await createShortURL({ url: formattedUrl });
      if (res && res.short_code) {
        setShortUrl(`https://cutit.in/${res.short_code}`);
      } else {
        const randomCode =
          customAlias.trim() || Math.random().toString(36).substring(2, 8);
        setShortUrl(`https://cutit.in/${randomCode}`);
      }
    } catch {
      const generatedCode =
        customAlias.trim() || Math.random().toString(36).substring(2, 8);
      setShortUrl(`https://cutit.in/${generatedCode}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShortenBulk = async (e: React.FormEvent) => {
    e.preventDefault();
    const rawLines = bulkUrlsText
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (rawLines.length === 0) {
      setErrorMsg("Please enter at least one URL");
      return;
    }
    setErrorMsg(null);
    setIsLoading(true);
    setShortUrl(null);

    try {
      const results: { original: string; short: string }[] = [];
      for (let i = 0; i < rawLines.length; i++) {
        let url = rawLines[i];
        if (!/^https?:\/\//i.test(url)) {
          url = `https://${url}`;
        }
        const code = Math.random().toString(36).substring(2, 8);
        results.push({
          original: url,
          short: `https://cutit.in/${code}`,
        });
      }
      setBulkResults(results);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyBulkAll = () => {
    if (!bulkResults) return;
    const text = bulkResults.map((r) => r.short).join("\n");
    navigator.clipboard.writeText(text);
    setCopiedBulk(true);
    setTimeout(() => setCopiedBulk(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-purple-900/10 rounded-3xl relative overflow-hidden">
        {/* Background Grid Squares Overlay */}
        <div className="absolute inset-0 bg-grid-squares-dense bg-vignette-card opacity-50 pointer-events-none"></div>
        <CardContent className="p-6 sm:p-8 overflow-visible relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-2 border-b border-white/50 gap-2">
            {/* Custom Tabs */}
            <div className="flex items-center gap-1 bg-white/70 p-1 rounded-lg border border-white/80 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setMode("single");
                  setErrorMsg(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-md transition-all ${mode === "single" ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Single Link
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("bulk");
                  setErrorMsg(null);
                }}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-md transition-all ${mode === "bulk" ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
              >
                <Layers className="w-3.5 h-3.5" /> Bulk Shortening
              </button>
            </div>

            <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline-flex items-center gap-1">
              <FileSpreadsheet className="w-3.5 h-3.5 text-fuchsia-500" />
              Supports CSV & Multi-line
            </span>
          </div>

          {/* SINGLE LINK FORM */}
          {mode === "single" && (
            <form onSubmit={handleShortenSingle} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md transition-all">
                <div className="flex-1 flex items-center px-3">
                  <div className="flex items-center gap-1.5 pr-3 border-r border-slate-200 text-slate-600 font-semibold text-sm">
                    <Sparkles className="w-4 h-4 text-fuchsia-500" />
                    <span>{DOMAIN_PREFIX}</span>
                  </div>
                  <input
                    type="text"
                    value={longUrl}
                    onChange={(e) => {
                      setLongUrl(e.target.value);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    placeholder="Paste your long URL here..."
                    className="flex-1 bg-transparent border-none outline-none focus:ring-0 px-3 text-slate-800"
                  />
                </div>
                <Button
                  type="submit"
                  isDisabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-fuchsia-500/30 h-auto"
                >
                  {isLoading ? (
                    "Shortening..."
                  ) : (
                    <>
                      Shorten <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium px-2 animate-shake">
                  {errorMsg}
                </p>
              )}

              {/* Advanced Options Custom Tabs */}
              <div className="pt-2">
                <div className="flex items-center gap-6 border-b border-slate-200/50 mb-2">
                  <button
                    type="button"
                    onClick={() => setAdvancedTab("alias")}
                    className={`flex items-center gap-2 pb-2 text-sm font-medium border-b-2 transition-colors ${advancedTab === "alias" ? "border-fuchsia-500 text-fuchsia-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                  >
                    <LinkIcon className="w-4 h-4" /> Custom Alias
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdvancedTab("expiry")}
                    className={`flex items-center gap-2 pb-2 text-sm font-medium border-b-2 transition-colors ${advancedTab === "expiry" ? "border-fuchsia-500 text-fuchsia-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                  >
                    <Calendar className="w-4 h-4" /> Expiry Date
                  </button>
                </div>

                {advancedTab === "alias" && (
                  <div className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-inner mt-2 flex flex-col">
                    <label className="text-xs font-semibold text-slate-600 mb-1">
                      Custom Short Slug / Alias
                    </label>
                    <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white">
                      <span className="text-xs text-slate-400 font-mono pr-2 border-r border-slate-200">
                        cutit.in/
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. my-campaign-2026"
                        value={customAlias}
                        onChange={(e) =>
                          setCustomAlias(
                            e.target.value.replace(/[^a-zA-Z0-9_-]/g, "")
                          )
                        }
                        className="flex-1 bg-transparent border-none outline-none focus:ring-0 px-2 text-sm text-slate-800"
                      />
                    </div>
                  </div>
                )}

                {advancedTab === "expiry" && (
                  <div className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-inner mt-2 flex flex-col">
                    <label className="text-xs font-semibold text-slate-600 mb-1">
                      Link Expiration Date
                    </label>
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="border border-slate-200 rounded-lg px-3 py-2 bg-white text-sm outline-none focus:border-fuchsia-500"
                    />
                  </div>
                )}
              </div>
            </form>
          )}

          {/* BULK SHORTENING FORM */}
          {mode === "bulk" && (
            <form onSubmit={handleShortenBulk} className="space-y-3">
              <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/80 shadow-md flex flex-col">
                <label className="text-xs font-semibold text-slate-600 mb-1">
                  Paste Multiple Long URLs (One per line)
                </label>
                <textarea
                  placeholder={`https://example.com/promo-page-1\nhttps://example.com/promo-page-2`}
                  value={bulkUrlsText}
                  onChange={(e) => {
                    setBulkUrlsText(e.target.value);
                    if (errorMsg) setErrorMsg(null);
                  }}
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2 font-mono text-xs sm:text-sm outline-none focus:border-fuchsia-500"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium px-2">
                  {errorMsg}
                </p>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-semibold text-slate-500">
                  {bulkUrlsText.split("\n").filter((l) => l.trim()).length} URLs
                  detected
                </span>
                <Button
                  type="submit"
                  isDisabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-md shadow-fuchsia-500/30"
                >
                  {isLoading ? (
                    "Shortening..."
                  ) : (
                    <>
                      Bulk Shorten Links{" "}
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {mode === "single" && shortUrl && (
            <ResultCard
              link={shortUrl}
              alias={customAlias || undefined}
              expiryDate={expiryDate || undefined}
            />
          )}

          {mode === "bulk" && bulkResults && bulkResults.length > 0 && (
            <Card className="mt-4 bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
              <CardContent className="p-4 gap-3">
                <div className="flex items-center justify-between">
                  <Chip
                    color="accent"
                    variant="soft"
                    className="font-bold uppercase tracking-wider text-xs"
                  >
                    {bulkResults.length} Short Links Generated
                  </Chip>
                  <Button
                    size="sm"
                    className="bg-slate-900 text-white font-bold"
                    onPress={handleCopyBulkAll}
                  >
                    {copiedBulk ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 mr-1" />
                    )}
                    {copiedBulk ? "Copied All!" : "Copy All"}
                  </Button>
                </div>
                <div className="max-h-48 overflow-y-auto divide-y divide-slate-100 pr-1 text-xs mt-3">
                  {bulkResults.map((res, i) => (
                    <div
                      key={i}
                      className="py-2 flex items-center justify-between gap-2"
                    >
                      <span className="text-slate-500 font-mono text-[11px] truncate max-w-[200px] sm:max-w-[280px]">
                        {res.original}
                      </span>
                      <a
                        href={res.short}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-fuchsia-600 hover:underline shrink-0"
                      >
                        {res.short}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InputForm;
