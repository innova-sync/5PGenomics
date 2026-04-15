import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";

// Product pages
import AlcoholManagement from "./pages/products/AlcoholManagement.tsx";
import CBRNe from "./pages/products/CBRNe.tsx";
import Forest from "./pages/products/Forest.tsx";
import Healthcare from "./pages/products/Healthcare.tsx";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product pages */}
          <Route path="/products/alcohol-management" element={<AlcoholManagement />} />
          <Route path="/products/cbrne" element={<CBRNe />} />
          <Route path="/products/forest" element={<Forest />} />
          <Route path="/products/healthcare" element={<Healthcare />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;