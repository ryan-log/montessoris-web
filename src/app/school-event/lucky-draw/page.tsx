import LuckyDrawClient from "@/features/school-event/LuckyDrawClient"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "학교 행사 행운권 뽑기 도안",
  description:
    "2×4cm 접이식 행운권을 A4 용지에 바로 인쇄하는 학교 행사 뽑기 도안입니다.",
  path: "/school-event/lucky-draw/",
  // 행사용 인쇄 도구 — 몬테소리 검색 노출 대상이 아니라 사이트맵·메뉴에도 넣지 않는다.
  robots: { index: false, follow: true },
})

export default function LuckyDrawPage() {
  return <LuckyDrawClient />
}
