import { injectGlobal } from 'styled-components'
import { normalize, selection } from 'polished'

import { colour, typography } from 'core/style'

injectGlobal`
  ${normalize()}

  * {
  	box-sizing: inherit;
  }

  html {
  	box-sizing: border-box;
  }

  html, body, #Root, #App {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-size: 16px;
    font-family: ${ typography.getFontFamily() };
    line-height: 1.625;
    color: ${ colour.dark };
    -webkit-font-smoothing: antialiased;
    background-color: #fef5f1;
  }

  ${selection({
    background: colour.foxy,
    color: colour.white,
  })}
`
