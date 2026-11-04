import { navigationItems } from "@/data";

export const Navbar = () => {
  return (
    <nav className="font-Inter fixed top-0 z-50 flex w-full items-center justify-center bg-white text-sm shadow backdrop-blur-md transition-all">
      {navigationItems.map((item) => (
        <a
          key={item.title}
          className="hover:text-accent-primary-foreground hover:bg-accent-primary px-3 py-3"
          href={item.href}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};
