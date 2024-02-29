# sell-your-unhappiness-front

## 기술 스택

-   react v18 + vite
-   react-router v6 (object)
-   typescript
-   emotion (styled)
-   axios
-   recoil
-   storybook
-   vitest
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

### 네이밍

**타입스크립트**

```typescript
type TUserRole = 's' | 'ds' | 'd';

interface IUserInfo {
    role: TUserRole;
}
```

-   인터페이스는 I~ 로 작성
-   타입은 T~ 작성

**이벤트 함수**

```javascript
// 홈으로 이동하는 함수
const handleHomeMove = () => {
    /...
}
```

-   handle~
-   handle 이후에 명확하게 어떤 동작을 하는지 작성
-   명확한 동작만 명시된다면 약자 사용 가능

### 스타일

```javascript
// style.ts
import styled from '@emotion/styled';

export const HomeContainer = styled.div`
    // ...
`;
```

-   약자 사용 불가능
-   ~ Container
-   LoginButton
-   FeedInput
-   FeedContainer
-   MainContainer

```javascript
// Component
import * as S from "./style";

const Component = ( => {

  return (
    <S.HomeContainer>
        // ...
    </S.HomeContainer>
  );
})

export defualt Component;
```

-   styled / 탬플릿 리터럴
-   style 파일 분리 style.ts

**스타일 Prop**

```javascript
<Button $size={'lg'}>button</Button>
```

-   styled-components의 prop은 $ prefix 작성

### 컴포넌트

**Props**

```javascript
const Components = ({title, color, size} : Props) => {
    //...
}

const Components = (props : Props) => {
	  const {title, color, size, fullWidth} = props;
    //...
}
```

-   3개 까지는 구조분해 할당
-   4개 부터는 props 변수로 받아 구조분해 할당

### 함수

**useEffect**

```javascript
// 마운트
useEffect(() => {
    // 함수 선언
    const fuc = () => {};
    fuc();
}, []);
```

-   재사용되는 함수는 외부에 선언 후 사용

**함수 인라인**

```javascript
<button onClick=(() => location.href = '/home')>홈으로 이동</button>;
// X

const handleMoveHome = () => (location.href = '/home');

<button onClick={handleMoveHome}>홈으로 이동</button>;
// O
```

-   인라인 함수 작성이 아닌 외부에 함수 선언 후 사용
