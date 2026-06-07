import { useEffect, useRef, useState } from "react";

const texts = [
  {
    title: "01. Captação",
    subtitle: "Durma com a OniriBand",
    description:
      "Uma discreta faixa de cabeça monitora suas ondas cerebrais e a atividade REM, mapeando os impulsos visuais do seu cérebro sem interromper seu sono.",
  },
  {
    title: "02. Tradução",
    subtitle: "Suas ondas cerebrais são interprteadas",
    description:
      "Nosso algoritmo avançado traduz os dados neurais em conteúdo audiovisual de alta definição, recriando cenários, cores e narrativas.",
  },
  {
    title: "03. Imersão",
    subtitle: "Coloque os óculos VR e reviva seu sonho.",
    description:
      "Explore os detalhes, compreenda seus símbolos e guarde essa memória para sempre.",
  },
];

const ProductSection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-third">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Três etapas para transformar sonhos em memórias
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {texts.map((step, index) => (
            <article
              key={step.title}
              style={{ animationDuration: `${(index + 1) * 200 + 400}ms` }}
              className={`rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 ring-1 ring-white/10 ${shouldAnimate ? "animate-appear" : "opacity-0"}`}
            >
              <p className="text-sm font-semibold text-third">{step.title}</p>
              <h3 className="mt-4 text-xl font-semibold text-fourth">
                {step.subtitle}
              </h3>
              <p className="mt-3 text-base leading-7 text-fifth">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProductSection };
