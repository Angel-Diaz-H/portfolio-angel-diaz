import { Navbar, Footer } from "@/components/index";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
      <Navbar />
      <main className="mx-40 my-10 grow">{children}</main>
      <Footer />
    </div>
  );
};
