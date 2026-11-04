import { FloatingDock } from "../ui/floating-dock";
import { navigationItems } from "@/data";

export function NavbarFloating() {
  const dockItems = navigationItems.map(({ title, href, icon: Icon }) => ({
    title,
    href,
    icon: (
      <Icon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
  }));

  return (
    // Subimos un poco el bottom (bottom-6) para que no roce tanto el borde
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock
        items={dockItems}
        // ESTILO PREMIUM:
        // 1. bg-neutral-100/50: Un blanco translúcido muy sutil
        // 2. backdrop-blur-md: El efecto de vidrio real
        // 3. border-black/5: Un borde casi invisible para definición
        desktopClassName="bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-2xl rounded-4xl"
        mobileClassName="translate-y-0"
      />
    </div>
  );
}
