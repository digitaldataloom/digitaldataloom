"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Check, ChevronLeft, ChevronRight, Send, MapPin, User, ClipboardList, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// Schema definitions for each step
const formSchema = z.object({
  // Step 1
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  // Step 2
  services: z.array(z.string()).min(1, "Please select at least one service"),
  // Step 3
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  addressPreference: z.enum(["full", "zip"]).default("zip"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  contactPreference: z.array(z.string()).default([]),
  // Step 4
  specialNeeds: z.string().optional(),
  referredFrom: z.string().min(1, "Please tell us how you heard about us"),
})

type FormData = z.infer<typeof formSchema>

const steps = [
  { id: 1, name: "ZIP CODE", icon: MapPin },
  { id: 2, name: "SERVICES", icon: ClipboardList },
  { id: 3, name: "CONTACT INFO", icon: Info },
  { id: 4, name: "SUBMIT", icon: Send },
]

const servicesOptions = [
  "PEST CONTROL",
  "MOSQUITO CONTROL",
  "TERMITE CONTROL",
  "FIRE-ANT PREVENTION",
  "FLEA AND TICK CONTROL",
  "RODENT CONTROL",
]

const hearAboutUsOptions = [
  "GOOGLE",
  "FACEBOOK",
  "A WEB SEARCH",
  "A SALESMAN",
  "A FRIEND",
  "NONE OF THESE",
]

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: "",
      services: [],
      firstName: "",
      lastName: "",
      addressPreference: "zip",
      email: "",
      phone: "",
      contactPreference: ["I don't have a preference"],
      specialNeeds: "",
      referredFrom: "",
    },
  })

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []
    if (currentStep === 1) fieldsToValidate = ['zipCode']
    if (currentStep === 2) fieldsToValidate = ['services']
    if (currentStep === 3) fieldsToValidate = ['firstName', 'lastName', 'email', 'phone']
    
    const isValid = await form.trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
      // Tracking event
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "quote_step_view",
          step_number: currentStep + 1,
          step_name: steps[currentStep].name
        })
      }
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("Form Data Submitted:", data)
    
    // Tracking event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "quote_submission",
          form_data: {
            zip_code: data.zipCode,
            services: data.services.join(','),
            address_preference: data.addressPreference,
            contact_preferences: data.contactPreference.join(','),
            referred_from: data.referredFrom
          }
        })
    }

    toast.success("Quote request sent! We'll contact you soon.")
    setIsSubmitting(false)
    
    // Reset the form and return to step 1
    form.reset()
    setCurrentStep(1)
  }

  const progressValue = (currentStep / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get a Free Quote
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto font-medium">
            Take the first step towards a pest-free home. Fast, reliable, and personalized to your needs.
          </p>
        </div>

        {/* Form Container */}
        <Card className="bg-neutral-900 border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <CardContent className="p-0">
            {/* Steps Navigation */}
            <div className="border-b border-neutral-800 bg-black/40 p-4 md:p-8">
               <div className="flex justify-between items-center mb-6 overflow-x-auto no-scrollbar gap-4">
                {steps.map((step) => {
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  
                  return (
                    <div key={step.id} className="flex flex-col items-center min-w-[70px] flex-1">
                      <div className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 mb-2 border-2",
                        isActive ? "bg-emerald-500 border-emerald-500 text-black scale-110 shadow-[0_0_20px_rgba(16,185,129,0.4)]" : 
                        isCompleted ? "bg-black border-emerald-500 text-emerald-500" : 
                        "bg-neutral-800 border-neutral-700 text-neutral-500"
                      )}>
                        {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : <span className="text-sm font-black">{step.id}</span>}
                      </div>
                      <span className={cn(
                        "text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-colors duration-300",
                        isActive ? "text-emerald-400" : "text-neutral-500"
                      )}>
                        {step.name}
                      </span>
                    </div>
                  )
                })}
              </div>
              <Progress value={progressValue} className="h-1 bg-neutral-800" />
            </div>

            <div className="p-6 md:p-14">
              <p className="text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-10 flex items-center gap-1">
                <span className="text-emerald-500">*</span> indicates required fields
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <AnimatePresence mode="wait">
                  {/* STEP 1: ZIP CODE */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight max-w-2xl">
                        First, let's make sure you're in our service area!
                      </h2>
                      <div className="space-y-4">
                        <Label htmlFor="zipCode" className="text-xs font-black uppercase tracking-widest text-neutral-400">
                          What's your zip code?
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                          <Input
                            id="zipCode"
                            placeholder="ZIP CODE"
                            autoFocus
                            className="h-16 pl-14 bg-black border-neutral-700 text-xl font-bold tracking-widest focus:border-emerald-500 focus:ring-emerald-500/10 placeholder:text-neutral-700"
                            {...form.register('zipCode')}
                          />
                        </div>
                        {form.formState.errors.zipCode && (
                          <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{form.formState.errors.zipCode.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: SERVICES */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                        How can we help you?
                      </h2>
                      <p className="text-xs font-black uppercase tracking-widest text-neutral-400">I am interested in...</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicesOptions.map((service) => (
                           <label
                            key={service}
                            className={cn(
                              "relative flex items-center justify-between p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 group",
                              form.watch('services').includes(service)
                                ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                : "bg-black border-neutral-800 hover:border-neutral-600"
                            )}
                          >
                            <span className={cn(
                              "font-black text-xs tracking-widest",
                              form.watch('services').includes(service) ? "text-emerald-400" : "text-neutral-400"
                            )}>
                              {service}
                            </span>
                            <div className={cn(
                              "w-6 h-6 rounded border-2 flex items-center justify-center transition-all",
                              form.watch('services').includes(service) ? "bg-emerald-500 border-emerald-500" : "border-neutral-700 bg-neutral-900 group-hover:border-neutral-500"
                            )}>
                              {form.watch('services').includes(service) && <Check className="w-3.5 h-3.5 text-black stroke-[4]" />}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              value={service}
                              checked={form.watch('services').includes(service)}
                              onChange={(e) => {
                                const val = form.getValues('services')
                                if (e.target.checked) {
                                  form.setValue('services', [...val, service])
                                } else {
                                  form.setValue('services', val.filter(s => s !== service))
                                }
                              }}
                            />
                          </label>
                        ))}
                      </div>
                      {form.formState.errors.services && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{form.formState.errors.services.message}</p>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT INFO */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Introduce Yourself!</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-500">First Name</Label>
                            <Input placeholder="FIRST" className="h-14 bg-black border-neutral-700 font-bold uppercase" {...form.register('firstName')} />
                          </div>
                          <div className="space-y-3">
                            <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-500">Last Name</Label>
                            <Input placeholder="LAST" className="h-14 bg-black border-neutral-700 font-bold uppercase" {...form.register('lastName')} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-xs font-black uppercase tracking-widest text-neutral-400">To help with the quote, here's...</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: 'full', label: 'MY FULL ADDRESS' },
                            { id: 'zip', label: 'JUST MY ZIP CODE FOR NOW' }
                          ].map((opt) => (
                            <label
                              key={opt.id}
                              className={cn(
                                "flex items-center justify-between p-6 rounded-xl border-2 cursor-pointer transition-all duration-300",
                                form.watch('addressPreference') === opt.id
                                  ? "bg-emerald-500 border-emerald-500"
                                  : "bg-black border-neutral-800 hover:border-neutral-700"
                              )}
                            >
                              <span className={cn("font-black text-[11px] tracking-widest uppercase", form.watch('addressPreference') === opt.id ? "text-black" : "text-neutral-400")}>
                                {opt.label}
                              </span>
                              <div className={cn(
                                "w-6 h-6 rounded border-2 flex items-center justify-center transition-all",
                                form.watch('addressPreference') === opt.id ? "bg-white border-white" : "border-neutral-700 bg-neutral-900"
                              )}>
                                {form.watch('addressPreference') === opt.id && <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[4]" />}
                              </div>
                              <input type="radio" className="hidden" value={opt.id} checked={form.watch('addressPreference') === opt.id} onChange={() => form.setValue('addressPreference', opt.id as any)} />
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-8 pt-8 border-t border-neutral-800">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">How do we get ahold of you?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-500">Email Address</Label>
                            <Input placeholder="HELLO@ME.COM" className="h-14 bg-black border-neutral-700" {...form.register('email')} />
                          </div>
                          <div className="space-y-3">
                            <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-500">Phone Number</Label>
                            <Input placeholder="123-456-7890" className="h-14 bg-black border-neutral-700" {...form.register('phone')} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Do you have a preference for how we send you the information?</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {["I don't have a preference", "Email me with the info", "Call me with the info", "Text me with the info"].map((pref) => (
                            <label
                              key={pref}
                              className={cn(
                                "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all duration-300",
                                form.watch('contactPreference').includes(pref) ? "bg-emerald-500 border-emerald-500" : "bg-black border-neutral-800 hover:border-neutral-700"
                              )}
                            >
                              <span className={cn("font-black text-[10px] tracking-widest uppercase", form.watch('contactPreference').includes(pref) ? "text-black" : "text-neutral-500")}>
                                {pref}
                              </span>
                              <div className={cn(
                                "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                                form.watch('contactPreference').includes(pref) ? "bg-white border-white" : "border-neutral-700 bg-neutral-900"
                              )}>
                                {form.watch('contactPreference').includes(pref) && <Check className="w-3 h-3 text-emerald-600 stroke-[5]" />}
                              </div>
                              <input
                                type="checkbox"
                                className="hidden"
                                value={pref}
                                checked={form.watch('contactPreference').includes(pref)}
                                onChange={(e) => {
                                  const val = form.watch('contactPreference')
                                  if (e.target.checked) form.setValue('contactPreference', [...val, pref])
                                  else form.setValue('contactPreference', val.filter(v => v !== pref))
                                }}
                              />
                            </label>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: SUBMIT */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded text-[10px] font-black uppercase tracking-[0.2em] mb-2">Final Step</div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Two Quick Questions</h2>
                        
                        <div className="space-y-4">
                          <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-400 leading-relaxed">
                            Is there anything specific to your needs that we need to be aware of?
                          </Label>
                          <div className="relative">
                             <Textarea 
                                placeholder="I HAVE A GARDEN BY MY FENCE... I HAVE 2 DOGS INSIDE... I HAVE ANTS IN MY KITCHEN... ETC..."
                                className="min-h-[160px] bg-black border-neutral-700 focus:border-emerald-500 text-sm leading-relaxed p-6"
                                {...form.register('specialNeeds')}
                            />
                             <div className="absolute bottom-4 right-4 text-[10px] font-black text-neutral-700 uppercase tracking-widest">Optional</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-5 border-t border-neutral-800">
                        <Label className="uppercase text-[10px] font-black tracking-widest text-neutral-400 leading-relaxed">
                          How did you hear about us?
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {hearAboutUsOptions.map((opt) => (
                            <label
                              key={opt}
                              className={cn(
                                "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all duration-300",
                                form.watch('referredFrom') === opt ? "bg-emerald-500 border-emerald-500" : "bg-black border-neutral-800 hover:border-neutral-700"
                              )}
                            >
                              <span className={cn("font-black text-[10px] tracking-widest uppercase", form.watch('referredFrom') === opt ? "text-black" : "text-neutral-500")}>
                                {opt}
                              </span>
                              <div className={cn(
                                "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                                form.watch('referredFrom') === opt ? "bg-white border-white" : "border-neutral-700 bg-neutral-900"
                              )}>
                                {form.watch('referredFrom') === opt && <Check className="w-3 h-3 text-emerald-600 stroke-[5]" />}
                              </div>
                              <input type="radio" className="hidden" name="referred" value={opt} checked={form.watch('referredFrom') === opt} onChange={() => form.setValue('referredFrom', opt)} />
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Mock Recaptcha */}
                      <div className="bg-black/50 border border-neutral-800 rounded-xl p-5 flex items-center justify-between max-w-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg border-2 border-emerald-500/30 flex items-center justify-center bg-emerald-500/5">
                            <Check className="w-4 h-4 text-emerald-500" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-neutral-300 uppercase tracking-widest">I'm not a robot</p>
                            <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">Security Verified</p>
                          </div>
                        </div>
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 opacity-20 grayscale invert" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-neutral-800">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="px-10 h-16 bg-neutral-800 hover:bg-neutral-700 border-neutral-700 font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                  
                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 h-16 bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-[0.4em] text-xs shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4 ml-2 stroke-[3]" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-16 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 hover:via-emerald-500 text-black font-black uppercase tracking-[0.4em] text-xs shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] disabled:opacity-50 transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      {isSubmitting ? "Generating Quote..." : "Get My Quote"}
                      <Send className="w-4 h-4 ml-2 fill-current" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}
