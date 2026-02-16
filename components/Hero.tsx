"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById("dashboard");
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-20 md:py-32">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 h-72 w-72 animate-pulse rounded-full bg-purple-300 opacity-20 blur-3xl dark:bg-purple-600"></div>
        <div className="absolute top-20 right-10 h-72 w-72 animate-pulse rounded-full bg-blue-300 opacity-20 blur-3xl animation-delay-2000 dark:bg-blue-600"></div>
        <div className="absolute -bottom-8 left-20 h-72 w-72 animate-pulse rounded-full bg-pink-300 opacity-20 blur-3xl animation-delay-4000 dark:bg-pink-600"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
            Transform Your Ideas into{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stunning Presentations
            </span>{" "}
            with AI
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Upload your content and let our AI create professional, polished presentations in seconds. 
            No design skills required.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={scrollToDashboard}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-lg hover:from-blue-700 hover:to-purple-700"
            >
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Professional Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Export Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
