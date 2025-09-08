import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header class="header-root">{children}</header> : null
}

Header.css = `
.header-root {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 1rem 0;
  gap: 1.5rem;
}

.header-root h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
