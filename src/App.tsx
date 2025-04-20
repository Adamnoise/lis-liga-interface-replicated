
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import HeadToHead from "./pages/HeadToHead";
import Schedule from "./pages/Schedule";
import Tables from "./pages/Tables";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Overview /></Layout>} />
          <Route path="/h2h" element={<Layout><HeadToHead /></Layout>} />
          <Route path="/menetrend" element={<Layout><Schedule /></Layout>} />
          <Route path="/tabellak" element={<Layout><Tables /></Layout>} />
          <Route path="/csapatok" element={<Layout><Teams /></Layout>} />
          <Route path="/csapatok/:teamName" element={<Layout><TeamDetail /></Layout>} />
          <Route path="/archiv" element={<Layout><Archive /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
