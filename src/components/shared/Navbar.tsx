export const Navbar = () => {
  return (
    <nav className="flex items-center justify-end space-x-10 bg-zinc-500/10 px-3 font-light text-gray-700 transition-all">
      <a className="hover:text-accent-primary-foreground p-3" href="">
        Inicio
      </a>
      <a className="hover:text-accent-primary-foreground p-3" href="">
        Proyectos
      </a>
      <a className="hover:text-accent-primary-foreground p-3" href="">
        Tecnologías
      </a>
      <a className="hover:text-accent-primary-foreground p-3" href="">
        Trayectoria
      </a>
      <a className="hover:text-accent-primary-foreground p-3" href="">
        Capacitaciones
      </a>
    </nav>
  );
};
