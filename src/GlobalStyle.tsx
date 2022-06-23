import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        * {
          box-sizing: border-box;
        }
        html,
        body,
        #root {
          height: 100%;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        }
        #root {
          min-width: 1200px;
        }
        strong {
          font-weight: bold;
        }

        body {
          background-color: white;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color: black;
          }
        }
      `}
    />
  )
}

export default GlobalStyle
