import { ArrowUpRight, Clock3 } from "lucide-react";

export interface Resource {
  title: string;
  description: string;
  category: string;
  readTime: string;
  type: string;
}

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-primary-light">
        <div className="absolute h-32 w-32 rounded-full border border-primary/30" />

        <div className="relative w-40 rounded-xl border border-border bg-white p-4 shadow-lg transition duration-300 group-hover:-translate-y-2">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-12 rounded-full bg-primary/50" />
            <div className="h-2 w-5 rounded-full bg-slate-200" />
          </div>

          <div className="space-y-2">
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 w-[75%] rounded-full bg-slate-200" />
            <div className="h-2 w-[50%] rounded-full bg-slate-200" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
            {resource.category}
          </span>

          <span className="text-xs text-muted">{resource.type}</span>
        </div>

        <h3 className="mt-4 font-heading text-xl font-bold leading-tight text-dark">
          {resource.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted">
          {resource.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <Clock3 size={14} />
            {resource.readTime}
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-dark transition group-hover:text-primary-dark">
            Read
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </article>
  );
}

export default ResourceCard;