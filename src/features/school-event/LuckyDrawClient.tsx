"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"
import {
  PRINT_LAYOUT,
  PRIZES,
  SHEETS,
  TICKETS,
  type LuckyDrawTicket,
} from "./luckyDraw"
import styles from "./LuckyDraw.module.css"

const { page, ticket, columns, rows } = PRINT_LAYOUT

const layoutVars = {
  "--page-width": `${page.widthMm}mm`,
  "--page-height": `${page.heightMm}mm`,
  "--page-margin": `${page.marginMm}mm`,
  "--ticket-width": `${ticket.widthMm}mm`,
  "--ticket-height": `${ticket.heightMm}mm`,
  "--columns": columns,
} as CSSProperties

// @page와 body 배경은 전역 규칙이라 CSS Module에 둘 수 없다. 인라인 <style>로 두면
// 이 페이지가 떠 있는 동안에만 적용되고, 다른 페이지로 이동하면 함께 사라진다.
const printCss = `@page { size: ${page.widthMm}mm ${page.heightMm}mm; margin: ${page.marginMm}mm; }
@media print { body { background: #fff !important; } }`

const HEART_ID = "lucky-draw-heart"

const ticketSize = `${ticket.widthMm / 10}×${ticket.heightMm / 10}cm`

const formatCount = (n: number) => n.toLocaleString("ko-KR")

export default function LuckyDrawClient() {
  return (
    <main style={layoutVars}>
      <style>{printCss}</style>
      <HeartSymbol />

      <header className="sticky top-0 z-20 border-b border-ink/[0.08] bg-paper/85 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight text-ink"
            >
              몬테소리
            </Link>
            <span aria-hidden className="hidden h-5 w-px bg-ink/15 sm:block" />
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-sage-deep sm:block">
              School Event
            </span>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-md bg-sage px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-deep"
          >
            인쇄하기
          </button>
        </div>
      </header>

      <div className="print:hidden">
        <PageHeader
          eyebrow="학교행사 · Lucky Draw"
          title="행운권 뽑기 도안"
          subtitle={`${ticketSize} 접이식 행운권 ${formatCount(TICKETS.length)}장을 A4 ${SHEETS.length}장에 나눠 담았어요.\n위쪽 겉면엔 캐릭터 행운권, 아래쪽 안쪽면엔 당첨 결과가 찍혀요.`}
        />
        <Overview />
      </div>

      <div className={styles.preview}>
        {SHEETS.map((sheet, i) => (
          <div key={i} className={styles.page}>
            <p className="mb-2.5 font-mono text-xs tracking-[0.14em] text-ink/50 print:hidden">
              {i + 1} / {SHEETS.length}
            </p>
            <div className={styles.sheet}>
              {sheet.map((item, j) => (
                <Ticket key={j} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

function Overview() {
  const stats = [
    { label: "행운권", value: `${formatCount(TICKETS.length)}장` },
    { label: "A4 용지", value: `${SHEETS.length}장` },
    { label: `한 장에 (${columns}×${rows})`, value: `${columns * rows}개` },
    { label: "행운권 크기", value: ticketSize },
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white px-5 py-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
              {stat.label}
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-ink">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-sage-deep">
            Prizes
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">
            등수별 수량
          </h2>
          <table className="mt-5 w-full text-left text-sm">
            <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
              <tr className="border-b border-ink/10">
                <th scope="col" className="pb-2 font-normal">등수</th>
                <th scope="col" className="pb-2 font-normal">상품</th>
                <th scope="col" className="pb-2 text-right font-normal">수량</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/[0.06]">
              {PRIZES.map((prize) => (
                <tr key={prize.rank}>
                  <th
                    scope="row"
                    className={`py-2.5 font-semibold ${prize.blank ? "text-ink/50" : "text-[#e63946]"}`}
                  >
                    {prize.rank}
                  </th>
                  <td className="py-2.5 text-ink/70">{prize.desc}</td>
                  <td className="py-2.5 text-right font-mono tabular-nums">
                    {formatCount(prize.count)}장
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-ink/15">
                <th scope="row" colSpan={2} className="pt-3 font-semibold text-ink">
                  합계
                </th>
                <td className="pt-3 text-right font-mono font-semibold tabular-nums">
                  {formatCount(TICKETS.length)}장
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="rounded-xl bg-linen p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-sage-deep">
            Print Guide
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">
            인쇄 전에 확인하세요
          </h2>
          <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-ink/75 marker:font-mono marker:text-sage-deep">
            <li>
              위의 <strong className="text-ink">인쇄하기</strong> 버튼(또는 Ctrl+P · ⌘P)을
              누르세요.
            </li>
            <li>
              용지는 <strong className="text-ink">A4</strong>, 배율과 여백은{" "}
              <strong className="text-ink">기본값</strong> 그대로 둬야 행운권이 정확히{" "}
              {ticketSize}로 나와요.
            </li>
            <li>
              <strong className="text-ink">머리글과 바닥글</strong>은 꺼 주세요.
            </li>
            <li>바깥 회색 점선을 따라 자르고, 가운데 점선에서 반으로 접어요.</li>
            <li>
              얇은 종이는 접어도 결과가 비칠 수 있어요. 두께감 있는 용지(120g 이상)를
              권해요.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

function Ticket({ theme, prize }: LuckyDrawTicket) {
  return (
    <div className={styles.ticket}>
      <div className={styles.outer}>
        <svg aria-hidden className={styles.heart} style={{ color: theme.color }}>
          <use href={`#${HEART_ID}`} />
        </svg>
        <span>
          {theme.name} 행운권
          <br />
          OPEN!
        </span>
      </div>
      <div className={prize.blank ? `${styles.inner} ${styles.blank}` : styles.inner}>
        <div className={styles.rank}>{prize.rank}</div>
        <div className={styles.desc}>{prize.desc}</div>
      </div>
    </div>
  )
}

// 원본 도안의 하트 이모지를 SVG로 바꿨다 — 🩵·🩷(이모지 15.0)는 Windows 10 같은 구형 OS에서
// □로 깨지고, 이모지는 OS마다 모양도 달라 인쇄 결과가 들쭉날쭉하다.
// 하트 하나를 심볼로 두고 1,200장이 <use>로 참조해 HTML 크기를 줄인다.
function HeartSymbol() {
  return (
    <svg aria-hidden className="hidden">
      <symbol id={HEART_ID} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </symbol>
    </svg>
  )
}
