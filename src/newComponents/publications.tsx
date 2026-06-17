import { useEffect, useRef, useState } from "react";

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

  const openPublication = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  if (publications.length === 0) return null;

  return (
    <div className="relative w-full">
      <button
        aria-label="Previous"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow"
      >
        <span className="text-2xl">‹</span>
      </button>

      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scroll-smooth py-2 px-12 hide-scrollbar"
      >
        {publications.map((p, idx) => (
          <div
            key={idx}
            onClick={() => openPublication(p.contentUrl)}
            className="min-w-55 cursor-pointer rounded-lg overflow-hidden shadow bg-white"
          >
            <img
              src={p.bannerUrl}
              alt={p.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-2 text-sm">{p.title}</div>
          </div>
        ))}
      </div>

      <button
        aria-label="Next"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow"
      >
        <span className="text-2xl">›</span>
      </button>
    </div>
  );
};

export { Publications };
