import { AppContacto, AppRedesSociales } from "@/components/index";

export const HeroSection = () => {
  return (
    <header className="grid grid-cols-2">
      <div className="flex items-center justify-center">
        <img className="h-50 w-50 bg-green-500" src="" alt="" />
      </div>
      <div>
        <h1>Angel Díaz.</h1>
        <p>Administrador de bases de datos y desarrollador web.</p>
        <AppContacto />
        <AppRedesSociales className="grid grid-cols-3" />
      </div>
    </header>
  );
};
