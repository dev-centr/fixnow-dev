export default function DocsIndex() {
  return (
    <>
      <h1>Welcome to FixNow.dev Docs</h1>
      <p class="text-xl text-slate-400 font-medium mb-12">
        A high-impact, AI-powered issue tracking and public-pressure platform designed for high-value features.
      </p>

      <h2>What is FixNow?</h2>
      <p>
        Most issue trackers focus on project management. FixNow focuses on **public pressure** and **technical demand verification**. It allows developers and stakeholders to identify critical, "stagnated" issues and apply a live, public countdown to their resolution.
      </p>

      <div class="grid md:grid-cols-2 gap-6 my-12">
         <div class="glass-card !bg-white/5 border border-white/5 p-8 transition-colors hover:border-blue-500/30">
            <h3 class="text-white text-lg font-black mb-3">AI Valuator</h3>
            <p class="text-sm text-slate-400 leading-relaxed font-medium">
               Uses Gemini 1.5 Flash to assess issue descriptions for their true tech value and community importance.
            </p>
         </div>
         <div class="glass-card !bg-white/5 border border-white/5 p-8 transition-colors hover:border-emerald-500/30">
            <h3 class="text-white text-lg font-black mb-3">Dynamic Proxy</h3>
            <p class="text-sm text-slate-400 leading-relaxed font-medium">
               Real-time SVG image generation for live countdowns that can be embedded directly in GitHub READMEs.
            </p>
         </div>
      </div>

      <h2>How It Works</h2>
      <ol class="space-y-4 text-slate-300 font-medium">
         <li><strong>Search/Register</strong>: Paste any GitHub/GitLab issue or discussion URL.</li>
         <li><strong>AI Eval</strong>: Our Gemini engine scores the issue between 0-100 on the "Value Scale".</li>
         <li><strong>The Clock Starts</strong>: A public countdown is generated based on priority tier.</li>
         <li><strong>Resolution Audit</strong>: When closed, AI verifies if the "Resolution" is efficacious or ignored.</li>
      </ol>

      <blockquote class="bg-blue-500/10 border-l-4 border-blue-500 p-6 mt-12 rounded-r-2xl italic font-medium">
         "Our goal is not to shame maintainers, but to ensure that high-value feedback gets the eyes and urgency it deserves in an increasingly noisy developer landscape."
      </blockquote>
    </>
  );
}
