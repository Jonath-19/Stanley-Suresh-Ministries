import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo_banner.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ministry", href: "#focus" },
  { label: "Sermons", href: "#sermons" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Prayer", href: "#prayer-request" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Ministry Logo */}
        <a
          href="#home"
          className="flex h-[54px] w-[185px] shrink-0 items-center overflow-hidden"
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
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center rounded-md px-4 py-2 text-sm text-ivory/90 transition-colors hover:text-gold ${index === 0
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
              className="py-2 text-ivory/90 transition-colors hover:text-gold"
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