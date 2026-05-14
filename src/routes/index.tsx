import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import maxIcon from "@/assets/max-icon.png";
import heroImage from "@/assets/hero-leprechaun.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Best Betting — Прогнозы в MAX" },
      { name: "description", content: "Забирай эксклюзивные прогнозы Best Betting прямо в мессенджере MAX." },
    ],
  }),
});

const MAX_URL = "https://max.ru/join/WMsJnwlqrlgqky51AibDEYBofLUS7zsT_jvxUuuHZmY";

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <img
        src={heroImage}
        alt="Best Betting"
        width={1280}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 select-none"
      />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-10">
        <a
          href={MAX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display group relative inline-flex items-center justify-center gap-3 rounded-full bg-cta-gradient px-8 py-5 text-lg uppercase tracking-wider text-white shadow-xl animate-pulse-glow transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.99] sm:px-12 sm:py-6 sm:text-xl"
        >
          <span>Забрать прогнозы в</span>
          <img
            src={maxIcon}
            alt="MAX"
            width={32}
            height={32}
            className="h-7 w-7 rounded-[24%] sm:h-8 sm:w-8"
          />
          <span>MAX</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
        </a>
      </div>
    </main>
  );
}
