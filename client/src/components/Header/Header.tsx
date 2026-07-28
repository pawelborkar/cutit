import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@heroui/react";

interface HeaderProps {
  onNavigate?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full px-2 sm:px-6 py-4 flex items-center justify-between">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => onNavigate?.("home")}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-pink-500/25">
          <Sparkles className="w-5 h-5" />
        </div>
        <p className="text-2xl font-black tracking-tight text-slate-900">
          cutit<span className="text-fuchsia-600">.in</span>
        </p>
      </div>

      <nav className="hidden md:flex items-center gap-8 justify-center">
        <a
          href="#features"
          className="text-sm font-medium hover:text-fuchsia-600 transition-colors text-slate-700"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.("features");
          }}
        >
          Features
        </a>
        <a
          href="#analytics"
          className="text-sm font-medium hover:text-fuchsia-600 transition-colors text-slate-700"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.("analytics");
          }}
        >
          Analytics
        </a>
        <a
          href="#pricing"
          className="text-sm font-medium hover:text-fuchsia-600 transition-colors text-slate-700"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.("pricing");
          }}
        >
          Pricing
        </a>
        <a
          href="#my-links"
          className="text-sm font-medium hover:text-fuchsia-600 transition-colors text-slate-700"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.("my-links");
          }}
        >
          My Links
        </a>
      </nav>

      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-fuchsia-500/30 px-5 rounded-full">
          Sign Up Free
        </Button>
      </div>
    </header>
  );
};

export default Header;
