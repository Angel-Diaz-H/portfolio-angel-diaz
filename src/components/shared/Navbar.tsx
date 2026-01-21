export const Navbar = () => {
  return (
    <nav className="flex items-center justify-end space-x-10 bg-zinc-500/10 px-3 font-light text-gray-700 transition-all">
      <a className="p-3 hover:text-lime-500" href="">
        Inicio
      </a>
      <a href="">Proyectos</a>
      <a href="">Tecnologías</a>
      <a href="">Trayectoria</a>
      <a href="">Capacitaciones</a>
    </nav>
  );
};
