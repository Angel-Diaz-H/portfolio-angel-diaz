import { AppRedesSociales } from "@/components/index";
import { heroData } from "@/data";

export const Hero = () => {
  const { greeting, name, roles, avatar } = heroData;

  return (
    <header
      id="inicio"
      className="lg-pt-0 container mx-auto flex min-h-[90vh] flex-col-reverse items-center justify-center gap-10 px-6 lg:flex-row lg:gap-24"
    >
      <div className="flex flex-col items-center space-y-10 text-center lg:items-start lg:text-left">
        <div className="space-y-3">
          <p className="font-Ubuntu text-accent-primary-foreground text-xl font-semibold md:text-2xl">
            {greeting}
          </p>
          <h1 className="bg-linear-to-r from-blue-800 to-sky-700 bg-clip-text py-3 text-5xl font-bold text-transparent md:text-7xl">
            {name}
          </h1>
          <div className="space-y-1">
            {roles.map((role) => (
              <p
                key={role}
                className="text-muted-foreground max-w-2xl text-lg font-semibold md:text-xl"
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <AppRedesSociales
            className="flex flex-wrap justify-center gap-3 md:justify-start"
            importance="primary"
          />
          <AppRedesSociales
            className="flex flex-wrap justify-center gap-3 md:justify-start"
            importance="secondary"
          />
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="bg-primary/20 absolute -inset-1 rounded-full opacity-50 blur-lg"></div>

        <img
          className="relative h-64 w-64 transform rounded-full object-cover shadow-xl transition-all duration-500 md:h-80 md:w-80 lg:h-100 lg:w-100"
          src={avatar.src}
          alt={avatar.alt}
        />
      </div>
    </header>
  );
};
