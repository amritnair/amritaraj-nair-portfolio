import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import AllProjects from "./pages/AllProjects";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

// Keeps three.js, drei and rapier out of the initial bundle — the text pages
// load instantly, the world streams in behind its own loading screen.
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
            <Route
              path="/"
              element={
                <Suspense fallback={<Booting />}>
                  <GamePortfolio />
                </Suspense>
              }
            />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
