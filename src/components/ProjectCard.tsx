import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Star, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  languages: string[];
  description: string;
  difficulty: number;
  onViewProject: () => void;
}

const DifficultyIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`w-1.5 h-4 rounded-sm transition-all duration-300 ${
            i < level
              ? "bg-gradient-neon shadow-glow-soft"
              : "bg-muted/30"
          }`}
        />
      ))}
    </div>
  );
};

export const ProjectCard = ({ 
  title, 
  languages, 
  description, 
  difficulty, 
  onViewProject 
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-glow-soft">
      <div className="p-6 h-full flex flex-col">
        {/* Main Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-neon-blue transition-colors duration-300 mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-neon-cyan" />
            <div className="flex flex-wrap gap-1">
              {languages.map((lang, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Always Visible Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-neon-cyan" />
                <span className="text-xs text-muted-foreground">Difficulty</span>
              </div>
              <DifficultyIndicator level={difficulty} />
            </div>

            {/* Hover-only Button */}
            <Button 
              variant="project" 
              size="sm"
              onClick={onViewProject}
              className="w-full"
            >
              <Star className="w-4 h-4" />
              View Project
            </Button>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Card>
  );
};