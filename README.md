# sell-your-unhappiness-front

## 기술 스택

-   react v18 + vite
-   react-router v6 (object)
-   typescript
-   emotion (styled)
-   recoil
-   storybook
-   jest
-   amplify

## git flow

```
main(master) : 배포 브랜치
develop(개발) : 개발 브랜치
feature(기능) : 각 기능 별 개발 브랜치
```

## 컨벤션

### 커밋

```
feat : 새로운 기능 추가
fix : 버그 수정
refactor : 코드 리펙토링
style : CSS 등 사용자 UI 디자인 변경
docs : 문서 수정
test : 테스트 코드 ( jest, storybook(UI 테스트) )
```

### 스타일

```javascript
// style.ts
import styled from "@emotion/styled";

export const Container = styled.div`
    // ...
`;
```

```javascript
// Component
import * as S from "./style";

const Component = ( => {

  return (
    <S.Container>
        // ...
    </S.Container>
  );
})

export defualt Component;
```

-   styled / 탬플릿 리터럴
-   style 파일 분리 style.ts
