import { AppCapacitaciones } from "./Capacitaciones/AppCapacitaciones";

export const Capacitaciones = () => {
  return (
    <section>
      <h1>Capacitaciones</h1>
      <AppCapacitaciones className="grid grid-cols-3 gap-x-5 px-5" />
    </section>
  );
};
