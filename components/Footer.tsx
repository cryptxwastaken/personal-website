import { CopyEmailButton } from "@/components/CopyEmailButton";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-hairline bg-cardbg py-8 font-mono text-xs text-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-ink font-semibold">
            {profile.name.toUpperCase()}
          </span>
          <span>—</span>
          <span>{profile.footerTagline}</span>
        </div>

        <div className="flex items-center space-x-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {social.label}
            </a>
          ))}
          <CopyEmailButton variant="footer" />
        </div>
      </div>
    </footer>
  );
}
