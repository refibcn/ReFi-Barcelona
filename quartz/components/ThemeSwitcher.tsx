// @ts-ignore
import themeSwitcherScript from "./scripts/theme-switcher.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ThemeSwitcher: QuartzComponent = () => {
  return (
    <button class="theme-switcher" aria-label="Toggle site theme">
      Theme
    </button>
  )
}

ThemeSwitcher.beforeDOMLoaded = themeSwitcherScript

ThemeSwitcher.css = `
.theme-switcher {
  appearance: none;
  border: none;
  background: var(--secondary);
  color: var(--sp1, white);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}
.theme-switcher:hover { background: var(--tertiary); }
`

export default (() => ThemeSwitcher) satisfies QuartzComponentConstructor


