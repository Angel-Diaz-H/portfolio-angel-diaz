export const Navbar = () => {
  return (
    <nav className="font-Inter sticky flex items-center justify-center text-sm transition-all">
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Inicio
      </a>
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Sobre mí
      </a>
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Experiencia
      </a>
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Proyectos
      </a>
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Tecnologías
      </a>
      <a className="hover:text-accent-primary-foreground px-3 py-3" href="">
        Capacitaciones
      </a>
    </nav>
  );
};
