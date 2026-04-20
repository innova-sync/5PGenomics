import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Solution from "./pages/Solution.tsx";

// Product pages
import ResearchDesign from "./pages/products/ResearchDesign.tsx";
import MolecularBiology from "./pages/products/MolecularBiology.tsx";
import MolecularDiagnostic from "./pages/products/MolecularDiagnostic.tsx";
import NextGeneration from "./pages/products/NextGeneration.tsx";
import GeneticTesting from "./pages/products/GeneticTesting.tsx";
import NiptKit from "./pages/products/NiptKit.tsx";
import MomGuard from "./pages/products/MomGuard.tsx";

import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solution" element={<Solution />} />

          {/* Product pages */}
          <Route path="/products/researchdesign"     element={<ResearchDesign />} />
          <Route path="/products/molecularbiology"   element={<MolecularBiology />} />
          <Route path="/products/moleculardiagnostic" element={<MolecularDiagnostic />} />
          <Route path="/products/nextgeneration"     element={<NextGeneration />} />
          <Route path="/products/genetictesting"     element={<GeneticTesting />} />
          <Route path="/products/momguard"     element={<MomGuard />} />
          <Route path="/products/niptkit"     element={<NiptKit />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;