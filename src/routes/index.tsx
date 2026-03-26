import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import { Search, Sparkles, TrendingUp, Clock, Code, ArrowRight, ShieldCheck } from "lucide-solid";

export default function Home() {
  const [search, setSearch] = createSignal("");

  const highValueIssues = [
    {
      id: "1",
      title: "Step-level result caching in GitHub Actions",
      repo: "github/roadmap",
      score: 98,
      provider: "github",
      value: "$1.2M+ Productivity",
      daysLeft: 4,
    },
    {
      id: "2",
      title: "Native ARM support for D backend",
      repo: "dlang/dmd",
      score: 92,
      provider: "github",
      value: "Critical Arch Support",
      daysLeft: 12,
    },
    {
      id: "3",
      title: "Fix shared memory leakage in Kubernetes",
      repo: "kubernetes/kubernetes",
      score: 89,
      provider: "github",
      value: "Security & Stability",
      daysLeft: -2,
    }
  ];

  return (
    <main class="min-h-screen pt-32 pb-20 px-6 bg-slate-950 overflow-hidden relative">
      {/* Background Orbs */}
      <div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[100px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-violet-600/10 blur-[100px] rounded-full"></div>

      <section class="max-w-5xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold tracking-widest text-blue-400 mb-8 float">
          <Sparkles size={14} /> AI-POWERED ISSUE TRACKING
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8">
          Stop waiting. <br />
          <span class="gradient-text">Demand Resolution.</span>
        </h1>
        
        <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          FixNow monitors the high-value software issues that projects ignore. We put them on the clock and ensure maintainers know the stakes.
        </p>

        {/* Hero Search */}
        <div class="max-w-2xl mx-auto relative group mb-20">
          <div class="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative flex items-center gap-3 glass p-2 rounded-2xl border border-white/20 focus-within:border-blue-500/50 shadow-2xl">
            <Search class="text-slate-500 ml-4 shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="Search repo, org, or issue URL (github, gitlab...)" 
              class="flex-1 bg-transparent border-none outline-none py-4 text-lg text-white font-medium"
              value={search()}
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
            <button class="btn-primary flex items-center gap-2 pr-6 pl-4">
              Fix it Now <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Issue Feed Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <For each={highValueIssues}>{(issue) => (
            <div class="glass-card flex flex-col h-full">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2 text-xs font-BOLD uppercase text-slate-500 tracking-tighter">
                  <span class="p-1 px-2 glass rounded border-white/10 flex items-center gap-1">
                    <Code size={12} /> {issue.provider}</span>
                  <span>/</span>
                  <span class="text-slate-300">{issue.repo}</span>
                </div>
                <div class={`text-sm font-black ${issue.daysLeft < 0 ? "text-red-400" : "text-emerald-400"}`}>
                  <Clock size={16} class="inline mr-1" />
                  {issue.daysLeft < 0 ? "EXPIRED" : `${issue.daysLeft}d left`}
                </div>
              </div>
              
              <h3 class="text-xl font-bold leading-tight mb-4 flex-1">
                {issue.title}
              </h3>

              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center gap-2">
                  <div class="relative w-12 h-12 flex items-center justify-center">
                     <svg class="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="text-white/5"></circle>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" 
                          stroke-dasharray="125.6" 
                          stroke-dashoffset={125.6 * (1 - issue.score/100)}
                          class="text-blue-500"></circle>
                     </svg>
                     <span class="text-xs font-black">{issue.score}</span>
                  </div>
                  <div class="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none">
                    Value Score
                  </div>
                </div>
                
                <A href={`/issue/${issue.id}`} class="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white text-white hover:text-slate-900 transition-all">
                  <ArrowRight size={20} />
                </A>
              </div>
            </div>
          )}</For>
        </div>
      </section>

      {/* Proof Section */}
      <section class="max-w-6xl mx-auto mt-40">
        <div class="glass rounded-3xl p-12 overflow-hidden relative">
          <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <h2 class="text-4xl font-black mb-6">AI-First Resolution Monitoring</h2>
              <p class="text-slate-400 mb-8">
                Our AI monitors issue conversations to ensure they aren't just closed, but actually resolved. If a developer provides an alternate solution, we evaluate its efficacy.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center gap-3 text-emerald-400 font-bold">
                  <ShieldCheck size={20} /> Resolution Verification
                </li>
                <li class="flex items-center gap-3 text-emerald-400 font-bold">
                   <TrendingUp size={20} /> Multi-Provider Support (GitHub, GitLab, Bitbucket)
                </li>
                <li class="flex items-center gap-3 text-emerald-400 font-bold">
                   <Clock size={20} /> Automatic Countdown Escalation
                </li>
              </ul>
            </div>
            <div class="w-full md:w-[400px] aspect-video glass rounded-xl border border-white/20 p-2 overflow-hidden shadow-2xl relative">
              <div class="absolute top-2 left-2 flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div class="bg-slate-900 h-full w-full rounded-lg pt-8 px-4 font-mono text-xs text-blue-400 space-y-2 overflow-hidden">
                <div class="flex gap-2"><span>$</span> <span>Evaluating resolution for issue #827...</span></div>
                <div class="flex gap-2 text-white"><span>$</span> <span>Running Gemini Flash Assessment...</span></div>
                <div class="flex gap-2 text-emerald-400"><span>[OK]</span> <span>Category: IMPLEMENTED_EFFICACIOUS</span></div>
                <div class="flex gap-2 text-slate-500"><span>[OK]</span> <span>Resolved in commit: 82d1c...</span></div>
                <div class="flex gap-2 text-white"><span>$</span> <span>Decrementing global "Technical Debt" index...</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
