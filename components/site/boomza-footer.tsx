import Link from "next/link";

const navigation = [
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Colour",
    href: "/colour",
  },
  {
    label: "Play",
    href: "/play",
  },
  {
    label: "Books",
    href: "/books",
  },
] as const;

export default function BoomzaFooter() {
  return (
    <footer className="boomza-footer">
      <div className="site-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              href="/"
              className="boomza-logo"
              aria-label="Boomza home"
            >
              BOOM<span>ZA</span>
            </Link>

            <p>
              Stories, colouring, play and little
              adventures made for big imaginations.
            </p>
          </div>

          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Boomza.
          </span>

          <span>
            Made with imagination in South Africa.
          </span>
        </div>
      </div>
    </footer>
  );
}
