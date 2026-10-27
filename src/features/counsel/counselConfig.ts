export const SITE_CODE = 'MONTESSORIS';

// 상담 메시지 한 건의 최대 길이. common-api 의 검증(@Size(max = 2000))과 같은 값이고,
// 서버와 textarea maxLength 모두 UTF-16 길이(String.length)로 센다.
export const MAX_MESSAGE_LENGTH = 2000;

function resolveApiBaseUrl(): string {
  const injected = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
  if (injected) return injected.replace(/\/+$/, '');
  if (
    typeof window !== 'undefined' &&
    /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
  ) {
    return 'http://localhost:8080';
  }
  return 'https://ai-api.trigger.kr';
}

export const API_BASE_URL = resolveApiBaseUrl();

export const counselConfig = { SITE_CODE, API_BASE_URL };
