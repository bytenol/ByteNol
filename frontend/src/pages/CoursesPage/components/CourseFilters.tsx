import { Funnel, X } from "lucide-react";
import { motion } from "motion/react";

interface CourseFiltersProps {
  category: string;
  technology: string;
  categories: string[];
  technologies: string[];
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
}

function CourseFilters({
  category,
  technology,
  categories,
  technologies,
  onCategoryChange,
  onTechnologyChange,
}: CourseFiltersProps) {
  return (
    <div className="rounded-3xl border border-border bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Categories */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            <Funnel size={14} />
            Browse by category
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onCategoryChange(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-dark text-white shadow-sm"
                      : "bg-surface text-muted hover:bg-primary-light hover:text-primary-dark"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="technology-filter"
            className="hidden text-sm font-semibold text-dark sm:block"
          >
            Technology
          </label>

          <select
            id="technology-filter"
            value={technology}
            onChange={(event) => onTechnologyChange(event.target.value)}
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-dark outline-none focus:border-primary-dark focus:ring-4 focus:ring-primary-light"
          >
            <option value="All">All technologies</option>

            {technologies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {(category !== "All" || technology !== "All") && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              type="button"
              onClick={() => {
                onCategoryChange("All");
                onTechnologyChange("All");
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary-dark"
              title="Clear filters"
            >
              <X size={17} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseFilters;