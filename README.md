# Pomollu GCA

[RisuAI](https://risuai.net) 플러그인 — **Gemini Code Assist API**를 채팅 완성 프로바이더로 통합합니다. Google 계정으로 인증하고 Gemini 모델을 RisuAI 채팅에서 바로 사용할 수 있습니다.

## 주요 기능

- **Gemini 채팅 프로바이더** — 스트리밍/비스트리밍 응답을 모두 지원합니다.
- **Google OAuth2 인증** — 자동 토큰 갱신 및 세션 관리.
- **모델 선택** — 요청 유형별(Chat, Memory, Emotion, Translate, Other) Gemini 모델 및 파라미터 구성.
- **도구 지원** — Google Search, Google Maps, URL context, 코드 실행 도구.
- **Acvus 템플릿 엔진** — 메시지 전·후처리를 위한 내장 템플릿 엔진.
- **설정 UI** — 인증, 모델 설정, 파라미터 튜닝, 백업/복원 모달.
- **자동 온보딩** — 첫 사용 시 Gemini Code Assist 프로젝트를 자동 프로비저닝.

## Acvus 문법

Pomollu GCA는 메시지 처리에 [Acvus](https://github.com/ArtBlnd/acvus) 템플릿 문법을 사용합니다.

### 기본 표현식

```acvus
{{-- 주석: 출력에 포함되지 않음 --}}

{{ @name }}                       {{-- 컨텍스트 참조 --}}
{{ @message.role }}               {{-- 필드 접근 --}}
{{ @text | trim }}                {{-- 파이프: trim(@text) --}}
{{ @text | trim | upper }}        {{-- 파이프 체이닝 --}}
```

### 반복

```acvus
{{ msg in @messages }}
  {{ @msg.role }}: {{ @msg.content }}
{{/}}
```

### 패턴 매칭

```acvus
{{ role = @message.role }}
{{ "user" = }}
  사용자 메시지입니다
{{ "assistant" = }}
  어시스턴트 메시지입니다
{{_}}
  기타 역할
{{/}}
```

### 람다 & 필터

```acvus
{{-- 사용자 메시지만 필터링 --}}
{{ @messages | filter(m -> m.role == "user") }}

{{-- 메시지 내용만 추출 --}}
{{ @messages | map(m -> m.content) | join("\n") }}

{{-- 메시지 수 --}}
{{ @messages | len }}
```

### 채팅 템플릿 예시

시스템 메시지 템플릿 (`system_template`):

```acvus
[시스템] {{ @content | trim }}
(총 {{ @message_count }}개 메시지)
```

사용자 메시지 템플릿 (`user_template`):

```acvus
{{ @content | replace_str("<br>", "\n") | trim }}
```

출력 후처리 템플릿 (`output_template`):

```acvus
{{ @content | trim }}
{{ thoughts = @thoughts | trim }}
{{ "" != }}

<Thoughts>
{{ @thoughts }}
</Thoughts>
{{/}}
```

### 내장 함수

| 분류 | 함수 |
|------|------|
| 타입 변환 | `to_string`, `to_int`, `to_float` |
| 문자열 | `trim`, `trim_start`, `trim_end`, `upper`, `lower`, `replace_str`, `split_str`, `contains_str`, `starts_with_str`, `ends_with_str`, `substring`, `len_str`, `repeat_str` |
| 리스트 | `len`, `filter`, `map`, `find`, `reduce`, `any`, `all`, `reverse`, `flatten`, `join`, `contains` |
| 유틸리티 | `unwrap` |

### 컨텍스트 변수

채팅 처리 시 다음 컨텍스트 변수를 사용할 수 있습니다:

| 변수 | 설명 |
|------|------|
| `@content` | 현재 메시지 내용 |
| `@role` | 메시지 역할 (`user`, `assistant`, `system`) |
| `@name` | 메시지 이름 |
| `@messages` | 전체 메시지 배열 |
| `@message_count` | 메시지 수 |
| `@input` | 출력 템플릿에서 전체 응답 텍스트 |
| `@thoughts` | 출력 템플릿에서 사고 과정 텍스트 |

## 빌드

```sh
npm install
npm run build
```

`dist/pomollu-gca.js` 파일이 생성됩니다. RisuAI에 플러그인으로 임포트하여 사용합니다.

## 프로젝트 구조

```
src/
├── main.ts            # 플러그인 진입점
├── plugin.ts          # 플러그인 메타데이터 및 인자 정의
├── api.ts             # RisuAI API 인터페이스
├── acvus/             # Acvus 템플릿 엔진 (렉서, 파서, 평가기)
├── auth/              # Google OAuth2 인증
├── chat/              # 채팅 요청 처리, 포매팅, 스트리밍
├── gca/               # Gemini Code Assist 프로젝트 관리
├── model/             # 모델 선택 및 파라미터 저장
├── shared/            # 공유 타입, 유틸리티, 로깅, 이벤트, 백업
└── ui/                # Svelte UI 컴포넌트 (모달, 설정, 팝업)
```

## 라이선스

이 프로젝트는 **[Acvus License](LICENSE)**로 제공됩니다.
