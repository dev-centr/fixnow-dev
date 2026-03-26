import { A, useLocation } from "@solidjs/router";
import { Search, Clock, Rocket, Code, LogIn } from "lucide-solid";
import { createSignal, onMount } from "solid-js";

export default function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = createSignal(false);

  onMount(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const active = (path: string) =>
    path === location.pathname ? "text-blue-400" : "text-slate-400 hover:text-white";

  return (
    <nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled() ? "glass py-2" : "bg-transparent py-4"}`}>
      <div class="container mx-auto px-6 flex items-center justify-between">
        <A href="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            <Clock class="w-6 h-6 text-white" />
          </div>
          <span class="text-2xl font-black tracking-tighter">
            FIX<span class="text-blue-500">NOW</span><span class="text-slate-500 font-light">.DEV</span>
          </span>
        </A>

        <div class="hidden md:flex items-center gap-8 font-medium">
          <A href="/browse" class={`transition-colors flex items-center gap-2 ${active("/browse")}`}>
            <Search size={18} /> Browse
          </A>
          <A href="/metrics" class={`transition-colors flex items-center gap-2 ${active("/metrics")}`}>
            <Rocket size={18} /> High Tech Value
          </A>
          <div class="flex items-center gap-4 border-l border-white/10 pl-8">
            <A href="/login" class="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <LogIn size={18} /> Sign In
            </A>
            <A href="/register" class="btn-primary text-sm !px-5 !py-2 flex items-center gap-2">
              <Code size={16} /> Register Issue
            </A>
          </div>
        </div>
      </div>
    </nav>
  );
}
