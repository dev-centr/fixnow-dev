import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function getIssueValueScore(issueText: string) {
  if (!apiKey) return { score: 50, reasoning: "API key not configured" };
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Evaluate the software engineering value of the following issue/discussion. Provide a score from 0 to 100 where 100 is extremely high value (e.g., critical bug fix, massive performance gain, essential feature) and 0 is trivial. Also provide a one-sentence reasoning. Output JSON format: { "score": number, "reasoning": string }.
  
  Issue: ${issueText}`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonStr = response.text().replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Evaluation Error:", error);
    return { score: 0, reasoning: "Evaluation failed" };
  }
}

export async function evaluateResolution(issueComments: string[]) {
  if (!apiKey) return "unknown";
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Evaluate if this issue was properly resolved based on the comments. Categorize as: "ignored", "implemented", or "efficacy_alternate" (an efficacious alternate solution was found). Output just the category name.
  
  Comments:
  ${issueComments.join("\n---\n")}`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim().toLowerCase();
  } catch (error) {
    return "unknown";
  }
}
