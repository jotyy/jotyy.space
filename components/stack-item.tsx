import StackIcon from "tech-stack-icons";

export interface StackItemProps {
  title: string;
  icon: string;
  description: string;
}

export function StackItem({ title, icon, description }: StackItemProps) {
  return (
    <div className="p-4 flex rounded-md bg-secondary items-center gap-3">
      <StackIcon name={icon} className="w-8 h-8" />
      <div>
        <h2 className="font-bold text-base">{title}</h2>
        <p className="text-secondary-foreground text-xs">{description}</p>
      </div>
    </div>
  );
}
