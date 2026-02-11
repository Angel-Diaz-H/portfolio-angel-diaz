import { AppRedesSociales } from "@/components/index";

export const Hero = () => {
  return (
    <header className="lg-pt-0 container mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-10 px-6 lg:flex-row lg:gap-24">
      <div className="flex flex-col items-center space-y-10 text-center lg:items-start lg:text-left">
        <div className="space-y-3">
          <p className="font-Ubuntu text-accent-primary-foreground text-xl font-semibold md:text-2xl">
            Hola, ¡mucho gusto! Soy...
          </p>
          <h1 className="text-primary text-5xl font-bold tracking-tight md:text-7xl">
            Angel Díaz
          </h1>
          <p className="text-muted-foreground mt-7 max-w-2xl text-lg font-semibold md:text-2xl">
            DBA & desarrollador de software.
          </p>
        </div>

        {/* <div className="text-muted-foreground max-w-2xl text-lg font-semibold md:text-2xl"> */}
        {/* <p className="text-primary mt-2 font-semibold">
            Actualmente formándome en TypeScript y React.
            </p> */}
        {/* </div> */}

        <div className="grid gap-5">
          <AppRedesSociales
            className="flex flex-wrap justify-start gap-3"
            importance="primary"
          />
          <AppRedesSociales
            className="flex flex-wrap justify-start gap-3"
            importance="secondary"
          />
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="bg-primary/20 absolute -inset-1 rounded-full opacity-50 blur-lg"></div>

        <img
          className="bg-secondary relative h-64 w-64 transform rounded-full object-cover shadow-xl transition-all duration-500 md:h-80 md:w-80 lg:h-100 lg:w-100"
          src="tu-ruta-de-imagen.jpg" // ¡No olvides poner tu ruta aquí!
          alt="Fotografía de perfil de Angel Díaz"
        />
      </div>
    </header>
  );
};
