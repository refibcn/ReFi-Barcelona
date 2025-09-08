import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import ThemeSwitcher from "./ThemeSwitcher"

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/01-about/", label: "About" },
  { href: "/02-ecosystem/", label: "Ecosystem" },
  { href: "/03-wip/", label: "WIP" },
  { href: "/01-about/donate/", label: "Donate" },
]

const TopNav: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="topnav" role="navigation" aria-label="Main">
      <div class="topnav-inner">
        <a class="brand" href="/">ReFi Barcelona</a>
        <div class="spacer" />
        <ul class="nav-links">
          {NAV_LINKS.map((l) => (
            <li class="nav-item">
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

TopNav.css = `
.topnav {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: saturate(1.2) blur(8px);
  -webkit-backdrop-filter: saturate(1.2) blur(8px);
  background: color-mix(in srgb, var(--background-secondary) 85%, transparent);
  border-bottom: 1px solid var(--lightgray);
}

.topnav-inner {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.topnav .brand {
  font-family: var(--headerFont);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--dark);
}

.topnav .nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.topnav .nav-item a {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  color: var(--darkgray);
}

.topnav .nav-item a:hover {
  background: var(--lightgray);
  color: var(--dark);
}

@media (max-width: 720px) {
  .topnav-inner { gap: 0.5rem; }
  .topnav .brand { font-size: 1rem; }
  .topnav .nav-links { gap: 0.25rem; }
  .topnav .nav-item a { padding: 0.3rem 0.5rem; }
}
`

export default (() => TopNav) satisfies QuartzComponentConstructor



