import { Moon, Palette, ShieldAlert } from "lucide-react";
import { DelayAnimation } from "./delayAnimation";

const WhoIsFor = () => {
  const targets = [
    {
      title: "Dream Enthusiasts",
      description:
        "Anyone curious about their inner world and eager to explore the mysteries of sleep.",
      icon: <Moon size={32} strokeWidth={1.2} className="text-gray-700" />,
    },
    {
      title: "Creative Professionals",
      description:
        "Artists, writers, and designers seeking new sources of inspiration and creative material.",
      icon: <Palette size={32} strokeWidth={1.2} className="text-gray-700" />,
    },
    {
      title: "Mental Health Practitioners",
      description:
        "Therapists and researchers looking for innovative tools to understand the human psyche.",
      icon: (
        <ShieldAlert size={32} strokeWidth={1.2} className="text-gray-700" />
      ),
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-24 px-6 font-sans">
      <DelayAnimation delay={300}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl">
              Who is OniriCam For?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 lg:gap-x-16 text-center">
            {targets.map((target, index) => (
              <DelayAnimation delay={300 * (index + 1) + 600}>
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-gray-50 border border-gray-100">
                    {target.icon}
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-gray-950 mb-3">
                    {target.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                    {target.description}
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

export { WhoIsFor };
