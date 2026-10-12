export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

/**
 * 한국어와 영문, 숫자를 모두 지원하는 안전하고 일관된 헤딩 ID(앵커 슬러그)를 생성합니다.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // 마크다운 링크 문법 [text](url) 제거
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // 볼드, 이탤릭 등 마크다운 기호 제거
    .replace(/[*_`]/g, '')
    // 한글, 영문, 숫자, 공백, 하이픈만 유지
    .replace(/[^\w\s가-힣-]/g, '')
    // 공백을 하이픈으로 치환
    .replace(/\s+/g, '-')
    // 연속된 하이픈 단일화
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * MDX 원문에서 H2(## ) 및 H3(### ) 헤딩을 추출하여 목차 항목 목록을 반환합니다.
 */
export function extractHeadings(content: string): TocItem[] {
  if (!content) return []

  const lines = content.split('\n')
  const headings: TocItem[] = []
  let inCodeBlock = false

  for (const line of lines) {
    const trimmed = line.trim()

    // 코드 블록 내부의 # 기호는 무시
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    // H2 헤딩
    if (trimmed.startsWith('## ')) {
      const rawText = trimmed.replace(/^##\s+/, '').trim()
      if (rawText) {
        headings.push({
          id: slugifyHeading(rawText),
          text: rawText.replace(/[*_`]/g, ''),
          level: 2,
        })
      }
    }
    // H3 헤딩
    else if (trimmed.startsWith('### ')) {
      const rawText = trimmed.replace(/^###\s+/, '').trim()
      if (rawText) {
        headings.push({
          id: slugifyHeading(rawText),
          text: rawText.replace(/[*_`]/g, ''),
          level: 3,
        })
      }
    }
  }

  return headings
}
