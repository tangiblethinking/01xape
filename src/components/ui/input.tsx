import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border-0 bg-foreground/6 px-4 text-base text-foreground shadow-glass",
        "placeholder:text-subtle outline-none",
        "focus-visible:shadow-glass-hover",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
