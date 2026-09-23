import { cn } from "@/lib/utils";

type MarkVariant = "icon" | "x" | "wordmark" | "lockup";

const SRC: Record<MarkVariant, string> = {
  icon: "/brand/mascot.png",
  x: "/brand/logo-x.png",
  wordmark: "/brand/logo-wordmark.png",
  lockup: "/brand/logo-mascot.png",
};

const RATIO: Record<MarkVariant, string> = {
  icon: "aspect-[554/482]",
  x: "aspect-[554/482]",
  wordmark: "aspect-[1156/482]",
  lockup: "aspect-[1156/482]",
};

export function BrandMark({
  variant,
  className,
  alt,
}: {
  variant: MarkVariant;
  className?: string;
  alt?: string;
}) {
  return (
    <span
        role={alt === "" ? undefined : "img"}
        aria-hidden={alt === "" ? true : undefined}
        aria-label={alt === "" ? undefined : (alt ?? "APE X")}
      className={cn(
        "inline-block bg-foreground",
        RATIO[variant],
        className,
      )}
      style={{
        maskImage: `url(${SRC[variant]})`,
        WebkitMaskImage: `url(${SRC[variant]})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export function WordmarkText({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-extrabold tracking-[-0.012em] text-foreground",
        className,
      )}
    >
      APE&nbsp;X
    </span>
  );
}
