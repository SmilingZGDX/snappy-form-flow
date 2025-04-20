import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerName from "./pages/CustomerName";
import ProofOfIdentity from "./pages/ProofOfIdentity";
import ContactDetails from "./pages/ContactDetails";
import Address from "./pages/Address";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Registration Flow */}
          <Route path="/" element={<Landing />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/customer-name" element={<CustomerName />} />
          <Route path="/proof-of-identity" element={<ProofOfIdentity />} />
          <Route path="/contact-details" element={<ContactDetails />} />
          <Route path="/address" element={<Address />} />

          {/* Admin Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
