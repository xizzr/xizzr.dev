import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Map, User } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Projects", icon: Home },
    { path: "/roadmap", label: "Roadmap", icon: Map },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center flex-1">
            <span className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              xizzr.dev
            </span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link key={path} to={path}>
                  <Button
                    variant={isActive ? "neon" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isActive 
                        ? "text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};