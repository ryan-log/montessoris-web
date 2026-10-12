import { TocItem } from "@/lib/toc"

interface Props {
  items: TocItem[]
  className?: string
}

export default function TableOfContents({ items, className }: Props) {
  if (!items || items.length < 2) return null

  return (
    <nav
      aria-label="글 목차"
      className={[
        "my-8 rounded-xl border border-ink/10 bg-linen/50 p-5 sm:p-6 transition-colors",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-ink/10 text-ink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-sage-deep shrink-0"
          aria-hidden="true"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        <span className="font-display font-semibold text-base tracking-tight">
          목차 한눈에 보기
        </span>
      </div>

      <ol className="space-y-1.5 text-sm">
        {items.map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className={[
              item.level === 3 ? "pl-4 text-xs text-ink/70" : "font-medium text-ink/85",
            ].join(" ")}
          >
            <a
              href={`#${item.id}`}
              className="inline-flex items-center gap-1.5 py-0.5 text-ink/80 transition-colors hover:text-sage-deep hover:underline"
            >
              <span className="text-xs text-ink/40 font-mono">
                {item.level === 2 ? "•" : "└"}
              </span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
