import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Code2, Database, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "QNX6Parser",
    description:
      "QNX6 Filesystem Parser built with Python and Qt for parsing, analyzing, and extracting data from QNX6 disk images.",
    icon: Cpu,
    tech: ["Python", "Qt"],
  },
  {
    title: "PDM (Phone Database Manager)",
    description:
      "WPF application for managing phone databases with table visualization, plugin support, and forensic analysis tools.",
    icon: Database,
    tech: ["C#", "WPF", ".NET"],
  },
  {
    title: "StockTracker",
    description:
      "Full-stack web application built with React + ASP.NET Core for tracking and visualizing stock data in real time.",
    icon: Globe,
    tech: ["React", "TypeScript", "ASP.NET", "SQL Server"],
  },
  {
    title: "QNX6FSRebuilder",
    description:
      "WinUI3-based forensic tool for rebuilding QNX6 filesystem structures, parsing inodes, and exporting recovered files.",
    icon: Code2,
    tech: ["C#", "WinUI3", ".NET"],
  },
  {
    title: "Cultivator",
    description:
      "WinUI3 ingest-module architecture that dynamically loads and executes forensic plugins for modular evidence parsing.",
    icon: Code2,
    tech: ["C#", "WinUI3", "MVVM"],
  },
  {
    title: "CalorieIntakeTracker",
    description:
      "React + ASP.NET Core app with AI food recognition using OpenAI Vision API to scan meals and log nutritional data.",
    icon: Globe,
    tech: ["React", "TypeScript", "ASP.NET", "OpenAI API"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Featured <span className="text-[#c93c46]">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent full-stack and forensic applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="group hover:border-[#c93c46] transition-all duration-300 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#c93c46]/10 flex items-center justify-center mb-4 group-hover:bg-[#c93c46]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#c93c46]" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
