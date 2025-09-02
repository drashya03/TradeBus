export default function PageHeader({ title, subtitle, cta }: { title: string; subtitle?: string; cta?: React.ReactNode }) {
  return (
    <div className="border-b bg-gradient-to-b from-background to-background/50">
      <div className="container py-10 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
            {subtitle && (
              <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {cta}
        </div>
      </div>
    </div>
  );
}
