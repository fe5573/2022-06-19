# 실행
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
  - [ ] 사용한 기술과 선택한 이유를 기재한다

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
