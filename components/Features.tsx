import { Sparkles, FileText, Palette, Zap, Target, Save, Globe, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Analysis",
    description: "Advanced AI understands your content and creates a logical, engaging flow.",
  },
  {
    icon: FileText,
    title: "Multiple File Format Support",
    description: "Upload PDF, Word documents, or plain text files seamlessly.",
  },
  {
    icon: Palette,
    title: "Professional Templates",
    description: "Choose from a variety of professionally designed presentation templates.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Generate complete presentations in seconds, not hours.",
  },
  {
    icon: Target,
    title: "Customizable Designs",
    description: "Fine-tune colors, fonts, and layouts to match your brand.",
  },
  {
    icon: Save,
    title: "Export to PowerPoint/PDF",
    description: "Download in your preferred format, ready to present.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Coming soon: Create presentations in multiple languages.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Editing",
    description: "Make changes on the fly with our interactive editor.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to create amazing presentations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-blue-900/20"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
