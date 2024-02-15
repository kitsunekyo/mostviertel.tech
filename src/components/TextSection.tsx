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
    <div
      className={cn("bg-white px-6 py-24 sm:py-32 lg:px-8 isolate", className)}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="font-decoration text-6xl mb-4">{title}</h2>
        <div className="text-xl space-y-4">{children}</div>
      </div>
    </div>
  );
}
