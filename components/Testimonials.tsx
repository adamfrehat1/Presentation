"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "PrezoAI has revolutionized how we create presentations. What used to take hours now takes minutes. The AI understands context beautifully.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechCorp",
    avatar: "SJ",
  },
  {
    quote: "As a consultant, I create dozens of presentations weekly. PrezoAI saves me countless hours and the results are consistently professional.",
    name: "Michael Chen",
    title: "Senior Consultant",
    company: "Acme Consulting",
    avatar: "MC",
  },
  {
    quote: "The template quality and AI intelligence are outstanding. Our team's productivity has increased by 40% since we started using PrezoAI.",
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "InnovateCo",
    avatar: "ER",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of satisfied professionals
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-6 h-12 w-12 text-blue-600 dark:text-blue-400" />
              
              <blockquote className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300 md:text-2xl">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white">
                    {current.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {current.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {current.title}, {current.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-blue-600 dark:bg-blue-400"
                        : "w-2 bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
