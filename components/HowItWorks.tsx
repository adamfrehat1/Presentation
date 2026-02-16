import { Upload, Brain, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Upload your file or paste content directly. We support PDF, Word, and text formats.",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Our AI analyzes and structures your content, identifying key points and creating a logical flow.",
  },
  {
    icon: Download,
    title: "Download",
    description: "Get your professional presentation ready to download in PowerPoint or PDF format.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three simple steps to create stunning presentations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-blue-900/20"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-4xl font-bold text-gray-200 dark:text-gray-800">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </CardContent>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-600/10 dark:to-purple-600/10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
