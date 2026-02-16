"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface UploadAreaProps {
  onFileSelect: () => void;
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [content, setContent] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    onFileSelect();
  };

  const handleFileInput = () => {
    onFileSelect();
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-all",
          isDragging
            ? "border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/20"
            : "border-gray-300 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-600"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleFileInput}
      >
        <Upload
          className={cn(
            "mb-4 h-12 w-12 transition-colors",
            isDragging
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-400 group-hover:text-blue-500 dark:text-gray-600"
          )}
        />
        <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
          Drag & drop your file here
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          or click to browse
        </p>
        <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
          <FileText className="h-4 w-4" />
          <span>Supported formats: PDF, DOCX, TXT</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-gray-500 dark:text-gray-400">
          OR
        </div>
        <Textarea
          placeholder="Paste your content here..."
          className="min-h-[150px] resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}
