import 'twin.macro'
import GlobalStyle from '@/GlobalStyle'

import fadeIn from '@animations/fadeIn'
import TripleImage from '@images/triple2x.png'
import PlayStoreImage from '@images/play-store2x.png'
import AppleImage from '@images/badge-apple4x.png'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div tw="flex justify-center items-center h-full">
        <div tw="min-w-1040 ml-auto mr-auto flex justify-between">
          <div tw="w-400 h-338" css={fadeIn()}>
            <img
              tw="w-full"
              src={TripleImage}
              alt="트리플 아이콘과 구글 플레이스토어 수상 트로피 이미지"
            />
            <div tw="text-center relative top-[-60px] text-gray-100">
              2021년 12월 기준
            </div>
          </div>
          <div tw="w-417">
            <div
              tw="text-36 tracking-[-1px] mb-40 text-black-100"
              css={fadeIn()}
            >
              <div tw="mb-20">
                <strong>700만 명</strong>의 여행자
              </div>
              <div tw="mb-20">
                <strong>100만 개</strong>의 여행리뷰
              </div>
              <div tw="mb-20">
                <strong>470만 개</strong>의 여행일정
              </div>
            </div>
            <div tw="flex" css={fadeIn({ delay: '200ms' })}>
              <div tw="flex items-center text-14 leading-22 mr-39 text-gray-200">
                <div tw="w-54 h-54 mr-8">
                  <img
                    tw="w-full"
                    src={PlayStoreImage}
                    alt="2018년도 구글 플레이스토어 올해의 앱 최우수상 수상"
                  />
                </div>
                <strong>
                  2018 구글 플레이스토어
                  <br />
                  올해의 앱 최우수상 수상
                </strong>
              </div>
              <div tw="flex items-center text-14 leading-22 text-gray-200">
                <div tw="w-54 h-54 mr-8">
                  <img
                    tw="w-full"
                    src={AppleImage}
                    alt="2018 애플 앱스토어 오늘의 여행앱 선정"
                  />
                </div>
                <strong>
                  2018 애플 앱스토어
                  <br />
                  오늘의 여행앱 선정
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
