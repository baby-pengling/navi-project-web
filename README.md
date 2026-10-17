# Navi Landing Web

피그마 `Navi / <dev01> Onboarding / Landing`을 기준으로 만든 웹 랜딩 페이지입니다.

## 실행

```bash
npm install
npm run dev
```

## 환경 변수

`.env` 파일을 만들고 실제 배포 URL을 지정할 수 있습니다.

```bash
VITE_DOWNLOAD_URL=https://download.example.com/Navi.dmg
VITE_APP_URL=https://app.example.com/login
```

현재 다운로드 버튼의 기본 경로는 `/downloads/Navi.dmg`이며, 실제 DMG 호스팅이 준비되면 `VITE_DOWNLOAD_URL`로 교체합니다.

## 구성

- `src/main.jsx`: Header, Hero, Product mockup, Benefits 구성
- `src/styles.css`: 피그마 토큰과 반응형 레이아웃
- `public/assets`: 피그마에서 추출한 로고, 장식, 제품 mockup 에셋
