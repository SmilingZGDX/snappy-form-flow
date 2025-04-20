
import { FormLayout } from "@/components/layout/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const phoneRegex = /^\+?[0-9]{10,14}$/;

const formSchema = z.object({
  mobileNumber: z.string().regex(phoneRegex, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  preferredContact: z.string().min(1, "Please select a preferred mode of contact"),
});

export default function ContactDetails() {
  const [verificationSent, setVerificationSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNumber: "",
      email: "",
      preferredContact: "",
    },
  });

  const handleSendOtp = () => {
    // In a real app, we would send an OTP to the user's phone
    setVerificationSent(true);
  };

  const handleVerifyOtp = () => {
    // In a real app, we would verify the OTP
    setVerificationSent(false);
    setOtpCode("");
  };

  return (
    <FormLayout
      title="Contact Details"
      totalSteps={5}
      currentStep={4}
      nextPath="/address"
      previousPath="/proof-of-identity"
    >
      <Form {...form}>
        <form className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <div className="flex space-x-2">
                    <FormControl>
                      <Input placeholder="Enter mobile number" {...field} />
                    </FormControl>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleSendOtp}
                      disabled={!field.value || !phoneRegex.test(field.value)}
                    >
                      Verify
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {verificationSent && (
              <div className="space-y-2">
                <FormLabel>Enter OTP</FormLabel>
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="Enter verification code"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleVerifyOtp}
                    disabled={otpCode.length < 4}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            )}
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredContact"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Preferred Mode of Contact</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">Email</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="sms" />
                      </FormControl>
                      <FormLabel className="font-normal">SMS</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="call" />
                      </FormControl>
                      <FormLabel className="font-normal">Call</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="whatsapp" />
                      </FormControl>
                      <FormLabel className="font-normal">WhatsApp</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </FormLayout>
  );
}
