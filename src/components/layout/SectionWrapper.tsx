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
      className={`my-30 h-full w-full scroll-mt-15 py-1 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-10">{children}</div>
    </section>
  );
};
