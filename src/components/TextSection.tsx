import { cn } from "@/libs/cn";
import React from "react";

export function TextSection({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-6 py-24 sm:py-32 lg:px-8 isolate", className)}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-decoration text-6xl mb-6 -skew-y-2 text-balance">
          {title}
        </h2>
        <div className="text-lg space-y-4 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
