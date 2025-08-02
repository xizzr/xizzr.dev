import { Navigation } from "@/components/Navigation";
import { RoadmapItem } from "@/components/RoadmapItem";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Zap, 
  Palette, 
  Shield,
  Cloud,
  Cpu
} from "lucide-react";

const roadmapItems = [
  {
    icon: Code2,
    title: "HTML/CSS",
    description: "Web Fundamentals",
    isCompleted: true
  },
  {
    icon: Zap,
    title: "JavaScript",
    description: "Dynamic Programming",
    isCompleted: true
  },
  {
    icon: Globe,
    title: "React",
    description: "Frontend Library",
    isCompleted: true
  },
  {
    icon: Database,
    title: "Node.js",
    description: "Backend Runtime",
    isCompleted: true
  },
  {
    icon: Database,
    title: "Databases",
    description: "Data Management",
    isCompleted: false
  },
  {
    icon: Cloud,
    title: "AWS/Cloud",
    description: "Cloud Services",
    isCompleted: false
  },
  {
    icon: Smartphone,
    title: "Mobile Dev",
    description: "Cross-platform",
    isCompleted: false
  },
  {
    icon: Brain,
    title: "AI/ML",
    description: "Machine Learning",
    isCompleted: false
  },
  {
    icon: Palette,
    title: "UI/UX",
    description: "Design Systems",
    isCompleted: false
  },
  {
    icon: Shield,
    title: "Security",
    description: "Cybersecurity",
    isCompleted: false
  },
  {
    icon: Cpu,
    title: "DevOps",
    description: "Deployment",
    isCompleted: false
  }
];

export const Roadmap = () => {
  const { toast } = useToast();

  const handleBump = () => {
    toast({
      title: "Bump!",
      description: "Progress updated! Keep pushing forward on your learning journey.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden">
      <Navigation />
      
      <main className="pt-24 pb-96 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 px-4 relative z-50">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-fade-in leading-[1.2] pb-2">
              Learning Roadmap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed">
              Track your progress through the development learning journey
            </p>
          </div>

          {/* Roadmap Container */}
          <div className="mb-12">
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/50 hover:scrollbar-thumb-border">
                <div className="flex gap-12 px-8 min-w-max">
                  {roadmapItems.map((item, index) => (
                    <div
                      key={index}
                      className="opacity-0 animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <RoadmapItem
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        isCompleted={item.isCompleted}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bump Button */}
          <div className="text-center">
            <Button
              variant="bump"
              size="xl"
              onClick={handleBump}
              className="animate-float"
            >
              <Zap className="w-6 h-6 mr-2" />
              Bump!
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Update your progress and celebrate achievements
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};