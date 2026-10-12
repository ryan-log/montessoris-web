import React from "react"
import { slugifyHeading } from "@/lib/toc"

function getNodeText(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return node.toString()
  if (!node) return ""
  if (Array.isArray(node)) return node.map(getNodeText).join("")
  if (typeof node === "object" && node !== null && "props" in node) {
    const element = node as { props?: { children?: React.ReactNode } }
    if (element.props?.children) {
      return getNodeText(element.props.children)
    }
  }
  return ""
}

export const mdxComponents = {
  h2: ({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"h2">) => {
    const text = getNodeText(children)
    const id = slugifyHeading(text)
    return (
      <h2
        id={id || undefined}
        className={`scroll-mt-28 font-display font-semibold tracking-tight text-ink group flex items-center justify-between ${className}`}
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            aria-label={`${text} 섹션 바로가기`}
            className="ml-2 opacity-0 group-hover:opacity-100 text-ink/30 hover:text-sage-deep transition-opacity text-base font-normal"
          >
            #
          </a>
        )}
      </h2>
    )
  },
  h3: ({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"h3">) => {
    const text = getNodeText(children)
    const id = slugifyHeading(text)
    return (
      <h3
        id={id || undefined}
        className={`scroll-mt-28 font-display font-semibold tracking-tight text-ink group flex items-center justify-between ${className}`}
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            aria-label={`${text} 섹션 바로가기`}
            className="ml-2 opacity-0 group-hover:opacity-100 text-ink/30 hover:text-sage-deep transition-opacity text-sm font-normal"
          >
            #
          </a>
        )}
      </h3>
    )
  },
  table: ({ children, ...props }: React.ComponentPropsWithoutRef<"table">) => (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ink/10 bg-white shadow-[0_4px_20px_-10px_rgba(38,64,47,0.08)]">
      <table className="w-full text-left text-sm divide-y divide-ink/10" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-linen/80 text-xs font-semibold uppercase tracking-wider text-ink/90" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-3.5 font-semibold text-ink sm:px-6" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-3.5 text-ink/80 border-t border-ink/5 sm:px-6 leading-relaxed" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: React.ComponentPropsWithoutRef<"tr">) => (
    <tr className="hover:bg-linen/40 transition-colors" {...props}>
      {children}
    </tr>
  ),
}
