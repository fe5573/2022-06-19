# 실행
[데모페이지](https://inspiring-dolphin-5360c5.netlify.app/)

```
git clone https://github.com/fe5573/2022-06-19.git

npm install

npm run start
```
# 요구사항
## 개발 환경
- [x] React를 이용하여 개발한다
- [x] 린팅/포매팅 셋업 설정은 [eslint-config-triple](https://github.com/titicacadev/eslint-config-triple)을 사용한다

## 문서
- [x] README.md를 작성한다
  - [x] 프로젝트 실행 방법을 기재한다
  - [x] 사용한 기술과 선택한 이유를 기재한다

## 기능
- [x] 문구, 이미지의 레이아웃과 스타일은 [트리플 홈페이지](https://triple.guide/)와 동일해야 한다
- [x] 최소 화면 폭을 1200px로 고정한다
- [x] Google Chrome 최신 버전에서 동작 해야한다
- [x] 살짝 위로 떠오르는 애니메이션과 투명도를 조절하는 애니메이션이 적용된다
  - [x] 좌측 이미지, 지표 문구, 수상 내역 순으로 애니메이션이 동작한다
  - [x] 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms이다
- [x] 숫자가 동적(애니메이션)으로 증가한다
  - [x] 각 숫자는 0부터 시작한다
  - [x] 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 한다
  - [x] 증가 속도는 점점 느려진다
  - [x] React와 DOM API만을 이용해야한다

# Tech Stack
## 상태관리
data(state)를 기반으로 view를 관리하는 다양한 프레임워크가 시장에 많이 나왔다고 생각합니다.  
Angular, React, Vue, Svelt 보통 이렇게 많이 쓰는것 같습니다.  
이번 과제의 요구사항이 React였고, 저 역시 React밖에 할줄 몰라서 React를 당연하게 사용했지만,  
이번 기회에 다른 도구들은 어떤 특징이 있고 무엇이 다른지 **개괄적인** 비교를 해보았습니다.  

### Vue
#### 장점
- Vue CLI : 개발 환경 설정이 간편합니다
- 일관된 코딩 스타일 : Vue만의 문법이 있기 때문에 그 문법을 따라 작성해야 합니다
- 쉬운 문법 : 비교적 문법이 쉽고 짧고 직관적입니다
- 라이브러리 지원 : 상태관리, 라우팅을 기본적으로 지원해줍니다
- 속도 : 미세하지만 약간 더 빠르다고 합니다
- 데이터 바인딩 : 단방향/양방향 모두 지원합니다. 상황에 따라 선택적으로 사용할 수 있습니다

#### 단점
- Community : React에 비해 커뮤니티의 사이즈가 작습니다. [stackoverflow에 약 10만건의 질문](https://stackoverflow.com/questions/tagged/vue.js)이 올라와 있습니다
- Maintainer : React는 Meta라는 든든한 메인테이너가 있는 반면, Vue는 한명의 메인 개발자와 컨트리뷰터들에 의해 유지됩니다
- 인력풀 : React에 비해 인력 시장의 크기가 작습니다
- 컴포넌트 분리 : 컴포넌트를 잘개 쪼갤때 불편할것 같습니다. 하나의 파일에 하나의 컴포넌트만 있어야 하기 때문입니다
- 풍부한 라이브러리 : React의 생태계가 더 크기 때문에, 자연스럽게 관련 라이브러리들도 리액트쪽이 더 풍부합니다

### Angular
#### 장점
- Maintainer : Google이 관리하는 프레임워크입니다
- Angular CLI : 개발 환경 설정이 간편합니다
- 종합 프레임워크 : HTTP, Routing, SSR, Form...등등 다 기본적으로 제공 합니다
- 일관된 코딩 스타일 : 어떻게 코드를 짜야하는지 명확한 표준을 정해주기 때문에, 협업할때 유리하다고 생각합니다
- 데이터 바인딩 : 단방향/양방향 모두 지원합니다. 상황에 따라 선택적으로 사용할 수 있습니다
- Community : 커뮤니티 사이즈가 큽니다. [stackoverflow에 약 27만건의 질문](https://stackoverflow.com/questions/tagged/angular)이 올라와 있습니다
- 상세한 Documents : 설명서가 상당히 상세하게 작성되어 있습니다

#### 단점
- 러닝 커브 : 비교적 러닝 커브가 높다고 합니다(RxJS, Typescript, Dependency Injection, Decorator ..)
- 퍼포먼스 : 양방향 데이터 바인딩이 퍼포먼스에 악영향을 줄수 있다고 합니다

### Svelte
#### 장점
- 깔끔한 코드 : 코드를 짧고 깔끔하게 작성할 수 있습니다
- 성능 : Svelt는 컴파일러에 가깝다고 합니다. 브라우저에서 했었을 일들을 컴파일 타임에 다 해줘서 Vanilla-JS의 성능이 나옵니다
- 러닝 커브 : 배우기 쉽습니다
- 가벼움 : 코드가 짧고 브라우저가 아닌 컴파일 타임에 많은 일을 해주기 때문에 전체적인 용량이 적습니다

#### 단점
- Maintainer : 거의 [Rich-Hassis](https://github.com/sveltejs/svelte/graphs/contributors)혼자서 개발하는것으로 보입니다
- Community : [stackoverflow에 약 3000건의 질문](https://stackoverflow.com/questions/tagged/svelte)이 올라와 있습니다. 생태계가 너무 좁아 보입니다
- 무거움 : 사실 별로 가볍지도 않고 실제로 프로젝트가 커지면 번들링 사이즈가 커진다는 [이야기](https://gist.github.com/sebmarkbage/a5ef436427437a98408672108df01919)도 있습니다

### 참고 자료
- [angular-vs-react](https://www.cleveroad.com/blog/angular-vs-react/)
- [Vue vs React vs Svelte API comparison by Evan You](https://www.reddit.com/r/reactjs/comments/czp9pg/vue_vs_react_vs_svelte_api_comparison_by_evan_you/)
- [svelte의 단점들](https://gist.github.com/rabelais88/19bfe8dfd29d901554389f0a8cc8947a)

### 결론
아직 까지는 React를 더 선호합니다. 왜냐하면,
- 인터넷에 자료가 많아서 문제를 만났을때 비교적 도움받기 수월합니다
- javascript와 제일 가까운것같습니다. 짧지만 알수없는 문법 대신 길어도 명확할때 더 안정감을 느낍니다
- Maintainer가 Meta라서 든든합니다
- React18부터 Concurrent Mode도 기본으로 지원하는걸로 봐서 성능도 점점 좋아질것이라고 생각합니다
다만, Angular도 써보고 싶다는 생각이 듭니다. 코드를 일관되게 작성할 수 있기 때문입니다.

## 스타일링
어떤 툴로 스타일링을 할것인가 [고민](https://develoger.kr/frontend/a-study-on-the-css-writing/)을 많이 했습니다.  
지금까지 CSS -> Bootstrap -> Bootstrap + SCSS -> BEM -> Emotion -> [CSS-Module + Tailwind](https://github.com/airman5573/react-shopping-cart-prod/tree/airman5573/src/pages/cart/components/cart-form) 이런 과정을 거쳤습니다.  
CSS-Module + Tailwind가 만족도가 높아서 이번 과제에도 적용을 하려 했습니다만, 생각보다 네이밍이 어려웠습니다.  
기껏 생각해 낸것은  
```
.top {
  .left {}
  .right {
    .top {}
    .bottom {}
  }
}
```
이정도였습니다. 그래서 Tailwind만 써보기로 했습니다. 네이밍 걱정을 안해도 되기 때문입니다.  
하지만 Tailwind만으로는 다이나믹한 CSS를 깔끔하게 표현하기가 어렵다고 생각했습니다.  
그래서 저는 인터넷을 뒤적이다가 [twin.macro](https://github.com/ben-rogerson/twin.macro)와 [emotion](https://emotion.sh/docs/introduction)의 [조합](https://mxstbr.com/thoughts/tailwind/)을 발견했습니다.  
둘을 같이 썼을때의 이점은 다음과 같습니다.  
### twin.macro(Tailwind)
- 네이밍 걱정을 안해도 됩니다. 비지니스 로직과 CSS에 집중할 수 있습니다
- 간결하게 CSS를 표현할 수 있습니다
- [VSC Extension](https://github.com/ben-rogerson/twin.macro/discussions/227)이 잘 개발되어있어서 개발 경험이 더 좋아집니다
- twin.macro에서 emotion을 지원하기 때문에 css파일이 생성되지 않고 [컴파일 타임에 js객체로 바뀌어서 emotion에 전달됩니다](https://github.com/ben-rogerson/twin.macro#how-it-works)됩니다. 즉, SSR에 영향을 끼치지 않고 또한 (emotion이 그러하듯)해당 컴포넌트에서 사용되는 스타일만 로드됩니다

### Emotion
- css를 js세계로 들여옵니다. js의 값들을 css쪽으로 넘길 수 있습니다
- css prop를 통해 dynamic한 값들을 넣을 수 있습니다
- 필요하면 Styled Component로 작성이 가능합니다
- autoprefixer가 자동으로 적용됩니다
- SSR와 잘 어울립니다

요약하자면 **twin.macro + emotion의 조합으로 atomic css를 작성할 수 있으며 동시에 dynamic한 값들도 대응이 가능**해집니다.  

하지만 분명히 단점도 존재합니다.
### 단점
- JSX코드가 지저분해짐 : css를 바로 tag에 넣어버리기 때문에 코드가 지저분해집니다. 컴포넌트를 작게 쪼개면 그나마 괜찮을듯 싶습니다
- 반응형 코드 : Viewport의 가로길이 1200px이하에서 `.A1`는 어떻게 변하고, `.A2`는 어떻게 변하고 이런것들이 각각 따로따로가 아니라 한곳에 코드가 있어야 머릿속에서 시뮬레이션 하기 편하다고 생각합니다. 그런데 atomic css에서는 이름을 부여하지 않기 때문에 이렇게 짤 수 없어서 아쉽습니다. 

그래도 개인적으로는 이점이 더 크다고 생각해서 개인 프로젝트를 할때는 이 조합을 애용할듯 싶습니다.  

## 언어
JS대신 TS를 사용했습니다. 가능하면 TS로 많이 짜려고 노력중입니다.  
자동 완성이 너무 편하고, 휴먼에러를 방지할 수 있기 때문입니다.

## 기타 등등
### Commitlint + Commitizen
커밋 메세지를 일관되게 작성하기 위해서 [commitlint](https://commitlint.js.org/#/)와 [commitizen](https://github.com/commitizen/cz-cli)을 같이 사용했습니다.  

### Wepback설정
CRA를 사용하지 않고 Webpack, Babel, TS, Emotion 설정을 직접 했습니다.  
가능하면 직접 설정하는것이 더 안전하다는 입장입니다.  
물론 Optimization부터 테스트 환경 구성까지 일일이 하려면 시간이 적잖게 들겠지만  
유의미한 작업이라고 생각합니다. 문제가 생겼을때 잘 대처할 수 있고, 세세한 커스터마이징을 할 수 있기 때문입니다.

# 느낀점
사실 과제를 처음 봤을때 쉽다고 생각했는데, 예상보다 어려웠습니다.  
네이밍이 어려워서 시작된 고민이 꽤나 깊어졌고, 좋은 CSS 테크닉을 찾는데 시간이 적잖게 걸렸습니다.  
개발 환경을 설정하는 것도 꽤나 오래걸렸습니다.  
점점 속도가 느려지는 카운터는 인터넷에 좋은 자료가 있어서 간신히 구현했습니다. 
