# 몬테소리 블로그 포스트 작성 가이드 (Blog Posting Guide)

montessoris.net 블로그는 0~6세 영유아 부모와 양육자를 대상으로, 정통 몬테소리 철학(AMI/AMS)에 기반한 실천적 양육 정보와 환경 구성법을 전달합니다. 본 가이드는 일관된 콘텐츠 품질, 독자 경험, 검색 엔진(SEO) 및 AI 검색(GEO) 인용 최적화를 위한 표준 지침입니다.

---

## 1. 파일 위치 및 명명 규칙

- **포스트 파일 경로**: `src/posts/{slug}.mdx`
- **대표 이미지 경로**: `public/images/blog/{slug}.jpg` (또는 `.png`)
- **파일명(slug) 컨벤션**:
  - 영문 소문자 케밥 케이스(`kebab-case`) 사용
  - 주제 핵심 키워드를 간결하게 포함 (예: `montessori-floor-bed.mdx`, `montessori-weaning-table.mdx`)

---

## 2. Frontmatter 규격 및 메타데이터

모든 게시글은 파일 최상단에 YAML Frontmatter를 포함해야 합니다. 빌드 시 `src/lib/posts.ts`의 Zod 스키마에 의해 유효성이 검증됩니다.

```yaml
---
title: "포스트 제목 (30~55자 내외 권장)"
date: "YYYY-MM-DD"
description: "검색 결과 및 SNS 공유 카드에 노출될 요약문 (80~150자 내외)"
image: "/images/blog/{slug}.jpg"
imageAlt: "이미지의 핵심 내용을 묘사하는 접근성/SEO용 대체 텍스트"
---
```

### 필드별 상세 지침

| 필드 | 필수 여부 | 지침 및 권장 사항 |
|---|:---:|---|
| `title` | **필수** | 독자의 핵심 페인포인트(Pain-point) 또는 질문을 직접 다루는 제목. 과도한 어그로/낚시성 제목 지양. |
| `date` | **필수** | `YYYY-MM-DD` 형식. 블로그 최신순 정렬 및 구조화 데이터(datePublished)에 사용됨. |
| `description` | **필수** | 글의 결론과 핵심 가치를 요약한 문장. 검색 스니펫에 노출되므로 클릭율(CTR)에 결정적 영향. |
| `image` | 선택 (강력 권장) | **16:9 비율** 고화질 이미지. 상세 페이지 Hero 이미지, 목록 썸네일, OpenGraph 카드에 자동 노출. |
| `imageAlt` | 선택 (`image` 있을 시 필수 권장) | 시각장애인 스크린리더 및 이미지 검색 엔진을 위한 설명적 텍스트 (단순 파일명 반복 금지). |

---

## 3. 본문 작성 및 포맷팅 가이드

### ① 도입부: 정의 Front-loading (GEO 최적화)
- AI 검색(Google AI Overviews, Perplexity 등)과 바쁜 부모 독자는 **상위 30% 영역**에서 핵심 답을 찾습니다.
- 서론에서 불필요한 사설을 길게 늘이지 않고, **첫 1~2개 문단(130~170 단어)** 내에 해당 글이 다루는 핵심 문제와 몬테소리적 해법을 완결된 문장으로 명확히 제시합니다.

### ② 헤딩(Heading) 위계 및 자동 목차
- **H1 (`#`) 사용 금지**: 포스트 제목이 페이지 최상단 `<h1>`으로 자동 렌더링됩니다.
- **H2 (`##`) 대주제**: 본문의 주요 챕터는 반드시 `##`로 작성합니다.
  - 본문 내 `##`와 `###`가 2개 이상 존재하면 **상단 목차(Table of Contents)가 자동 생성**됩니다.
- **H3 (`###`) 소주제**: 실천 팁, 단계별 방법, 세부 항목을 분류할 때 사용합니다.

### ③ 시각 자료 배치 원칙
- Frontmatter에 `image`가 등록되어 있으면 본문 최상단에 16:9 Hero Figure가 자동 표시됩니다. 따라서 **본문 첫 줄에 동일한 이미지를 중복 삽입하지 마세요.**
- 본문 중간에 추가 다이어그램이나 설명 사진이 필요한 경우에만 Markdown 이미지 문법을 사용합니다:
  ```markdown
  ![설명적 텍스트](/images/blog/sub-example.jpg)
  ```

### ④ 가독성 높은 Scannable 구조
- 핵심 키워드나 요점은 **볼드체**로 강조합니다.
- 순서가 있는 가이드는 **번호 목록 (`1. 2. 3.`)**, 나열 항목은 **불렛 포인트 (`-`)**를 적극 활용합니다.
- 긴 줄글보다는 3~4문장 단위로 문단을 분리하여 모바일 가독성을 확보합니다.

---

## 4. 몬테소리 교육학적 가이드라인 (AMI/AMS 기준)

1. **정통 몬테소리 용어 프레이밍 준수**:
   - 비-몬테소리 조어나 통속적 표현 대신 정확한 용어를 사용합니다.
     - *예:* "티처블 모먼트(Teachable Moment)" ❌ ➔ "민감기(Sensitive Period)", "제시(Presentation)" ⭕
     - *예:* "장난감 가지고 놀기" ❌ ➔ "교구 작업(Work)", "탐색 활동" ⭕
2. **역사적/이론적 사실의 정확성**:
   - 마리아 몬테소리 생애 및 역사적 사실 왜곡 방지 (예: "이탈리아 최초의 여의사" ❌ ➔ "이탈리아에서 의학 학위를 취득한 초기 여성 의사 중 한 명" ⭕).
3. **가정 친화적 실천 방안(Home-based Montessori)**:
   - 값비싼 전집이나 특정 브랜드 원목 교구 구매를 조장하지 않습니다.
   - 집안 환경을 아이 눈높이에 맞게 바꾸는 '준비된 환경(Prepared Environment)', 일상 물건을 활용한 실생활(Practical Life) 영역을 우선 권장합니다.
4. **존중과 관찰의 태도**:
   - 부모는 가르치는 '훈육자'가 아니라, 아이의 발달 단계를 조용히 지켜보고 적절한 환경을 마련해 주는 '관찰자 및 조력자'임을 일관되게 전달합니다.

---

## 5. 발행 전 셀프 체크리스트

- [ ] `src/posts/{slug}.mdx` 파일명이 올바른 영문 케밥 케이스인가?
- [ ] Frontmatter(`title`, `date`, `description`, `image`, `imageAlt`)가 모두 올바르게 입력되었는가?
- [ ] 대표 이미지 파일이 `public/images/blog/`에 16:9 비율로 저장되어 있는가?
- [ ] 본문 내에 H1(`#`)을 사용하지 않고 H2(`##`), H3(`###`) 위계를 지켰는가?
- [ ] 도입부 첫 문단에서 주제에 대한 핵심 결론/정의가 명확히 제시되었는가?
- [ ] 불필요하게 비싼 상업용 교구 구매를 유도하는 내용이 없는가?
- [ ] 터미널에서 검증 명령어 통과 여부:
  ```bash
  npm run lint
  npm run build
  ```

---

## 6. Git 및 배포 워크플로우

> [!IMPORTANT]
> **`main` 브랜치 직접 푸시(Direct Push) 절대 금지 (Branch Protection)**  
> 이 레포지토리는 보호 규칙에 따라 `main` 브랜치에 직접 푸시하는 것이 차단되어 있습니다.  
> 블로그 글 작성, 이미지 추가, 코드 및 문서 수정을 포함한 **모든 작업은 예외 없이 항시 작업 브랜치를 생성하고 Pull Request(PR)를 열어 승인 후 병합**해야 합니다.

1. **작업 브랜치 생성**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/blog-{주제-키워드}
   ```
2. **파일 작성 및 빌드 테스트 (필수)**:
   ```bash
   npm run lint && npm run build
   ```
3. **커밋 및 원격 푸시**:
   ```bash
   git add src/posts/ public/images/
   git commit -m "feat: 블로그 포스트 추가 - {포스트 제목}"
   git push -u origin feat/blog-{주제-키워드}
   ```
4. **Pull Request 생성**:
   ```bash
   gh pr create --repo ryan-log/montessoris-web --base main --title "feat: 블로그 포스트 - {포스트 제목}" --body "{작업 요약}"
   ```
5. **PR 승인 및 머지**:
   - `main` 브랜치 병합 시 GitHub Actions(`.github/workflows/deploy.yml`)가 트리거되어 운영 서버에 정적 페이지가 자동 배포됩니다.
6. **로컬 동기화 및 브랜치 정리**:
   ```bash
   git checkout main
   git pull origin main
   git branch -d feat/blog-{주제-키워드}
   git push origin --delete feat/blog-{주제-키워드} # 원격 브랜치 미삭제 시
   ```
