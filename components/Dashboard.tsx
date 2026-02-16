"use client";

import { useState, useEffect } from "react";
import { UploadArea } from "@/components/UploadArea";
import { LivePreview } from "@/components/LivePreview";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ExportButtons } from "@/components/ExportButtons";
import { ProgressIndicator } from "@/components/ProgressIndicator";

export function Dashboard() {
  const [hasContent, setHasContent] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<Array<{ label: string; status: "pending" | "active" | "complete" }>>([
    { label: "Analyzing content...", status: "pending" },
    { label: "Generating slides...", status: "pending" },
    { label: "Finalizing...", status: "pending" },
  ]);

  const handleFileSelect = () => {
    setHasContent(true);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Reset steps
    setSteps([
      { label: "Analyzing content...", status: "active" },
      { label: "Generating slides...", status: "pending" },
      { label: "Finalizing...", status: "pending" },
    ]);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setSteps([
            { label: "Analyzing content...", status: "complete" },
            { label: "Generating slides...", status: "complete" },
            { label: "Finalizing...", status: "complete" },
          ]);
          return 100;
        }
        
        // Update steps based on progress
        const newProgress = prev + 2;
        if (newProgress >= 33 && newProgress < 66) {
          setSteps([
            { label: "Analyzing content...", status: "complete" },
            { label: "Generating slides...", status: "active" },
            { label: "Finalizing...", status: "pending" },
          ]);
        } else if (newProgress >= 66) {
          setSteps([
            { label: "Analyzing content...", status: "complete" },
            { label: "Generating slides...", status: "complete" },
            { label: "Finalizing...", status: "active" },
          ]);
        }
        
        return newProgress;
      });
    }, 100);
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Your AI Workspace
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Upload your content and watch the magic happen
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Left Column: Upload and Actions */}
          <div className="space-y-6 lg:col-span-1">
            <UploadArea onFileSelect={handleFileSelect} />
            <ExportButtons
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
              hasContent={hasContent}
            />
            {isGenerating && <ProgressIndicator steps={steps} progress={progress} />}
          </div>

          {/* Middle Column: Live Preview */}
          <div className="lg:col-span-1">
            <LivePreview hasContent={hasContent} />
          </div>

          {/* Right Column: Chat Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 h-[600px]">
              <ChatSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
