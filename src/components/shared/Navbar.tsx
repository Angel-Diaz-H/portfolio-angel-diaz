const navList: { name: string; href: string }[] = [
  { name: "Inicio", href: "" },
  { name: "Sobre mí", href: "" },
  { name: "Experiencia", href: "" },
  { name: "Proyectos", href: "" },
  { name: "Tecnologías", href: "" },
  { name: "Capacitaciones", href: "" },
];

export const Navbar = () => {
  return (
    <nav className="font-Inter hover:bg-accent-primary sticky top-0 z-50 flex w-full items-center justify-center bg-white text-sm transition-all">
      {navList.map((item) => (
        <a
          key={item.name}
          className="hover:text-accent-primary-foreground hover:bg-accent-primary px-3 py-3"
          href={item.href}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
