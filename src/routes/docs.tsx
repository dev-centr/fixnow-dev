import { A, useLocation } from "@solidjs/router";
import { Book, Code, Rocket, ShieldCheck, ExternalLink, Sparkles, ChevronRight } from "lucide-solid";
import { createSignal, For } from "solid-js";

export default function DocsLayout(props: { children: any }) {
  const location = useLocation();
  const menuItems = [
    { name: "Introduction", path: "/docs", icon: Book },
    { name: "Getting Started", path: "/docs/getting-started", icon: Rocket },
    { name: "AI Evaluation", path: "/docs/ai-eval", icon: Sparkles },
    { name: "API Reference", path: "/docs/api", icon: Code },
    { name: "Security & Verification", path: "/docs/security", icon: ShieldCheck },
  ];

  const active = (path: string) => 
    location.pathname === path ? "bg-blue-500/10 text-blue-400 border-l-2 border-blue-500" : "text-slate-400 hover:text-slate-200 hover:bg-white/5";

  return (
    <div class="min-h-screen pt-24 pb-12 bg-slate-950">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside class="lg:w-72 shrink-0">
          <div class="sticky top-28 space-y-2">
            <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest pl-4 mb-6">Documentation</h3>
            <nav class="space-y-1">
              <For each={menuItems}>{(item) => (
                <A href={item.path} class={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${active(item.path)}`}>
                  <item.icon size={18} />
                  {item.name}
                </A>
              )}</For>
            </nav>

            <div class="mt-8 p-6 glass-card border border-blue-500/20 bg-blue-500/5">
               <div class="text-xs font-bold text-blue-400 mb-2 flex items-center gap-2">
                  <Sparkles size={14} /> NEW
               </div>
               <p class="text-[11px] text-slate-400 leading-relaxed mb-4 font-medium">
                  We've upgraded our AI to Gemini 1.5 Flash for faster initial assessments.
               </p>
               <a href="https://aistudio.google.com" class="text-[11px] font-bold text-white flex items-center gap-1 hover:underline">
                  AI Methodology <ChevronRight size={12} />
               </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main class="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl">
           <article class="prose prose-invert prose-slate max-w-none prose-headings:font-black prose-h1:text-4xl prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-blue-400 prose-h1:to-emerald-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl">
              {props.children}
           </article>
        </main>
      </div>
    </div>
  );
}
