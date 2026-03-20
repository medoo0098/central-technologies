import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function InquiryForm() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      requirements: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 md:p-12 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] rounded-lg border border-border/50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Your Name <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="bg-secondary/30 border-transparent focus:border-primary/20 focus:bg-white transition-all h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Email Address <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    {...field}
                    className="bg-secondary/30 border-transparent focus:border-primary/20 focus:bg-white transition-all h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Phone (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+44 7700 900000"
                    {...field}
                    value={field.value || ""}
                    className="bg-secondary/30 border-transparent focus:border-primary/20 focus:bg-white transition-all h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium uppercase tracking-wide text-muted-foreground">How Can We Help? <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please outline the household, principal, or issue involved, along with any timing, access, or coordination details."
                    {...field}
                    className="min-h-[160px] resize-none bg-secondary/30 border-transparent focus:border-primary/20 focus:bg-white transition-all text-base leading-relaxed p-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-14 text-base font-semibold tracking-wide uppercase bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Private Inquiry"
            )}
          </Button>

          <div className="text-center space-y-2 pt-2">
            <p className="text-xs text-muted-foreground">
              All enquiries are handled in strict confidence. Personal assistants and household representatives are welcome to enquire on behalf of a principal.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
