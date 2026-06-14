import { useState } from "react";

const texts = {
  brandName: "OniriCam",
  items: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "How it works", href: "#howitworks" },
    { name: "benefits", href: "#benefits" },
    { name: "Who is for", href: "#whoisfor" },
    { name: "Contact", href: "#contact" },
  ],
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const renderDesktopHeader = () => {
    return (
      <nav className="hidden md:flex md:items-center md:space-x-6">
        {texts.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
    );
  };

  const renderBurguerMenu = () => {
    return (
      <button
        onClick={() => setOpen((v) => !v)}
        aria-controls="mobile-menu"
        aria-expanded={open}
        className="p-2 rounded-md hover-bg-fifth focus-ring absolute right-6 top-3 z-50"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    );
  };

  const renderMobileHeader = () => {
    return (
      <>
        <div className="md:hidden">{renderBurguerMenu()}</div>

        <nav
          id="mobile-menu"
          className={`fixed inset-0 md:hidden z-40 bg-secondary/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex h-full flex-col justify-center items-center px-6 space-y-6">
            {texts.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 rounded-full text-xl font-medium nav-link hover:bg-fifth hover:text-third transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </>
    );
  };

  return (
    <header className="bg-secondary shadow-sm fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-semibold text-primary">
              {texts.brandName}
            </a>
          </div>
          {renderDesktopHeader()}

          {renderMobileHeader()}
        </div>
      </div>
    </header>
  );
};

export { Header };
