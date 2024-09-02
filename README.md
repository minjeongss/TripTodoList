# Trip Todo List 🚀

## 소개

가고 싶은 여행지 목록을 관리할 수 있는 서비스입니다.

여행지 생성, 조회, 삭제를 진행할 수 있습니다.

## 기술

- 개발: React
- 배포: Github Pages

## 사용법

### 시작

```
npm create vite
npm i
npm run dev
```

### 빌드

- 설치

```
npm install gh-pages --save-dev
```

- vite.config.js 수정

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TripTodoList/',  // 해당 부분 추가
})
```

- package.json 수정

```
"homepage": "https://minjeongss.github.io/TripTodoList",

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

- 배포

```
npm run deploy
```
