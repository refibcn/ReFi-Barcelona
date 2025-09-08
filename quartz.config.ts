import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ReFi Barcelona",
    pageTitleSuffix: " - Bridging Global and Local Regenerative Finance",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "luizfernandosg.github.io/ReFi-Barcelona", // GitHub Pages project URL
    ignorePatterns: ["private", "templates", ".obsidian", "backup_*"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#002147", // Navy blue background
          lightgray: "rgba(255, 255, 255, 0.1)", // Subtle white overlay
          gray: "rgba(255, 255, 255, 0.15)", // Medium white overlay
          darkgray: "#a8a8b3", // Muted text
          dark: "#ffffff", // Bright white text
          secondary: "#4C9AFF", // Bright blue for links
          tertiary: "#1A73E8", // Darker blue for hover
          highlight: "rgba(76, 154, 255, 0.2)", // Blue selection
          textHighlight: "rgba(255, 255, 255, 0.1)", // White search highlight
        },
        darkMode: {
          light: "#002147", // Same navy blue for consistency
          lightgray: "rgba(255, 255, 255, 0.1)", // Subtle white overlay
          gray: "rgba(255, 255, 255, 0.15)", // Medium white overlay
          darkgray: "#a8a8b3", // Muted text
          dark: "#ffffff", // Bright white text
          secondary: "#4C9AFF", // Bright blue for links
          tertiary: "#1A73E8", // Darker blue for hover
          highlight: "rgba(76, 154, 255, 0.2)", // Blue selection
          textHighlight: "rgba(255, 255, 255, 0.1)", // White search highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
