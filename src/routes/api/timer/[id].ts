import { APIEvent } from "@solidjs/start/server";
import { formatDistanceToNow, isBefore } from "date-fns";

const mockIssueDate = new Date("2026-05-01T00:00:00Z");

export async function GET({ params }: APIEvent) {
  const idValue = params.id;
  const now = new Date();
  const past = isBefore(mockIssueDate, now);
  const color = past ? "#EF4444" : "#10B981";
  const text = past ? "EXPIRED" : formatDistanceToNow(mockIssueDate, { addSuffix: true });

  const body = `
    <svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1E3A8A;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="100" rx="15" fill="url(#grad)" />
      <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="white" font-weight="bold">FIXNOW.DEV DEADLINE</text>
      <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="${color}" font-weight="extrabold">${text.toUpperCase()}</text>
    </svg>
  `;

  return new Response(body.trim(), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
