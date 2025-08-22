import { cn } from '@/lib/utils';

export type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'container mx-auto flex min-h-screen max-w-4xl flex-col gap-4 px-4 py-24 md:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}

export type PageHeaderProps = {
  heading: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  heading,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <header
      className={cn('flex flex-row items-center justify-between', className)}
    >
      <div className="flex flex-col">
        <h1 className="font-semibold text-3xl text-foreground">{heading}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {children}
    </header>
  );
}
