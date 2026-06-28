import { TechInline } from "./TechInline";

export const Footer = () => {
  return (
    <footer className="font-Ubuntu text-muted-foreground px-12 pb-10 text-center text-lg">
      <p>Proyecto realizado con cariño y con:</p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <TechInline name="TypeScript" />|
        <TechInline name="React" />|
        <TechInline name="Tailwind CSS" />|
        <TechInline name="Vite" />|
        <TechInline name="ShadCN" />
      </div>
    </footer>
  );
};
