import Link from "next/link"
import { Container } from "@/components/layout/Layout"
import { Reveal } from "@/components/Reveal"
import { MeasureRule } from "@/components/Measure"
import { MATERIALS, type MaterialSlug } from "@/features/experience/materials"
import {
  PreviewTower,
  PreviewStair,
  PreviewRods,
} from "@/features/experience/MaterialPreview"

const PREVIEWS: Record<
  MaterialSlug,
  (p: { className?: string }) => React.ReactElement
> = {
  "pink-tower": PreviewTower,
  "brown-stair": PreviewStair,
  "number-rods": PreviewRods,
}

export function ExperiencePreviewSection() {
  return (
    <section className="bg-paper py-20 lg:py-28 border-t border-ink/[0.06]">
      <Container>
        <Reveal className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-sage-deep">
              Interactive 3D Materials · 직접 만져보는 교구
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
              아이의 눈과 손끝으로 경험하는 3D 교구 가이드
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              분홍탑, 갈색계단, 숫자막대를 화면 위에서 직접 쌓고 배열해 보세요.
              교구에 담긴 질서와 감각의 원리를 부모님이 먼저 직관적으로 체험하고
              가정 활동 팁도 함께 확인할 수 있습니다.
            </p>
          </div>
          <Link
            href="/experience"
            className="group hidden shrink-0 items-center gap-2 font-semibold text-sage-deep transition-colors hover:text-pine sm:inline-flex"
          >
            교구 가이드 전체 보기
            <span
              aria-hidden
              className="text-lg transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MATERIALS.map((m, idx) => {
            const Preview = PREVIEWS[m.slug]
            return (
              <Reveal
                key={m.slug}
                as="article"
                delay={idx * 110}
                className="h-full"
              >
                <Link
                  href={`/experience/${m.slug}/`}
                  className="group flex h-full flex-col rounded-xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_18px_44px_-26px_rgba(38,64,47,0.4)]"
                >
                  <div className="flex items-center justify-center rounded-lg bg-linen/70 py-6 transition-colors group-hover:bg-linen">
                    <Preview />
                  </div>
                  <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-sage-deep">
                    {m.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink transition-colors group-hover:text-sage-deep">
                    {m.name}
                  </h3>
                  <p className="mt-2 flex-grow text-[15px] leading-relaxed text-ink/70">
                    {m.guide.definition}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/[0.08] pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink/45">
                      {m.dataLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-deep">
                      3D 체험하기
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-6">
          <MeasureRule className="text-sage" />
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 font-semibold text-sage-deep"
          >
            교구 가이드 전체 보기
            <span aria-hidden className="text-lg">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
