import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-xl bg-foreground/6 px-4 py-3 text-base text-foreground shadow-glass",
        "placeholder:text-subtle outline-none",
        "focus-visible:shadow-glass-hover",
        className,
      )}
      {...props}
    />
  );
}
