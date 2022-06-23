import { css, keyframes } from '@emotion/react'

import { CssTime, CssPixel } from '../types'

interface Props {
  delay?: CssTime
  duration?: CssTime
  distance?: CssPixel
}

const fadeIn = ({
  delay = 0,
  duration = '700ms',
  distance = '70px',
}: Props = {}) => {
  const animation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, ${distance}, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `
  return css`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-delay: ${delay};
    animation-fill-mode: backwards;
  `
}

export default fadeIn
