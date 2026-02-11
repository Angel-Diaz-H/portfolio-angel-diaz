import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className = "", id }: Props) => {
  return (
    <section
      id={id}
      className={`my-10 h-full min-h-screen w-full py-1 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
};
