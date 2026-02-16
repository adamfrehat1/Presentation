"use client";

import { Presentation } from "lucide-react";

interface LivePreviewProps {
  hasContent: boolean;
}

export function LivePreview({ hasContent }: LivePreviewProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Live Preview</h3>
      <div className="relative overflow-hidden rounded-lg border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900" style={{ aspectRatio: "16/9" }}>
        {hasContent ? (
          <div className="flex h-full flex-col p-8">
            {/* Mock Slide Content */}
            <div className="mb-6 border-b pb-4">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Market Analysis Overview
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Q4 2024 Report</p>
            </div>
            
            <div className="grid flex-1 grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Key Findings
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>Revenue increased by 35% year-over-year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>Customer satisfaction reached 92%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>Expanded to 12 new markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                    <span>Launched 5 innovative products</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-4 dark:from-blue-950/20 dark:to-purple-950/20">
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-blue-600 dark:text-blue-400">
                    35%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Growth Rate
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto text-xs text-gray-400 dark:text-gray-600">
              Slide 1 of 8
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <Presentation className="mb-4 h-16 w-16 text-gray-300 dark:text-gray-700" />
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
              Your preview will appear here
            </p>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
              Upload a file or paste content to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
