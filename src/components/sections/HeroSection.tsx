import { AppRedesSociales } from "@/components/index";

export const HeroSection = () => {
  return (
    <header className="flex items-center justify-center">
      <div>
        <p className="font-Ubuntu text-accent-primary-foreground mt-5 text-4xl font-semibold">
          Hola, ¡mucho gusto! Soy...
        </p>

        <h1 className="text-primary mb-5 text-7xl font-bold">Angel Díaz.</h1>

        <p className="text-secondary font-Ubuntu my-5 text-3xl font-semibold">
          Administrador de bases de datos y desarrollador web.{" "}
          <span className="text-primary text-2xl">
            {" "}
            Actualmente formándome en TypeScript y React.
          </span>
        </p>

        {/* <AppContacto className="grid text-sm" /> */}
        <AppRedesSociales
          className="my-3 flex flex-wrap gap-4"
          importance="primary"
        />

        <AppRedesSociales
          className="my-3 flex flex-wrap gap-4"
          importance="secondary"
        />
        {/* <Descripcion /> */}
      </div>

      <img
        className="bg-secondary mr-13 ml-5 h-65 w-65 rounded-4xl"
        src=""
        alt=""
      />
    </header>
  );
};
