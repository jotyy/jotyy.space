import { Drawer } from 'vaul';
import { Icons } from '@/components/icons';
import { MenuContent } from '@/components/menu-content';
import { Button } from '@/components/ui/button';

export function MobileDrawer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Button asChild size="icon" title="Toggle drawer" variant="ghost">
        <Drawer.Trigger>
          <Icons.command className="size-5" />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 mt-24 flex h-[90%] flex-col rounded-t-lg bg-zinc-100 dark:bg-zinc-900">
          <div className="flex-1 overflow-y-auto rounded-t-lg bg-background">
            <div className="pointer-events-none sticky inset-x-0 top-0 flex h-10 items-center justify-center overflow-hidden bg-background">
              <div className="h-1.5 w-12 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="p-4">
              <MenuContent />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
