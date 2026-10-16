// Plain-data registry for the /experience material scenes.
// IMPORTANT: no three.js import here — this file is used by server components,
// generateStaticParams, and sitemap.ts, so it must stay cheap and bundle-safe.

export type MaterialSlug = "pink-tower" | "brown-stair" | "number-rods"

export type MaterialCopy = {
  start: string
  progressPraise: string
  successChip: string
  errorTooEarly: string
  errorOther: string
  completeTitle: string
  completeBody: string
}

export type DemoCopy = {
  intro: string
  firstPiece: string
  secondPiece: string
  mistakeTry: string
  mistakeNotice: string
  mistakeRecover: string
  steadyFlow: string
  finishing: string
}

export type MaterialFaq = {
  question: string
  answer: string
}

export type MaterialGuide = {
  definition: string
  purpose: string
  homeActivity: string
  parentTip: string
  commonMistake: string
  faqs: MaterialFaq[]
  keywords: string[]
}

export type MaterialMeta = {
  slug: MaterialSlug
  name: string // 분홍탑
  area: string // 감각영역 | 수영역
  age: string // 3–6세 | 4–6세
  eyebrow: string // HUD + shelf mono eyebrow, e.g. "감각영역 · 3–6세"
  pieceCount: number // drives TOTAL / STEP / progressbar
  concept: string // shelf one-liner
  dataLabel: string // "10 조각 · 크기 순서"
  metaDescription: string
  guide: MaterialGuide
  copy: MaterialCopy
  demoCopy: DemoCopy
}

// Order = didactic sensorial → math (single source of truth for shelf + routing).
export const MATERIALS: MaterialMeta[] = [
  {
    slug: "pink-tower",
    name: "분홍탑",
    area: "감각영역",
    age: "3–6세",
    eyebrow: "감각영역 · 3–6세",
    pieceCount: 10,
    concept: "크기와 차원의 감각",
    dataLabel: "10 조각 · 크기 순서",
    metaDescription:
      "몬테소리 분홍탑을 3D로 직접 쌓아보는 체험. 아이가 큰 것과 작은 것을 손끝으로 느끼며 차분히 집중하는 시간을 만나보세요.",
    guide: {
      definition:
        "몬테소리 분홍탑은 크기가 다른 10개의 분홍 정육면체를 쌓으며 아이가 큰 것과 작은 것을 눈과 손으로 느껴보는 교구입니다.",
      purpose:
        "아이는 하나씩 들어보고 쌓아보며 몸으로 차이를 알아갑니다. 잘하고 싶어서 조용히 몰입하는 표정도 함께 만날 수 있어요.",
      homeActivity:
        "집에서는 크기가 다른 블록, 컵, 상자를 큰 것부터 작은 것까지 쌓아보세요. 무너져도 괜찮고, 다시 쌓는 시간이 더 소중합니다.",
      parentTip:
        "처음에는 엄마가 천천히 한 번 보여준 뒤 아이 손이 스스로 움직일 때까지 잠깐 기다려 주세요.",
      commonMistake:
        "아이보다 먼저 답을 말해주고 싶은 순간이 와도 한 박자만 참아보세요. 아이가 다시 바라보는 그 얼굴이 이미 배우고 있다는 신호예요.",
      faqs: [
        {
          question: "몬테소리 분홍탑은 몇 세부터 사용할 수 있나요?",
          answer:
            "대체로 3세 전후부터 좋아합니다. 아이가 물건을 조심히 들고, 큰 것과 작은 것을 골라보려 할 때 자연스럽게 꺼내 주세요.",
        },
        {
          question: "분홍탑은 무엇을 배우는 교구인가요?",
          answer:
            "크기 차이를 손끝으로 느끼고, 어디에 놓으면 안정적인지 스스로 알아갑니다. 조용히 집중하는 힘도 함께 자라요.",
        },
        {
          question: "집에 분홍탑이 없으면 어떻게 대체할 수 있나요?",
          answer:
            "크기가 다른 블록, 종이컵, 작은 상자를 큰 것부터 작은 것까지 쌓아보세요. 아이가 다시 무너뜨리고 다시 쌓아도 충분히 좋은 놀이예요.",
        },
      ],
      keywords: [
        "몬테소리 분홍탑",
        "분홍탑 사용법",
        "몬테소리 감각 교구",
        "3세 몬테소리 교구",
      ],
    },
    copy: {
      start: "가장 큰 정육면체부터 찾아, 양탄자 가운데에 살며시 놓아보세요.",
      progressPraise:
        "잘하고 있어요. 이제 남은 것 중에서 가장 큰 정육면체를 위에 올려보세요.",
      successChip: "크기 순서가 맞아요",
      errorTooEarly: "이보다 더 큰 정육면체를 먼저 놓아볼까요?",
      errorOther: "조금 더 작은 정육면체의 차례예요.",
      completeTitle: "탑을 완성했어요",
      completeBody:
        "열 개의 정육면체를 가장 큰 것부터 차곡차곡 쌓아 올렸어요. 손끝으로 크기의 차이를 느끼며 스스로 찾아낸 순서예요. 그 고요한 집중의 순간이 아이를 자라게 합니다.",
    },
    demoCopy: {
      intro: "아이가 양탄자 둘레에 놓인 열 개의 분홍 정육면체를 천천히 둘러봅니다.",
      firstPiece: "가장 크고 묵직한 10번 정육면체를 두 손으로 들어 양탄자 한가운데에 놓습니다.",
      secondPiece: "남은 조각들을 눈으로 비교한 뒤, 그다음으로 큰 9번 정육면체를 살며시 올립니다.",
      mistakeTry: "이번엔 조금 작은 6번 조각을 집어 위에 올려보네요. 어떻게 될까요?",
      mistakeNotice: "어? 턱이 너무 넓게 남는 걸 아이 스스로 눈으로 발견했어요 (오류의 정정).",
      mistakeRecover: "엄마가 말해주지 않아도 스스로 6번을 내려놓고, 알맞은 8번 조각을 찾아 올립니다.",
      steadyFlow: "이제 손끝의 감각과 눈의 질서가 맞물려, 일정한 리듬으로 몰입하며 쌓아 올립니다.",
      finishing: "가장 작은 1cm 정육면체까지 꼭대기에 조심스레 올리며 스스로 해낸 기쁨을 만납니다.",
    },
  },
  {
    slug: "brown-stair",
    name: "갈색계단",
    area: "감각영역",
    age: "3–6세",
    eyebrow: "감각영역 · 3–6세",
    pieceCount: 10,
    concept: "두께와 차원의 감각",
    dataLabel: "10 조각 · 두께 순서",
    metaDescription:
      "몬테소리 갈색계단을 3D로 직접 만들어보는 체험. 아이가 두꺼운 것과 얇은 것을 손으로 느끼며 차근차근 놓아봅니다.",
    guide: {
      definition:
        "몬테소리 갈색계단은 두께가 다른 10개의 갈색 기둥을 나란히 놓으며 아이가 손으로 차이를 느껴보는 교구입니다.",
      purpose:
        "아이는 두 손으로 들어보고 옆에 놓아보며 '이건 더 묵직하네', '이건 더 얇네' 하는 감각을 자기 안에 쌓아갑니다.",
      homeActivity:
        "집에서는 두께가 다른 책, 상자, 쿠션을 두꺼운 것부터 얇은 것까지 나란히 놓아보세요. 계단 모양이 만들어지는 순간 아이가 꽤 뿌듯해합니다.",
      parentTip:
        "두께를 말로 오래 설명하기보다 아이가 양손으로 들어보고 옆면을 들여다볼 시간을 주세요.",
      commonMistake:
        "빨리 맞히게 도와주고 싶어도 서두르지 않아도 괜찮아요. 아이에게는 만져보고 망설이는 시간이 놀이의 가장 맛있는 부분입니다.",
      faqs: [
        {
          question: "몬테소리 갈색계단은 어떤 능력을 돕나요?",
          answer:
            "두꺼운 것과 얇은 것을 손으로 느끼고, 차례를 생각하며 놓아보는 힘을 길러줍니다. 아이가 자기 손을 더 믿게 되는 놀이예요.",
        },
        {
          question: "갈색계단은 몇 세 아이에게 적합한가요?",
          answer:
            "대체로 3세부터 6세 아이가 좋아합니다. 물건을 줄 세우거나 큰 것과 작은 것을 골라보는 시기에 특히 잘 맞아요.",
        },
        {
          question: "갈색계단을 집에서 대체할 수 있나요?",
          answer:
            "두께가 다른 책이나 상자를 꺼내 두꺼운 것부터 얇은 것까지 놓아보세요. 아이가 직접 고르고 옮기는 것만으로도 충분합니다.",
        },
      ],
      keywords: [
        "몬테소리 갈색계단",
        "갈색계단 사용법",
        "몬테소리 두께 교구",
        "집에서 몬테소리 감각 활동",
      ],
    },
    copy: {
      start: "가장 두꺼운 기둥부터 찾아 바닥에 나란히 놓아보세요.",
      progressPraise:
        "잘하고 있어요. 남은 것 중 가장 두꺼운 기둥을 옆에 이어 놓아보세요.",
      successChip: "두께 순서가 맞아요",
      errorTooEarly: "더 두꺼운 기둥을 먼저 놓아볼까요?",
      errorOther: "조금 더 얇은 기둥 차례예요.",
      completeTitle: "계단을 완성했어요",
      completeBody:
        "열 개의 기둥을 두께 순서대로 나란히 놓아 넓은 계단을 완성했어요. 두께의 작은 차이를 눈과 손끝으로 하나하나 가늠하며 스스로 만들어낸 그 집중의 시간이 아이를 자라게 합니다.",
    },
    demoCopy: {
      intro: "길이는 모두 같지만 두께가 서로 다른 열 개의 갈색 사각기둥을 살펴봅니다.",
      firstPiece: "가장 두껍고 묵직한 첫 번째 기둥을 양손으로 감싸 쥐어 왼쪽 끝에 반듯하게 놓습니다.",
      secondPiece: "손아귀에 잡히는 부피감을 느끼며, 바로 다음 두께의 기둥을 빈틈없이 이어 붙입니다.",
      mistakeTry: "조금 얇은 6번 기둥을 가져와 옆에 대어 보네요.",
      mistakeNotice: "계단 높이가 갑자기 푹 꺼지는 단차를 보고 아이가 잠시 손을 멈춥니다 (오류의 정정).",
      mistakeRecover: "스스로 기둥을 제자리에 돌려놓고, 매끄러운 계단 흐름을 만드는 8번 기둥을 찾아 놓습니다.",
      steadyFlow: "한 계단씩 일정하게 낮아지는 시각적 리듬을 따라 차분하게 기둥을 배열합니다.",
      finishing: "가장 얇은 마지막 기둥까지 가지런히 맞추며 고요하고 단단한 계단을 완성합니다.",
    },
  },
  {
    slug: "number-rods",
    name: "숫자막대",
    area: "수영역",
    age: "4–6세",
    eyebrow: "수영역 · 4–6세",
    pieceCount: 10,
    concept: "길이와 수량의 연결",
    dataLabel: "10 조각 · 길이 순서",
    metaDescription:
      "몬테소리 숫자막대를 3D로 직접 배열해보는 체험. 아이가 길고 짧은 막대를 놓으며 수를 손으로 느껴봅니다.",
    guide: {
      definition:
        "몬테소리 숫자막대는 길이가 다른 10개의 막대를 놓으며 아이가 숫자를 외우기 전에 양을 먼저 느껴보는 교구입니다.",
      purpose:
        "아이는 막대 길이를 눈으로 보고 손으로 옮기며 '하나 더 길다', '하나 더 짧다'를 몸으로 알아갑니다. 숫자가 조금 덜 낯설어지는 시간이에요.",
      homeActivity:
        "집에서는 색 테이프를 붙인 종이 막대나 블록 줄을 1칸부터 10칸까지 만들어보세요. 아이가 직접 세고 놓아보면 숫자가 놀이처럼 다가옵니다.",
      parentTip:
        "막대를 놓을 때 왼쪽 끝을 맞추고, 한 칸씩 달라지는 모습을 아이가 천천히 바라보게 해 주세요.",
      commonMistake:
        "숫자 이름을 빨리 외우게 하고 싶은 마음이 들어도 먼저 길이와 양을 충분히 만지게 해 주세요. 수학은 아이 손끝에서 더 편안하게 시작됩니다.",
      faqs: [
        {
          question: "몬테소리 숫자막대는 몇 세부터 사용하나요?",
          answer:
            "대체로 4세 전후부터 좋아합니다. 아이가 길고 짧은 것에 관심을 보이거나 숫자를 세고 싶어 할 때 꺼내보세요.",
        },
        {
          question: "숫자막대는 무엇을 배우는 교구인가요?",
          answer:
            "1부터 10까지가 단순한 말이 아니라 길이와 양으로 느껴질 수 있게 도와줍니다. 아이가 숫자를 손으로 만나는 놀이예요.",
        },
        {
          question: "숫자막대 없이 집에서 할 수 있는 활동은 무엇인가요?",
          answer:
            "색 테이프를 붙인 종이 막대, 블록 줄, 빨대 묶음으로 1칸부터 10칸까지 만들어보세요. 완벽하지 않아도 아이에게는 충분히 재미있는 숫자 놀이가 됩니다.",
        },
      ],
      keywords: [
        "몬테소리 숫자막대",
        "숫자막대 사용법",
        "몬테소리 수학 교구",
        "4세 몬테소리 수 활동",
      ],
    },
    copy: {
      start:
        "가장 긴 막대를 찾아 매트 아래쪽에 가지런히 놓아보세요. 빨강과 파랑 칸이 모두 열 칸인 막대예요.",
      progressPraise:
        "잘하고 있어요. 방금 놓은 막대보다 딱 한 칸 짧은 막대를 찾아, 왼쪽 끝을 맞춰 바로 위에 놓아보세요. 칸을 세어 보면 금방 찾을 수 있어요.",
      successChip: "딱 한 칸 짧아요",
      errorTooEarly:
        "그 막대는 조금 뒤에 놓을 거예요. 남은 것 중에서 가장 긴 막대를 먼저 찾아볼까요?",
      errorOther: "아직 이 자리는 아니에요. 왼쪽 끝을 맞추고 한 칸씩 짧아지게 놓아볼까요?",
      completeTitle: "계단이 완성됐어요",
      completeBody:
        "한 칸씩 짧아지는 열 개의 막대로 곧은 계단을 만들었어요. 왼쪽 끝을 맞추고 칸을 하나씩 세는 동안, 아이는 '수'가 곧 길이이고 양이라는 것을 손으로 느낍니다. 스스로 순서를 찾아낸 그 고요한 집중이 아이를 자라게 합니다.",
    },
    demoCopy: {
      intro: "빨강과 파랑 마디로 나뉜 열 개의 숫자막대를 바라보며 길이의 차이를 가늠합니다.",
      firstPiece: "가장 긴 10막대의 양 끝을 두 손으로 잡고, 왼쪽 빨간 끝을 기준선에 맞춰 내려놓습니다.",
      secondPiece: "딱 한 마디 짧은 9막대를 찾아 왼쪽 끝을 나란히 맞추어 바로 위에 배열합니다.",
      mistakeTry: "이번엔 6막대를 먼저 가져와 9막대 위에 대어 보네요.",
      mistakeNotice: "오른쪽 계단 끝이 한 칸이 아니라 세 칸이나 비는 걸 눈으로 확인합니다 (오류의 정정).",
      mistakeRecover: "스스로 6막대를 내려놓고, 빨강·파랑 마디를 세어 8막대를 정확히 찾아옵니다.",
      steadyFlow: "하나씩 줄어드는 마디의 질서를 느끼며 막대를 차곡차곡 정렬해 나갑니다.",
      finishing: "마지막 빨간 1막대까지 꼭대기에 맞추며 1부터 10까지의 수량을 눈과 손으로 완성합니다.",
    },
  },
]

export const getMaterial = (slug: string): MaterialMeta | undefined =>
  MATERIALS.find((m) => m.slug === slug)
