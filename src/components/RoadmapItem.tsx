import { LucideIcon } from "lucide-react";

interface RoadmapItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export const RoadmapItem = ({ 
  icon: Icon, 
  title, 
  description, 
  isCompleted = false 
}: RoadmapItemProps) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center group cursor-pointer">
      <div 
        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 ${
          isCompleted
            ? "bg-gradient-neon border-neon-blue shadow-glow-soft"
            : "bg-card border-border group-hover:border-neon-blue/50 group-hover:shadow-glow-soft"
        }`}
      >
        <Icon 
          className={`w-8 h-8 transition-colors duration-300 ${
            isCompleted 
              ? "text-primary-foreground" 
              : "text-muted-foreground group-hover:text-neon-blue"
          }`} 
        />
      </div>
      
      <div className="text-center max-w-24">
        <h4 className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
          isCompleted 
            ? "text-neon-blue" 
            : "text-foreground group-hover:text-neon-blue"
        }`}>
          {title}
        </h4>
        <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};