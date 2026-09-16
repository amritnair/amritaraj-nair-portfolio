import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

// Keeps three.js, drei and rapier out of the initial bundle. This matters
// more now than it did: the landing page is the written portfolio, so most
// visitors never load the world at all.
const GamePortfolio = lazy(() => import("./pages/GamePortfolio"));

const queryClient = new QueryClient();

const Booting = () => (
  <div className="flex h-[100dvh] items-center justify-center bg-[#160f34] font-mono text-xs uppercase tracking-[0.3em] text-[#9d8bff]">
    Loading world…
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Use hash routing to avoid GitHub Pages 404/refresh issues */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/play"
              element={
                <Suspense fallback={<Booting />}>
                  <GamePortfolio />
                </Suspense>
              }
            />
            {/* The portfolio used to live here; keep old links working. */}
            <Route path="/projects" element={<Navigate to="/" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
