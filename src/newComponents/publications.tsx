import { useEffect, useRef, useState } from "react";
import { DelayAnimation } from "./delayAnimation";

type Publication = {
  bannerUrl: string;
  contentUrl: string;
  title: string;
};

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getPublications = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/oniricam/publications",
        );
        if (!response.ok) return;
        const apiPublications: Publication[] = await response.json();
        setPublications(apiPublications);
      } catch (err) {
        console.error("Failed to load publications", err);
      }
    };

    getPublications();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (publications.length === 0) return null;

  return (
    <div className="relative w-full">
      <DelayAnimation delay={300}>
        <button
          aria-label="Previous"
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow"
        >
          <span className="text-2xl">‹</span>
        </button>

        <div
          ref={containerRef}
          className="flex gap-3 overflow-x-auto scroll-smooth py-2 px-12 hide-scrollbar justify-evenly"
        >
          {publications.map((p, index) => (
            <a
              key={index}
              href={`https://${p.contentUrl}`}
              target="_blank"
              className="min-w-55 cursor-pointer rounded-lg overflow-hidden shadow bg-white"
            >
              <img
                src={p.bannerUrl}
                alt={p.title}
                className="w-full h-30 object-cover"
              />
              <div className="p-2 text-sm">{p.title}</div>
            </a>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow"
        >
          <span className="text-2xl">›</span>
        </button>
      </DelayAnimation>
    </div>
  );
};

export { Publications };
