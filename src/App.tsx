import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Platform from "./pages/Platform";
import ForSMEs from "./pages/ForSMEs";
import ForFunders from "./pages/ForFunders";
import ForGovernments from "./pages/ForGovernments";
import RequestAccess from "./pages/RequestAccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/for-smes" element={<ForSMEs />} />
          <Route path="/for-funders" element={<ForFunders />} />
          <Route path="/for-governments" element={<ForGovernments />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/services" element={<Platform />} />
          <Route path="/work" element={<ForFunders />} />
          <Route path="/contact" element={<RequestAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
