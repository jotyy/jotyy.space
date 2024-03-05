import { cn } from "@/lib/utils";

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "container px-8 max-w-4xl flex min-h-screen flex-col py-24 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface PageHeaderProps {
  heading: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  heading,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <header
      className={cn("flex flex-row justify-between items-center", className)}
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {children}
    </header>
  );
}
