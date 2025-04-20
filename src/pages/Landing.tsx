
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-secondary/50 to-secondary p-4 text-center">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Customer Registration Portal
        </h1>
        <p className="text-xl text-muted-foreground">
          Welcome to our streamlined customer registration system.
          Start your journey with just a few simple steps.
        </p>
        <Button 
          size="lg" 
          onClick={() => navigate('/customer-details')}
          className="mt-8 px-8 py-6 text-lg group"
        >
          Start Customer Registration
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
