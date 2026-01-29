import React from "react";

type Props = {
  images?: string[]; // rutas relativas (p. ej. '/images/tech.webp' o '/assets/tech.webp')
  speed?: number; // duración en segundos (mayor = más lento)
  height?: number; // alto de las imágenes en px
};

export const ScrollTechnologies: React.FC<Props> = ({
  images = [],
  speed = 20,
  height = 64,
}) => {
  if (!images || images.length === 0) return null;

  // duplicamos las imágenes para crear un loop continuo
  const items = [...images, ...images];

  return (
    <div className="marquee">
      <div
        className="marquee__track"
        style={{ animationDuration: `${Math.max(6, speed)}s` }}
        role="list"
        aria-label="Tecnologías"
      >
        {items.map((src, i) => (
          <div className="marquee__item" key={`${src}-${i}`} role="listitem">
            <img
              src={src}
              alt=""
              style={{ height: `${height}px`, width: "auto" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollTechnologies;
