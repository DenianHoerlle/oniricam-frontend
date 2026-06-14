const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-xs py-12 px-6 sm:px-12 md:px-16 border-t border-gray-900 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">OniriCam</h4>
            <p className="leading-relaxed max-w-xs text-gray-400">
              Bridging dreams and reality through innovative neurotechnology.
              Explore the unexplored territories of your mind.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#twitter" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a
                href="#instagram"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#linkedin"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-medium text-sm mb-3">Contact</h4>
            <p>
              <a
                href="mailto:contact@oniricam.com"
                className="hover:text-white transition-colors"
              >
                contact@oniricam.com
              </a>
            </p>
            <p className="text-gray-400">Porto Alegre, RS</p>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-6 text-center text-[11px] text-gray-600">
          <p>
            © 2026 OniriCam. All rights reserved. This is a fictional product
            for academic purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
