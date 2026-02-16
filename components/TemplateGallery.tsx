import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    name: "Business Pro",
    description: "Clean and professional for corporate presentations",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Creative Bold",
    description: "Vibrant and eye-catching for creative projects",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    name: "Minimal Elegance",
    description: "Sophisticated minimalist design",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    name: "Tech Futuristic",
    description: "Modern tech-focused design",
    gradient: "from-cyan-600 to-blue-600",
  },
];

export function TemplateGallery() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Template Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose from our collection of professional templates
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-blue-900/20"
            >
              <div
                className={`h-48 bg-gradient-to-br ${template.gradient} transition-transform group-hover:scale-105`}
              >
                <div className="flex h-full items-center justify-center p-6 text-white">
                  <div className="text-center">
                    <div className="mb-2 h-16 w-16 mx-auto rounded-lg border-4 border-white/30" />
                    <div className="space-y-1">
                      <div className="h-2 w-24 mx-auto rounded bg-white/30" />
                      <div className="h-2 w-16 mx-auto rounded bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {template.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            More Templates Coming Soon 🚀
          </Badge>
        </div>
      </div>
    </section>
  );
}
