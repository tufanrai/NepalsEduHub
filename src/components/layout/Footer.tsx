import { Link } from "react-router-dom";
import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Notes Library", path: "/notes" },
    { name: "AI Assistant", path: "/ai-assistant" },
    { name: "Student Dashboard", path: "/dashboard" },
    { name: "Global Connection Hub", path: "/global-hub" },
  ],
  resources: [
    { name: "Grade 8 Notes", path: "/notes?level=grade-8" },
    { name: "Grade 10 Notes", path: "/notes?level=grade-10" },
    { name: "+2 Notes", path: "/notes?level=plus-2" },
    { name: "University Notes", path: "/notes?level=university" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Nepal Student Hub</span>
            </Link>
            <p className="text-accent-foreground/70 mb-6 max-w-sm leading-relaxed">
              Empowering Nepali students with quality education resources,
              AI-powered learning, and a collaborative community to solve
              real-world challenges.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-accent-foreground/70">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@nepalstudenthub.com"
                  className="text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  hello@nepalstudenthub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+9771234567890"
                  className="text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  +977 1234567890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © {new Date().getFullYear()} Nepal Student Hub. All rights
              reserved.
            </p>
            <p className="text-accent-foreground/60 text-sm">
              Made with ❤️ for students of Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
