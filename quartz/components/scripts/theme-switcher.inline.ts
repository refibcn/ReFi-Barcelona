const THEME_KEY = "site-theme"

// initialize theme root class early
const current = (localStorage.getItem(THEME_KEY) as "default" | "green") ?? "default"
document.documentElement.classList.toggle("theme-green", current === "green")

const emitSiteThemeEvent = (theme: "default" | "green") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

const wire = () => {
  const toggleTheme = () => {
    const next = document.documentElement.classList.contains("theme-green")
      ? "default"
      : "green"
    document.documentElement.classList.toggle("theme-green", next === "green")
    localStorage.setItem(THEME_KEY, next)
    emitSiteThemeEvent(next)
  }

  const buttons = document.getElementsByClassName("theme-switcher")
  for (const btn of buttons) {
    btn.addEventListener("click", toggleTheme)
    // ensure cleanup on SPA navigation
    // @ts-expect-error quartz runtime augments window
    window.addCleanup(() => btn.removeEventListener("click", toggleTheme))
  }
}

// attach on first load once DOM exists
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", wire, { once: true })
} else {
  wire()
}

// re-attach after SPA navigations
document.addEventListener("nav", wire)


