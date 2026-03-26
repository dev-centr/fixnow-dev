import { createSignal, For, onMount, createEffect } from "solid-js";
import { Search, Filter, TrendingUp, Globe, ExternalLink, Sparkles, Code } from "lucide-solid";

export default function Browse() {
  const [search, setSearch] = createSignal("");
  const [filter, setFilter] = createSignal("all");

  const issues = [
    { id: "1", title: "GitHub Actions Step Caching", owner: "actions", repo: "toolkit", score: 98, provider: "github", category: "performance" },
    { id: "2", title: "Native ARM support for D", owner: "dlang", repo: "dmd", score: 92, provider: "github", category: "platform" },
    { id: "3", title: "Shared memory leakage fix", owner: "kubernetes", repo: "kubernetes", score: 89, provider: "github", category: "security" },
    { id: "4", title: "GitLab Runner autoscaling bug", owner: "gitlab-org", repo: "gitlab-runner", score: 85, provider: "gitlab", category: "infrastructure" },
  ];

  const filteredIssues = () => {
    let list = issues;
    if (search()) {
      list = list.filter(i => 
        i.title.toLowerCase().includes(search().toLowerCase()) || 
        i.owner.toLowerCase().includes(search().toLowerCase()) ||
        i.repo.toLowerCase().includes(search().toLowerCase())
      );
    }
    if (filter() !== "all") {
       list = list.filter(i => i.provider === filter());
    }
    return list.sort((a, b) => b.score - a.score);
  };

  return (
    <main class="min-h-screen pt-32 pb-20 px-6 bg-slate-950">
       <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 class="text-4xl font-black mb-2 flex items-center gap-3">
                Browse <span class="text-blue-500">Global Demands</span>
              </h1>
              <p class="text-slate-500">Browse the highest value items being tracked by the community.</p>
            </div>
            
            <div class="flex items-center gap-4 w-full md:w-auto">
               <div class="relative flex-1 md:w-64">
                 <Search class="absolute left-3 top-3 text-slate-500" size={18} />
                 <input 
                    type="text" 
                    placeholder="Filter org/repo..." 
                    class="input-glass !pl-10 !py-2.5" 
                    value={search()}
                    onInput={e => setSearch(e.currentTarget.value)}
                 />
               </div>
               <select 
                 class="input-glass !py-2.5 !w-auto cursor-pointer"
                 onInput={e => setFilter(e.currentTarget.value)}
                >
                  <option value="all">Any Provider</option>
                  <option value="github">GitHub</option>
                  <option value="gitlab">GitLab</option>
                  <option value="bitbucket">Bitbucket</option>
               </select>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4">
             <For each={filteredIssues()}>{(issue) => (
                <div class="glass-card hover:bg-white/5 border border-white/5 flex flex-col md:flex-row md:items-center gap-6 group">
                   <div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Code size={32} class="text-white" />
                   </div>
                   
                   <div class="flex-1">
                      <div class="flex items-center gap-2 mb-1">
                         <span class="text-[10px] font-black uppercase text-blue-500 tracking-widest">{issue.provider}</span>
                         <span class="text-slate-600">/</span>
                         <span class="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                           {issue.owner}/{issue.repo}
                         </span>
                      </div>
                      <h3 class="text-xl font-bold group-hover:text-blue-400 transition-colors">{issue.title}</h3>
                   </div>

                   <div class="flex items-center gap-12 shrink-0">
                      <div class="text-right">
                         <div class="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-1">AI Value</div>
                         <div class="flex items-center gap-2 text-blue-400 font-extrabold text-2xl">
                           <Sparkles size={16} /> {issue.score}
                         </div>
                      </div>
                      
                      <button class="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                         <ExternalLink size={20} />
                      </button>
                   </div>
                </div>
             )}</For>
          </div>
       </div>
    </main>
  );
}
