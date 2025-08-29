import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service pages
import DataAnalyticsPage from "./pages/services/DataAnalytics";
import WebSolutionsPage from "./pages/services/WebSolutions";
import AIIntegrationPage from "./pages/services/AIIntegration";

// Portfolio project pages
import BeOptEnergyModelingPage from "./pages/portfolio/BeOptEnergyModeling";
import EasyAiResumePage from "./pages/portfolio/EasyAiResume";
import FrontFlatsPhiladelphiaPage from "./pages/portfolio/FrontFlatsPhiladelphia";
import BeachCitiesFlowAnalysisPage from "./pages/portfolio/BeachCitiesFlowAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Service detail pages */}
          <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/services/web-solutions" element={<WebSolutionsPage />} />
          <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
          
          {/* Portfolio project pages */}
          <Route path="/portfolio/beopt-energy-modeling" element={<BeOptEnergyModelingPage />} />
          <Route path="/portfolio/easyairesume" element={<EasyAiResumePage />} />
          <Route path="/portfolio/front-flats-philadelphia" element={<FrontFlatsPhiladelphiaPage />} />
          <Route path="/portfolio/beach-cities-flow-analysis" element={<BeachCitiesFlowAnalysisPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
