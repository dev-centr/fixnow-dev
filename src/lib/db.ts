import { createSignal } from "solid-js";

export interface RegisteredIssue {
  id: string;
  provider: string;
  owner: string;
  repo: string;
  number: string;
  title: string;
  aiScore: number;
  aiReasoning: string;
  dueDate: string;
  status: string; // open, implemented, ignored, alternate
  comments: number;
  upvotes: number;
}

const [issues, setIssues] = createSignal<RegisteredIssue[]>([
  {
    id: "1",
    provider: "github",
    owner: "actions",
    repo: "toolkit",
    number: "827",
    title: "Step-level result caching in GitHub Actions",
    aiScore: 98,
    aiReasoning: "Massive productivity gain for incremental builds.",
    dueDate: "2026-05-01T00:00:00Z",
    status: "open",
    comments: 45,
    upvotes: 120
  }
]);

export function useIssues() {
  return {
    issues,
    addIssue: (issue: RegisteredIssue) => setIssues([...issues(), issue]),
    updateStatus: (id: string, status: string) => 
      setIssues(issues().map(i => i.id === id ? { ...i, status } : i)),
  };
}
