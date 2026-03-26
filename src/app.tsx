import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import CountdownTimer from "~/components/CountdownTimer";
import AdBanner from "~/components/AdBanner";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <CountdownTimer targetDate={new Date("2026-05-01T00:00:00Z")} title="Critical Fix Requested: GitHub Step Caching" />
          <AdBanner />
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
