import { defaultAuthor, AuthorProfile } from "@/lib/author"

interface Props {
  author?: AuthorProfile
  className?: string
}

export default function AuthorBio({ author = defaultAuthor, className }: Props) {
  return (
    <section
      aria-label="콘텐츠 작성 및 감수자 정보"
      className={[
        "not-prose my-14 rounded-2xl border border-ink/10 bg-linen/40 p-6 sm:p-8 transition-colors",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage/20 border border-sage/30 text-sage-deep font-display font-bold text-xl shadow-sm">
          M
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-display text-lg font-semibold text-ink">
              {author.name}
            </h3>
            <span className="rounded-full bg-sage/15 px-2.5 py-0.5 text-xs font-medium text-sage-deep">
              {author.role}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">
            {author.bio}
          </p>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/65">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {author.credentials.map((cred, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <span className="text-sage-deep font-bold">✓</span>
              {cred}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] text-ink/45">
          E-E-A-T Verified Editorial
        </span>
      </div>
    </section>
  )
}
