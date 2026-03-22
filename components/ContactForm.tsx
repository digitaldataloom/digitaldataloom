"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this to your API
    console.log("Form submitted with values:", values)
    
    // Push event to dataLayer for tracking
    if (typeof window !== "undefined") {
      const gtmDataLayer = (window as any).dataLayer || [];
      gtmDataLayer.push({
        event: "contact_form_submit",
        form_id: "contact_form",
        form_name: "Contact Form",
        user_data: {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phoneNumber,
        },
        message_length: values.message.length,
        timestamp: new Date().toISOString()
      });
    }

    toast.success("Thank you! Your message has been sent successfully.")
    form.reset()
  }

  return (
    <section className="min-h-screen py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-cta/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[800px] px-4 lg:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground-bright lg:text-5xl mb-4 tracking-tight">
            Get in <span className="text-accent-cta">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? 
            Fill out the form below and I{"'"}ll get back to you within 24 hours.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background-secondary/50 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground-bright">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John" 
                          {...field} 
                          className="bg-background border-border/50 focus:border-accent-blue/50 focus:ring-accent-blue/20 transition-all h-12" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground-bright">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Doe" 
                          {...field} 
                          className="bg-background border-border/50 focus:border-accent-blue/50 focus:ring-accent-blue/20 transition-all h-12" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground-bright">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email" 
                          {...field} 
                          className="bg-background border-border/50 focus:border-accent-blue/50 focus:ring-accent-blue/20 transition-all h-12" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground-bright">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 (555) 000-0000" 
                          type="tel" 
                          {...field} 
                          className="bg-background border-border/50 focus:border-accent-blue/50 focus:ring-accent-blue/20 transition-all h-12" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground-bright">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Type your message here..." 
                        className="min-h-[160px] bg-background border-border/50 focus:border-accent-blue/50 focus:ring-accent-blue/20 transition-all resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-accent-cta text-foreground-bright hover:bg-accent-cta/90 h-14 text-lg font-bold transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(var(--accent-cta),0.3)] shadow-lg"
                >
                  Send Message
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Privacy Policy applies. Your data is never shared with third parties.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
