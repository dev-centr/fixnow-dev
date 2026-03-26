import { createSignal, onMount } from "solid-js";

export default function AdBanner() {
  const [show, setShow] = createSignal(true);

  return (
    <div class="w-full py-4 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm overflow-hidden hidden md:block">
      <div class="container mx-auto px-6 flex items-center justify-between gap-12">
        <div class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] shrink-0 border border-slate-700 px-2 py-0.5 rounded">
          Promoted
        </div>
        
        <div class="flex-1 flex items-center justify-around gap-8">
           <a href="#" class="group flex items-center gap-4 hover:opacity-80 transition-opacity motion-safe:hover:scale-[1.02] transform-gpu">
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-lg flex items-center justify-center font-black italic text-white shadow-lg">UV</div>
              <div>
                 <div class="text-xs font-bold text-white tracking-tight leading-none mb-1 text-nowrap">Faster Builds with UV</div>
                 <div class="text-[10px] text-slate-400 font-medium">Native Python Package Management</div>
              </div>
           </a>

           <div class="w-px h-6 bg-white/5"></div>

           <a href="#" class="group flex items-center gap-4 hover:opacity-80 transition-opacity motion-safe:hover:scale-[1.02] transform-gpu">
              <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-700 rounded-lg flex items-center justify-center font-black italic text-white shadow-lg">AI</div>
              <div>
                 <div class="text-xs font-bold text-white tracking-tight leading-none mb-1 text-nowrap">Gemini Flash 1.5</div>
                 <div class="text-[10px] text-slate-400 font-medium">Sub-second Latency for Developers</div>
              </div>
           </a>

           <div class="w-px h-6 bg-white/5"></div>

           <a href="#" class="group flex items-center gap-4 hover:opacity-80 transition-opacity motion-safe:hover:scale-[1.02] transform-gpu">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-700 rounded-lg flex items-center justify-center font-black italic text-white shadow-lg">NL</div>
              <div>
                 <div class="text-xs font-bold text-white tracking-tight leading-none mb-1 text-nowrap">Deploy instantly on Netlify</div>
                 <div class="text-[10px] text-slate-400 font-medium">Infinite Scale for SolidStart</div>
              </div>
           </a>
        </div>

        <button 
          onClick={() => setShow(false)} 
          class="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest pl-8"
        >
          Remove Ads
        </button>
      </div>
    </div>
  );
}
