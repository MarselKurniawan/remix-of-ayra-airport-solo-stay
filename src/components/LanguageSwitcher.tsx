import { useState } from "react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const langs: { code: Lang; label: string; flag: string; native: string }[] = [
  { code: "id", label: "Indonesia", native: "Bahasa", flag: "🇮🇩" },
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", native: "中文", flag: "🇨🇳" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const active = langs.find((l) => l.code === lang) ?? langs[0];

  return (
    <div className="fixed bottom-5 right-5 z-[60] font-body">
      {open && (
        <div className="mb-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[180px] animate-fade-in">
          <div className="px-4 py-2 border-b border-border">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              Language
            </p>
          </div>
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
                l.code === lang && "bg-muted"
              )}
            >
              <span className="text-xl leading-none">{l.flag}</span>
              <span className="flex-1 text-left text-foreground">{l.native}</span>
              {l.code === lang && <Check size={14} className="text-primary" />}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-primary text-primary-foreground pl-3 pr-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all"
        aria-label="Change language"
      >
        <Languages size={16} />
        <span className="text-lg leading-none">{active.flag}</span>
        <span className="text-xs font-semibold uppercase tracking-wider">{active.code}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
