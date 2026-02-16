"use client";

import { Button } from "@/components/ui/button";
import { Download, FileText, Loader2 } from "lucide-react";

interface ExportButtonsProps {
  isGenerating: boolean;
  onGenerate: () => void;
  hasContent: boolean;
}

export function ExportButtons({ isGenerating, onGenerate, hasContent }: ExportButtonsProps) {
  return (
    <div className="space-y-4">
      <Button
        size="lg"
        onClick={onGenerate}
        disabled={!hasContent || isGenerating}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-lg hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <span>✨</span>
            <span className="ml-2">Generate Presentation</span>
          </>
        )}
      </Button>

      {hasContent && (
        <div className="space-y-2">
          <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
            Export Options
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              PowerPoint
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
