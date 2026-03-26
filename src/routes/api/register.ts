import { APIEvent } from "@solidjs/start/server";
import { parseIssueUrl, fetchGithubIssue } from "~/lib/provider-utils";
import { getIssueValueScore } from "~/lib/gemini";

export async function POST({ request }: APIEvent) {
  const { url, dueDate } = await request.json();
  const parsed = parseIssueUrl(url);
  
  if (!parsed || parsed.provider !== "github") {
    return new Response(JSON.stringify({ error: "Only GitHub currently supported" }), { status: 400 });
  }
  
  const metadata = await fetchGithubIssue(parsed.owner, parsed.repo, parsed.number);
  
  if (!metadata) {
    return new Response(JSON.stringify({ error: "Issue not found" }), { status: 404 });
  }
  
  const evaluation = await getIssueValueScore(metadata.description);
  const result = {
    ...metadata,
    dueDate,
    aiScore: evaluation.score,
    aiReasoning: evaluation.reasoning,
    registeredAt: new Date().toISOString()
  };
  
  // Here we would save to database...
  console.log("Registered Issue:", result);
  
  return new Response(JSON.stringify(result));
}
