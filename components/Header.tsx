import { CopyEmailButton } from "@/components/CopyEmailButton";
import { profile } from "@/content/profile";

const navLinks = [
  { href: "#hero", index: "01/", label: "Overview" },
  { href: "#projects", index: "02/", label: "Projects" },
  { href: "#experience", index: "03/", label: "Experience" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-stonebg/90 backdrop-blur-md border-b border-hairline text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            className="font-serif text-lg font-medium text-ink hover:text-emerald transition-colors"
          >
            {profile.name}
          </a>
          <span className="text-hairline">|</span>
          <span className="font-mono text-xs text-muted hidden sm:inline-block">
            {profile.university}
          </span>
        </div>

        <nav className="flex items-center space-x-4 sm:space-x-6 font-mono text-xs text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              <span className="text-emerald">{link.index}</span> {link.label}
            </a>
          ))}
          <CopyEmailButton variant="nav" />
        </nav>
      </div>
    </header>
  );
}
