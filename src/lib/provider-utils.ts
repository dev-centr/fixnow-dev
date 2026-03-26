import { Search, Filter, TrendingUp, Globe, ExternalLink, Sparkles, Code } from "lucide-solid";
export interface IssueMetadata {
  provider: "github" | "gitlab" | "bitbucket";
  owner: string;
  repo: string;
  number: string;
  title: string;
  description: string;
  comments: number;
  upvotes: number;
}

export function parseIssueUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("github.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[2] === "issues" || parts[2] === "pull") {
        return {
          provider: "github" as const,
          owner: parts[0],
          repo: parts[1],
          number: parts[3],
        };
      }
    }
    // Add GitLab/Bitbucket later...
    return null;
  } catch {
    return null;
  }
}

export async function fetchGithubIssue(owner: string, repo: string, number: string): Promise<IssueMetadata | null> {
  const token = (globalThis as any).process?.env?.GITHUB_TOKEN;
  const headers = token ? { Authorization: `token ${token}` } : {};
  
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${number}`, { 
      headers: headers as Record<string, string> 
    });
    const data = await res.json();
    
    return {
      provider: "github",
      owner,
      repo,
      number,
      title: data.title,
      description: data.body,
      comments: data.comments,
      upvotes: data.reactions?.["+1"] || 0,
    };
  } catch (e) {
    console.error("Github Fetch Error:", e);
    return null;
  }
}
