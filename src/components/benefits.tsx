import { useEffect, useRef, useState } from "react";
import { pessoaComVR } from "../assets";

const texts = [
  {
    image: pessoaComVR,
    text: "Uma nova janela para a sua mente. Analise seus medos, desejos e padrões recorrentes com clareza inédita.",
    title: "Para Entusiastas de Autoconhecimento",
  },
  {
    image: pessoaComVR,
    text: "Nunca mais perca uma ideia brilhante da madrugada. Transforme insights oníricos em inspiração concreta para seus projetos.",
    title: "Para Criativos e Artistas",
  },
  {
    image: pessoaComVR,
    text: "Uma ferramenta conceitual poderosa para ajudar pesquisadores e terapeutas a compreenderem o comportamento da mente humana durante o sono.",
    title: "Para a Ciência e Psicologia",
  },
];

interface BenefitCardProps {
  image: string;
  text: string;
  title: string;
  imagePosition: "left" | "right";
}

const BenefitCard = ({
  image,
  text,
  title,
  imagePosition,
}: BenefitCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.6 },
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const imageElement = (
    <div className="flex justify-center">
      <img
        src={image}
        alt="Benefit illustration"
        className={`w-full max-w-md h-auto rounded-lg transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );

  const textElement = (
    <div
      className={`flex flex-col justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="text-2xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-lg text-fifth">{text}</p>
    </div>
  );

  return (
    <div ref={ref} className="relative bg-primary py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          {imagePosition === "left" ? (
            <>
              {imageElement}
              {textElement}
            </>
          ) : (
            <>
              {textElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="relative bg-linear-to-b from-slate-800 via-gray-900 to-slate-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-1 transform-gpu blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(10%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[105%] sm:w-288.75"
        />
      </div>

      <div className="relative">
        {texts.map((item, index) => (
          <BenefitCard
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export { BenefitsSection };
