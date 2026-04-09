import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "ReFi BCN": "https://refibcn.cat",
      GitHub: "https://github.com/luizfernandosg/ReFi-Barcelona",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
      filterFn: (node) => {
        const hidden = ["tags", "wip", "archive", "operations", "assets"]
        return !hidden.includes(node.slugSegment)
      },
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          "about": 0,
          "ecosystem": 1,
          "regenerative-finance": 2,
          "bioregional-finance": 3,
          "cooperative": 4,
          "cooperative-web3-bridging": 5,
          "local-governance": 6,
          "regenerant-catalunya": 7,
          "articles": 8,
        }
        const aOrder = order[a.slugSegment] ?? 99
        const bOrder = order[b.slugSegment] ?? 99
        if (aOrder !== bOrder) return aOrder - bOrder
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
      order: ["filter", "sort", "map"],
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
      filterFn: (node) => {
        const hidden = ["tags", "wip", "archive", "operations", "assets"]
        return !hidden.includes(node.slugSegment)
      },
      sortFn: (a, b) => {
        const order: Record<string, number> = {
          "about": 0,
          "ecosystem": 1,
          "regenerative-finance": 2,
          "bioregional-finance": 3,
          "cooperative": 4,
          "cooperative-web3-bridging": 5,
          "local-governance": 6,
          "regenerant-catalunya": 7,
          "articles": 8,
        }
        const aOrder = order[a.slugSegment] ?? 99
        const bOrder = order[b.slugSegment] ?? 99
        if (aOrder !== bOrder) return aOrder - bOrder
        if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
      order: ["filter", "sort", "map"],
    }),
  ],
  right: [],
}
