import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    languages: ["React", "Node.js", "MongoDB"],
    description: "A full-stack e-commerce platform with user authentication, payment processing, and real-time inventory management.",
    difficulty: 4,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    languages: ["JavaScript", "API", "CSS"],
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
    difficulty: 2,
  },
  {
    id: 3,
    title: "Task Management App",
    languages: ["React", "TypeScript", "Supabase"],
    description: "Collaborative task management application with real-time updates, team features, and advanced filtering options.",
    difficulty: 3,
  },
  {
    id: 4,
    title: "Portfolio Website",
    languages: ["Next.js", "Tailwind", "Framer"],
    description: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
    difficulty: 2,
  },
  {
    id: 5,
    title: "AI Chat Bot",
    languages: ["Python", "OpenAI", "Flask"],
    description: "Intelligent chatbot powered by AI with natural language processing and context-aware conversations.",
    difficulty: 5,
  },
  {
    id: 6,
    title: "Expense Tracker",
    languages: ["Vue.js", "Firebase", "Chart.js"],
    description: "Personal finance tracker with expense categorization, budget planning, and insightful analytics.",
    difficulty: 3,
  },
];

export const Homepage = () => {
  const { toast } = useToast();

  const handleViewProject = (projectId: number) => {
    toast({
      title: "Project Viewer",
      description: `Opening project ${projectId} - This would navigate to the project details!`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <main className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-fade-in leading-tight">
              Welcome!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed">
              Backend developer with two years of experience
            </p>
          </div>

          <div className="mb-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-card backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-neon p-1 shadow-glow-soft">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src="pfp"
                          alt="Profile"
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
                      xizzr
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Passionate backend developer with expertise in modern web technologies. 
                      I create elegant solutions to complex problems and building 
                      user-centric applications.
                    </p>
                    
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker",  "C#", ".Net", "DBs"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 border border-border/30 rounded-full text-sm text-secondary-foreground hover:bg-secondary/80 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-neon bg-clip-text text-transparent">
              Featured Projects
            </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProjects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProjectCard
                  title={project.title}
                  languages={project.languages}
                  description={project.description}
                  difficulty={project.difficulty}
                  onViewProject={() => handleViewProject(project.id)}
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};