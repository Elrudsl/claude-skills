import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
  };

  return (
    <section id="projekt" className="bg-offwhite py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Projekt"
          title="Projekt vi är stolta över"
          description="Ett urval av arbeten som visar bredden i vad vi tar oss an — från enskilda rum till hela byggnader."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px] lg:gap-5">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 3) * 60}
              className={cn(
                "aspect-[4/3] lg:aspect-auto",
                project.size === "tall" && "lg:row-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                className="group relative block h-full w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-graphite-950/15 to-transparent transition-opacity duration-300 ease-out group-hover:from-graphite-950/90" />

                {project.isSample && (
                  <span className="absolute right-4 top-4 border border-offwhite/40 bg-graphite-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-offwhite backdrop-blur-sm">
                    Exempel
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-sand-light">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-offwhite sm:text-2xl">
                    {project.title.replace(/^Exempelprojekt\s*—\s*/, "")}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0">
          {activeProject && <ProjectModal project={activeProject} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
