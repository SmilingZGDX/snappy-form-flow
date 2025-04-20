
import { Stepper } from "@/components/ui/stepper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface FormLayoutProps {
  children: ReactNode;
  title: string;
  totalSteps: number;
  currentStep: number;
  nextPath?: string;
  previousPath?: string;
  isLastStep?: boolean;
  onSubmit?: () => void;
}

export function FormLayout({
  children,
  title,
  totalSteps,
  currentStep,
  nextPath,
  previousPath,
  isLastStep = false,
  onSubmit,
}: FormLayoutProps) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (isLastStep && onSubmit) {
      onSubmit();
      return;
    }
    if (nextPath) {
      navigate(nextPath);
    }
  };

  const handlePrevious = () => {
    if (previousPath) {
      navigate(previousPath);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-secondary/30">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-semibold text-center">{title}</CardTitle>
          <div className="pt-4">
            <Stepper steps={totalSteps} currentStep={currentStep} />
          </div>
        </CardHeader>
        <CardContent className="pt-6">{children}</CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!previousPath}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
