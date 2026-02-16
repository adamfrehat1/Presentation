"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

interface ProgressStep {
  label: string;
  status: "pending" | "active" | "complete";
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  progress: number;
}

export function ProgressIndicator({ steps, progress }: ProgressIndicatorProps) {
  return (
    <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm dark:border-gray-700">
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">Generating...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            {step.status === "complete" ? (
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            ) : step.status === "active" ? (
              <Loader2 className="h-5 w-5 animate-spin text-blue-600 dark:text-blue-400" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
            )}
            <span
              className={`text-sm ${
                step.status === "complete"
                  ? "text-green-600 dark:text-green-400"
                  : step.status === "active"
                  ? "font-medium text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
