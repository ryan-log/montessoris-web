export interface AuthorProfile {
  name: string
  role: string
  organization: string
  bio: string
  credentials: string[]
  expertise: string[]
}

export const defaultAuthor: AuthorProfile = {
  name: "몬테소리스 에디토리얼 팀",
  role: "몬테소리 교육 & 아동 발달 리서치 그룹",
  organization: "montessoris.net",
  bio: "마리아 몬테소리의 정통 교육 철학과 유아 발달 이론을 바탕으로, 0~6세 아이의 자율성과 독립심을 기르는 준비된 환경과 교구 활용법을 연구·검증합니다. 시중의 유행성 장난감과 차별화된 정통 몬테소리 교육의 본질을 전달합니다.",
  credentials: [
    "AMI/AMS 몬테소리 표준 철학 및 교구 가이드라인 교차 검증",
    "0~6세 감각·일상·언어·수학 영역별 발달 적합성 검토",
  ],
  expertise: ["몬테소리 교구 분석", "홈 몬테소리 환경 구성", "발달 민감기별 부모 코칭"],
}
