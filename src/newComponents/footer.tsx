const texts = {
  brandTitle: "OniriCam",
  brandDescription:
    "Bridging dreams and reality through innovative neurotechnology. Explore the unexplored territories of your mind.",
  connectTitle: "Connect",
  socialLinks: [
    { name: "Twitter", href: "#twitter" },
    { name: "Instagram", href: "#instagram" },
    { name: "LinkedIn", href: "#linkedin" },
  ],
  contactTitle: "Contact",
  email: "contact@oniricam.com",
  location: "Porto Alegre, RS",
  copyright:
    "© 2026 OniriCam. All rights reserved. This is a fictional product for academic purposes.",
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-xs py-12 px-6 sm:px-12 md:px-16 border-t border-gray-900 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">
              {texts.brandTitle}
            </h4>
            <p className="leading-relaxed max-w-xs text-gray-400">
              {texts.brandDescription}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">
              {texts.connectTitle}
            </h4>
            <div className="flex flex-wrap gap-4">
              {texts.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-medium text-sm mb-3">
              {texts.contactTitle}
            </h4>
            <p>
              <a
                href={`mailto:${texts.email}`}
                className="hover:text-white transition-colors"
              >
                {texts.email}
              </a>
            </p>
            <p className="text-gray-400">{texts.location}</p>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-6 text-center text-[11px] text-gray-600">
          <p>{texts.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
