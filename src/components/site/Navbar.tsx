import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import logo from "@/assets/navbar-logo.png";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Ministry", href: "/#focus" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Prayer", href: "/#prayer-request" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveLink("About");
      return;
    }
    const sectionIds = [
      "home",
      "focus",
      "sermons",
      "prayer-request",
      "gallery",
      "testimonials",
      "contact",
    ];
  const activeLabels: Record<string, string> = {
          home: "Home",
          focus: "Ministry",
          sermons: "Sermons",
          "prayer-request": "Prayer",
          gallery: "Gallery",
          testimonials: "Testimonials",
          contact: "Contact",
        };
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

      if (visibleSections.length > 0) {
        const id = visibleSections[0].target.id;
        setActiveLink(activeLabels[id] || "Home");
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [location.pathname]);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Ministry Logo */}
        <a
          href="#home"
          className="flex h-[52px] w-[175px] shrink-0 items-center overflow-hidden lg:h-[60px] lg:w-[210px]"
          aria-label="Stanley Suresh Ministries Home"
        >
          <img
            src={logo}
            alt="Stanley Suresh Ministries"
            className="block h-full w-full object-contain object-left"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`flex items-center rounded-md px-3 py-2 text-sm text-ivory/90 transition-colors hover:text-gold ${
                activeLink === link.label
                  ? "bg-ivory/10 text-ivory ring-1 ring-ivory/15"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Give Now */}
        <a
          href="#give"
          className="btn-gold hidden lg:inline-flex"
        >
          Give Now
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className="text-ivory lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ivory/10 bg-deep/95 px-5 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-ivory/90 transition-colors hover:text-gold ${
                activeLink === link.label
                  ? "bg-ivory/10 text-ivory ring-1 ring-ivory/15"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#give"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 justify-center"
          >
            Give Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
