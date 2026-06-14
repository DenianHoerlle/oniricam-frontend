import { BrainCircuit, Lightbulb, Mic, UserSearch } from "lucide-react"; // Example icons to match the design
import { DelayAnimation } from "./delayAnimation";

const Benefits = () => {
  const benefits = [
    {
      icon: <UserSearch size={22} className="text-gray-700" />,
      title: "Self-Knowledge",
      description:
        "Gain unprecedented insight into your inner world. Discover recurring patterns, symbols, and themes that reveal your deepest thoughts and emotions.",
    },
    {
      icon: <Lightbulb size={22} className="text-gray-700" />,
      title: "Creativity",
      description:
        "Artists, writers, and creators can capture fleeting dream inspiration that might otherwise be lost. Your subconscious becomes your creative collaborator.",
    },
    {
      icon: <BrainCircuit size={22} className="text-gray-700" />,
      title: "Memory Analysis",
      description:
        "Build a personal dream archive over time. Track how your dreams evolve through different life stages and circumstances.",
    },
    {
      icon: <Mic size={22} className="text-gray-700" />,
      title: "Research & Therapy Support",
      description:
        "Therapists and researchers can use dream recordings to better understand mental health patterns, trauma processing, and cognitive function.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <DelayAnimation delay={300}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 mb-3">
              Transform Your Relationship with Dreams
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Unlock the potential of your unconscious mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => (
              <DelayAnimation delay={600 + (index + 1) * 300}>
                <div key={index} className="flex flex-col items-start gap-4">
                  <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200/60 shadow-inner">
                    {benefit.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-950">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-lg font-normal text-[15px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </DelayAnimation>
            ))}
          </div>
        </div>
      </DelayAnimation>
    </section>
  );
};

export { Benefits };
