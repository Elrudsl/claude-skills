import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
}

export function ProjectModal({ project }: ProjectModalProps) {
  const displayTitle = project.title.replace(/^Exempelprojekt\s*—\s*/, "");

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto scroll-smooth" style={{ scrollSnapType: "x mandatory" }}>
        {project.gallery.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`${displayTitle} — bild ${i + 1}`}
            className="h-64 w-[85%] shrink-0 object-cover sm:h-80"
            style={{ scrollSnapAlign: "start" }}
          />
        ))}
      </div>

      <div className="p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-sand-dark">
            {project.type}
          </p>
          {project.isSample && (
            <span className="border border-graphite/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-graphite-500">
              Exempel
            </span>
          )}
        </div>

        <DialogTitle className="mt-3">{displayTitle}</DialogTitle>
        <DialogDescription className="mt-4 text-base leading-relaxed">
          {project.description}
        </DialogDescription>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-graphite/10 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium uppercase tracking-widest text-graphite-400">
              Tjänster
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.servicesPerformed.map((s) => (
                <span
                  key={s}
                  className="border border-graphite/15 px-2.5 py-1 text-xs text-graphite-600"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>

          {project.duration && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-graphite-400">
                Projekttid
              </dt>
              <dd className="mt-2 text-sm text-graphite-600">
                {project.duration}
              </dd>
            </div>
          )}

          {project.result && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-graphite-400">
                Resultat
              </dt>
              <dd className="mt-2 text-sm text-graphite-600">
                {project.result}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
