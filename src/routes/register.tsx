import { createSignal, Show } from "solid-js";
import { Search, Sparkles, Rocket, Clock, ShieldCheck, ArrowRight, Loader2 } from "lucide-solid";

export default function Register() {
  const [url, setUrl] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [result, setResult] = createSignal<any>(null);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ url: url(), dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <main class="min-h-screen pt-32 pb-20 px-6 bg-slate-950">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-black mb-4">Register an <span class="gradient-text">Ignored Demand</span></h1>
          <p class="text-slate-400 text-lg">Paste a GitHub or GitLab issue URL. Our AI will assess its tech value and put maintainers on notice.</p>
        </div>

        <div class="glass p-8 rounded-3xl border border-white/10 mb-20 shadow-2xl relative overflow-hidden group">
          <div class="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative space-y-8">
            <div class="space-y-3">
              <label class="text-sm font-black uppercase text-slate-500 tracking-widest pl-2">Issue / Discussion URL</label>
              <div class="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="e.g., https://github.com/actions/runner/issues/123" 
                  class="input-glass !text-xl !py-4"
                  value={url()}
                  onInput={e => setUrl(e.currentTarget.value)}
                />
                <button 
                  onClick={handleRegister} 
                  disabled={loading() || !url()}
                  class="btn-primary flex items-center gap-2 pr-8 pl-6 !h-[64px] disabled:opacity-50 disabled:cursor-not-allowed group-hover:scale-105 active:scale-95 transition-all"
                >
                  {loading() ? <Loader2 class="animate-spin" size={24} /> : <><Rocket size={24} /> Assess & Register</>}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Show when={result()}>
          <div class="glass rounded-3xl p-8 border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-5 duration-500">
             <div class="flex items-center gap-6 mb-10 pb-10 border-b border-white/10">
                <div class="w-24 h-24 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 text-blue-400 font-extrabold text-4xl">
                   {result().aiScore}
                </div>
                <div class="space-y-1">
                   <div class="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
                     <Sparkles size={14} /> AI Value Score Generated
                   </div>
                   <h2 class="text-2xl font-bold">{result().title}</h2>
                   <p class="text-slate-400 font-medium">By {result().owner}/{result().repo}</p>
                </div>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-6">
                   <h3 class="font-black uppercase text-xs text-slate-500 tracking-widest">AI Assessment Detail</h3>
                   <p class="text-slate-200 text-lg italic leading-relaxed">
                     "{result().aiReasoning}"
                   </p>
                   <div class="flex gap-4">
                      <div class="glass px-4 py-2 rounded-lg border-white/5 flex items-center gap-2">
                         <ShieldCheck size={16} class="text-emerald-400" />
                         <span class="text-xs font-bold uppercase tracking-widest">Verified Target</span>
                      </div>
                      <div class="glass px-4 py-2 rounded-lg border-white/5 flex items-center gap-2">
                         <Clock size={16} class="text-blue-400" />
                         <span class="text-xs font-bold uppercase tracking-widest">Timer Started</span>
                      </div>
                   </div>
                </div>

                <div class="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                   <h3 class="font-black uppercase text-xs text-slate-500 tracking-widest">Countdown Logic</h3>
                   <div class="space-y-4">
                      <div class="flex justify-between items-center text-sm font-medium">
                         <span class="text-slate-400">Default Resolution Window:</span>
                         <span>30 Days</span>
                      </div>
                      <div class="flex justify-between items-center text-sm font-medium">
                         <span class="text-slate-400">Escalation Tier:</span>
                         <span class="text-amber-400">Public Pressure</span>
                      </div>
                      <div class="flex justify-between items-center text-sm font-medium">
                         <span class="text-slate-400">Followers Subscribed:</span>
                         <span class="text-emerald-400 font-black">1 (You)</span>
                      </div>
                   </div>
                   <button class="w-full btn-primary !bg-emerald-600 hover:!bg-emerald-500 !py-2.5 mt-4">
                      Share to GitHub/GitLab Comments
                   </button>
                </div>
             </div>
          </div>
        </Show>
      </div>
    </main>
  );
}
