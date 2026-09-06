import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
          <span
            className={`text-xs font-bold uppercase tracking-widest ${
              light ? "text-emerald-300" : "text-emerald-900"
            }`}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
