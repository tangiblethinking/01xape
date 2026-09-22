import { BrandMark } from "@/components/BrandMark";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  dek,
  children,
  showMascot = true,
}: {
  kicker?: string;
  title: string;
  dek?: string;
  children?: React.ReactNode;
  showMascot?: boolean;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-6 pb-12 sm:px-8 sm:pt-10 sm:pb-16">
      {showMascot ? (
        <BrandMark
          variant="icon"
          className="pointer-events-none absolute -right-6 top-0 h-64 w-52 opacity-20 sm:h-80 sm:w-64"
          alt=""
        />
      ) : null}
      <div className="relative mx-auto max-w-6xl">
        {kicker ? (
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] sm:text-6xl">
          {title}
        </h1>
        {dek ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {dek}
          </p>
        ) : null}
        {children ? <div className={cn("mt-8")}>{children}</div> : null}
      </div>
    </section>
  );
}
