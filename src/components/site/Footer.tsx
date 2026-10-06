import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/footerlogo.png";
import { YOUTUBE_CHANNEL_URL } from "@/lib/youtube";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Ministry", "#focus"],
  ["Sermons", "#sermons"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["Prayer Request", "#prayer-request"],
  ["Contact", "#contact"],
  ["Give Now", "#give"],
];

export function Footer() {
  return (
    <footer className="bg-deep text-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <img
          src={logo}
          alt="Stanley Suresh Ministries"
          loading="lazy"
          className="h-20 w-auto object-contain"
        />

        <div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ivory/85">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-gold"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="mt-3 font-display text-sm italic text-ivory/80">
            “And ye shall know the truth, and the truth shall make you free.”
            — John 8:32
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-3">
          {/* YouTube */}
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="grid h-8 w-8 place-items-center rounded-full bg-youtube transition-transform duration-300 hover:scale-110"
          >
            <Youtube className="h-4 w-4" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1KFjuu2hrT/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-8 w-8 place-items-center rounded-full bg-slate transition-transform duration-300 hover:scale-110 hover:bg-blue-600"
          >
            <Facebook className="h-4 w-4" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/stanley.suresh.566?stkn=cm1zbm5qcmRpYnVo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-8 w-8 place-items-center rounded-full bg-slate transition-transform duration-300 hover:scale-110 hover:bg-pink-600"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-end gap-4 px-5 py-3 text-[11px] text-ivory/60 lg:px-8">
          <a href="#" className="hover:text-gold">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-gold">
            Terms &amp; Conditions
          </a>

          <span>
            © {new Date().getFullYear()} Stanley Suresh Ministries. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
