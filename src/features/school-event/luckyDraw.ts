/**
 * 학교 행사 행운권 뽑기 도안 (/school-event/lucky-draw).
 *
 * 행운권 한 장 = 위 2×2cm 겉면(캐릭터 행운권) + 아래 2×2cm 안쪽면(당첨 결과).
 * 수량·상품을 바꾸려면 PRIZES만 고치면 된다 — 시트 수와 화면 요약은 여기서 계산된다.
 */

export type LuckyDrawTheme = {
  name: string
  /** 겉면 하트 색. 원본 도안의 캐릭터별 하트 이모지 색을 그대로 옮겼다. */
  color: string
}

export type LuckyDrawPrize = {
  rank: string
  desc: string
  count: number
  /** 꽝 — 등수를 회색으로 찍는다. */
  blank?: boolean
}

export type LuckyDrawTicket = {
  theme: LuckyDrawTheme
  prize: LuckyDrawPrize
}

// 겉면 캐릭터 6종을 순서대로 돌려가며 찍는다.
export const THEMES: LuckyDrawTheme[] = [
  { name: "쿠로미", color: "#AA8ED6" }, // 💜
  { name: "시나모롤", color: "#74C0F0" }, // 🩵
  { name: "폼폼푸린", color: "#F4C534" }, // 💛
  { name: "마이멜로디", color: "#F59AB7" }, // 🩷
  { name: "포차코", color: "#77B255" }, // 💚
  { name: "헬로키티", color: "#DD2E44" }, // ❤️
]

// 등수별 수량 (총 1,200장). 꽝은 나머지 수량.
export const PRIZES: LuckyDrawPrize[] = [
  { rank: "★ 1등 ★", desc: "특급 선물", count: 5 },
  { rank: "★ 2등 ★", desc: "대형 인형", count: 15 },
  { rank: "★ 3등 ★", desc: "학용품 세트", count: 50 },
  { rank: "★ 4등 ★", desc: "맛있는 간식", count: 200 },
  { rank: "다음 기회에", desc: "으쌰으쌰!", count: 930, blank: true },
]

// 인쇄 규격(A4 세로, 여백 10mm, 행운권 2×4cm)의 유일한 출처.
// 스타일은 이 값을 CSS 변수와 @page 규칙으로 받아 쓴다.
const page = { widthMm: 210, heightMm: 297, marginMm: 10 }
const ticket = { widthMm: 20, heightMm: 40 }

export const PRINT_LAYOUT = {
  page,
  ticket,
  columns: Math.floor((page.widthMm - page.marginMm * 2) / ticket.widthMm), // 9
  rows: Math.floor((page.heightMm - page.marginMm * 2) / ticket.heightMm), // 6
}

const ticketsPerSheet = PRINT_LAYOUT.columns * PRINT_LAYOUT.rows

function buildTickets() {
  const tickets: LuckyDrawTicket[] = []
  for (const prize of PRIZES) {
    for (let i = 0; i < prize.count; i++) {
      tickets.push({ prize, theme: THEMES[tickets.length % THEMES.length] })
    }
  }
  return tickets
}

export const TICKETS = buildTickets()

// 시트 하나 = A4 한 쪽. 브라우저의 자동 페이지 나눔에 맡기지 않고 직접 나눠서
// 어떤 브라우저로 인쇄해도 행운권 줄이 쪽 경계에서 잘리지 않게 한다.
export const SHEETS = Array.from(
  { length: Math.ceil(TICKETS.length / ticketsPerSheet) },
  (_, i) => TICKETS.slice(i * ticketsPerSheet, (i + 1) * ticketsPerSheet)
)
