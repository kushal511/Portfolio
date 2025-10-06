'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command as CommandIcon } from 'lucide-react';
import { Command } from 'cmdk';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { projects } from '@/content/projects';

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-9 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <CommandIcon className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[640px] p-0" showCloseButton={false}>
          <Command className="rounded-lg border-0 shadow-none">
            <Command.Input 
              placeholder="Type a command or search..." 
              className="border-0 border-b px-4 py-3 text-sm outline-none focus:ring-0"
            />
            <Command.List className="max-h-[400px] overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>
              <Command.Group heading="Pages">
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  Home
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/projects'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  Projects
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/about'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  About
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/contact'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  Contact
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/internships'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  Internships
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/education'))}
                  className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  Education
                </Command.Item>
              </Command.Group>
              <Command.Group heading="Projects">
                {projects.map((project) => (
                  <Command.Item
                    key={project.slug}
                    onSelect={() =>
                      runCommand(() => router.push(`/project/${project.slug}`))
                    }
                    className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    {project.title}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
