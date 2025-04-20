
import { FormLayout } from "@/components/layout/FormLayout";

export default function CustomerDetails() {
  return (
    <FormLayout
      title="Customer Details"
      totalSteps={5}
      currentStep={1}
      nextPath="/customer-name"
      previousPath="/"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-medium">Let's begin with your basic information</h2>
          <p className="text-muted-foreground mt-2">
            We'll guide you through each step of the registration process.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <ArrowRight className="h-10 w-10 text-primary" />
          </div>
          <p className="text-center max-w-md">
            Please click the Next button to continue with your registration. 
            You'll need to provide personal information, identification documents, 
            contact details, and your address.
          </p>
        </div>
      </div>
    </FormLayout>
  );
}

import { ArrowRight } from "lucide-react";
