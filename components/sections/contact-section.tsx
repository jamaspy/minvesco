"use client";

import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investmentAmount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          investmentAmount: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 h-64 w-64 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 h-48 w-48 bg-eucalyptus-500 rounded-full blur-3xl" />
      </div>

      <div className="flex container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Our investment specialists are ready to discuss tailored
                  opportunities that align with your portfolio objectives and
                  risk tolerance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gold-500/20 rounded-lg">
                    <Phone className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-slate-300">+61 2 9XXX XXXX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gold-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-slate-300">info@minvesco.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gold-500/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-slate-300">
                      Level XX, Collins Street
                      <br />
                      Melbourne, VIC 3000
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-3">
                  Investment Minimums
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Gold & Precious Metals: $250,000</li>
                  <li>• Lithium & Battery Minerals: $500,000</li>
                  <li>• Iron Ore & Base Metals: $1,000,000</li>
                </ul>
              </div>
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">
                      Investment Inquiry
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Fill out the form below and our team will get back to you
                      within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="name"
                            placeholder="Full Name *"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-gold-400"
                          />
                        </div>
                        <div>
                          <Input
                            name="email"
                            type="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-gold-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="company"
                            placeholder="Company (Optional)"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-gold-400"
                          />
                        </div>
                        <div>
                          <select
                            name="investmentAmount"
                            value={formData.investmentAmount}
                            onChange={handleInputChange}
                            className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
                          >
                            <option value="" className="text-slate-900">
                              Investment Range
                            </option>
                            <option
                              value="$250K - $500K"
                              className="text-slate-900"
                            >
                              $250K - $500K
                            </option>
                            <option
                              value="$500K - $1M"
                              className="text-slate-900"
                            >
                              $500K - $1M
                            </option>
                            <option
                              value="$1M - $5M"
                              className="text-slate-900"
                            >
                              $1M - $5M
                            </option>
                            <option value="$5M+" className="text-slate-900">
                              $5M+
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your investment goals and interests... *"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-gold-400 resize-none"
                        />
                      </div>

                      {submitStatus === "success" && (
                        <div className="flex items-center space-x-2 text-eucalyptus-400 bg-eucalyptus-500/10 p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm">
                            Message sent successfully! We&apos;ll be in touch
                            soon.
                          </span>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg">
                          <AlertCircle className="h-5 w-5" />
                          <span className="text-sm">
                            Failed to send message. Please try again.
                          </span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-6 text-lg disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-400 text-center">
                        By submitting this form, you agree to be contacted by
                        our investment team regarding mining investment
                        opportunities.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex-1 h-full rounded-lg overflow-hidden relative">
            <Image src="/steel.jpg" alt="Coal" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
