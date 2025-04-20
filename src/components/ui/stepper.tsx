
import * as React from "react";
import { cn } from "@/lib/utils";

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: number;
  currentStep: number;
}

export function Stepper({
  steps,
  currentStep,
  className,
  ...props
}: StepperProps) {
  return (
    <div className={cn("flex w-full justify-between", className)} {...props}>
      {Array.from({ length: steps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2",
              i + 1 <= currentStep
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted bg-background text-muted-foreground"
            )}
          >
            {i + 1}
          </div>
          {i < steps - 1 && (
            <div
              className={cn(
                "h-0.5 w-full min-w-[2rem] flex-1",
                i + 1 < currentStep
                  ? "bg-primary"
                  : i + 1 === currentStep
                  ? "bg-gradient-to-r from-primary to-muted"
                  : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
