import { Brain, Cpu, Eye, Sparkles } from "lucide-react";
import { DelayAnimation } from "./delayAnimation";

const isMobile = window.innerWidth <= 640;

const texts = {
  sectionTitle: "How it Works",
  sectionDescription: "From sleep to screen in four revolutionary steps",
  steps: [
    {
      icon: <Brain size={24} strokeWidth={1.5} />,
      title: "Capture",
      description:
        "Wear the OniriCam headset while you sleep. Non-invasive sensors monitor your neural activity throughout the night, focusing on REM stages where vivid dreams occur.",
    },
    {
      icon: <Cpu size={24} strokeWidth={1.5} />,
      title: "Interpretation",
      description:
        "Our proprietary AI analyzes your brainwave patterns, identifying visual, emotional, and narrative elements within your dream sequences.",
    },
    {
      icon: <Sparkles size={24} strokeWidth={1.5} />,
      title: "Transformation",
      description:
        "Neural data is transformed into audiovisual content using advanced generative algorithms, recreating the essence of your dream experience.",
    },
    {
      icon: <Eye size={24} strokeWidth={1.5} />,
      title: "Visualization",
      description:
        "Wake up to find your dreams waiting in the OniriCam app ready to watch, share, or analyze. Each recording is a unique window into your subconscious.",
    },
  ],
};

const HowItWorks = () => {
  return (
    <section id="howitworks" className="py-20 px-6 font-sans">
      <DelayAnimation delay={300}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#111111] mb-3 tracking-tight">
              {texts.sectionTitle}
            </h2>
            <p className="text-base text-gray-500">
              {texts.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {texts.steps.map((step, index) => (
              <DelayAnimation
                delay={isMobile ? 300 : (index + 1) * 300 + 300}
                key={step.title}
              >
                <div key={index} className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 mb-5">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </DelayAnimation>
            ))}
          </div>
        </div>
      </DelayAnimation>
    </section>
  );
};

export { HowItWorks };
