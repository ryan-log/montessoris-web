# montessoris.net

몬테소리 교육 정보, 블로그, 24시간 AI 육아 상담 위젯을 제공하는 한국어 정적 웹사이트입니다.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS
- MDX blog posts with `gray-matter`
- Static export via `next.config.mjs`

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

`npm run build`는 `output: "export"` 설정에 따라 정적 산출물을 `out/`에 생성합니다.

## Project Structure

- `src/app`: App Router routes, metadata, sitemap, robots
- `src/features`: page-level feature components
- `src/components`: shared layout and UI components
- `src/lib`: site config, dictionaries, metadata helpers, structured data, post loading
- `src/posts`: MDX blog content
- `public`: static assets and `ads.txt`

## Content

블로그 글은 `src/posts/*.mdx`에 추가합니다. 각 글에는 아래 frontmatter가 필요합니다.

```mdx
---
title: "글 제목"
date: "2026-06-10"
description: "검색 결과와 목록에 표시될 설명"
---
```

빌드 시 `src/lib/posts.ts`가 frontmatter를 검증하고, `/blog/[slug]/` 정적 페이지와 sitemap 항목을 생성합니다.

상세한 글 작성 원칙, Frontmatter 스펙, 이미지 규격, 교육학적 가이드라인은 [블로그 작성 가이드](docs/BLOG_POSTING_GUIDE.md)를 참고하세요.

## Counseling API

상담 위젯은 브라우저에서 외부 API를 직접 호출합니다.

API base URL 우선순위:

1. `NEXT_PUBLIC_API_BASE_URL`
2. 로컬 접속 시 `http://localhost:8080`
3. 운영 기본값 `https://ai-api.trigger.kr`

관련 파일:

- `src/features/counsel/counselConfig.ts`
- `src/features/counsel/chatApi.ts`
- `src/features/counsel/chatStorage.ts`
- `src/features/counsel/useChatSession.ts`

## SEO and Analytics

- 공통 사이트 정보: `src/lib/site.ts`
- 페이지 메타데이터 헬퍼: `src/lib/metadata.ts`
- JSON-LD: `src/lib/structured-data.ts`
- sitemap: `src/app/sitemap.ts`
- robots: `src/app/robots.ts`
- RSS: `src/app/rss.xml/route.ts`
- Google AdSense/GTM: `src/app/layout.tsx`

### Google AdSense

운영 빌드는 공통 레이아웃의 `<head>`에서 게시자 `ca-pub-1586372003132738`의 애드센스 스크립트를 한 번 로드합니다. `npm run dev`에서는 광고를 요청하지 않습니다. `public/ads.txt`도 같은 게시자 ID를 선언합니다.

광고 게재에는 애드센스 관리 화면에서 `montessoris.net`의 사이트 상태가 준비됨이어야 하며, **광고 → montessoris.net → 자동 광고**가 켜져 있어야 합니다. [자동 광고 설정 안내](https://support.google.com/adsense/answer/9261307?hl=ko)에 따르면 설정 적용 후 광고 표시에 최대 1시간이 걸릴 수 있습니다.

4개월 이상 광고가 게재되지 않으면 비활성 경고가 표시되고, 5개월을 넘기면 재검토가 필요합니다. 재검토가 필요한 경우 배포 후 **사이트 → montessoris.net → 검토 요청**을 진행합니다. [비활성 사이트 안내](https://support.google.com/adsense/answer/12171038?hl=ko)

## Git & Branch Strategy

> **중요 (Branch Protection):** 이 레포지토리는 `main` 브랜치에 직접 푸시(Direct Push)하는 것이 차단되어 있습니다.  
> 기능 개발, 버그 수정, 블로그 포스팅, 문서 수정을 포함한 **모든 작업은 반드시 별도 브랜치를 생성하여 작업하고 Pull Request(PR)를 통해 병합**해야 합니다.

1. **작업 브랜치 생성**: `git checkout main && git pull origin main && git checkout -b feat/작업명`
2. **사전 검증**: `npm run lint && npm run build` (58개 정적 페이지 빌드 필수 확인)
3. **커밋 및 푸시**: `git push -u origin feat/작업명`
4. **Pull Request(PR) 생성**: `gh pr create` 또는 GitHub 웹에서 PR 생성
5. **PR 승인 및 머지**: 승인 후 `main`에 Squash/Merge 진행
6. **로컬 동기화 및 정리**:
   ```bash
   git checkout main && git pull origin main
   git branch -d feat/작업명
   ```

## Deployment

`main` 브랜치 push/merge 시 `.github/workflows/deploy.yml`이 SSH로 배포 서버의 forced command를 호출합니다. 실제 배포 스크립트는 서버의 `/usr/local/bin/deploy-montessoris` 쪽에서 관리됩니다.

## Notes

- 현재 사이트는 한국어 단일 로케일입니다.
- `/contact` 페이지는 남아 있지만 푸터에서는 노출하지 않습니다.
- 정적 export 사이트라 서버 API Route에 의존하지 않습니다.
