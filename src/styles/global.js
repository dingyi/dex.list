import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: MaisonNeue-Light;
    src: url('/fonts/MaisonNeue-Light.woff2') format('woff2'),
         url('/fonts/MaisonNeue-Light.woff') format('woff'),
         url('/fonts/MaisonNeue-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: MaisonNeue-Bold;
    src: url('/fonts/MaisonNeue-Bold.eot') format('eot'),
         url('/fonts/MaisonNeue-Bold.woff') format('woff'),
         url('/fonts/MaisonNeue-Bold.ttf') format('truetype');
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: #6d434c;
    background: #fdf3f6;
    min-height: 100vh;
    font-family: MaisonNeue-Light, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }


  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :-moz-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  ::-moz-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :-ms-input-placeholder {
    color: rgba(255, 255, 255, .6);
    opacity: .5;
    transition: opacity .5s
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus:-moz-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus::-moz-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  :focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity .5s
  }

  article, aside, details, figcaption, figure, footer, header, main, menu, nav,   section, summary {
    display: block
  }

  [hidden], template {
    display: none
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button, input, optgroup, select, textarea {
  font: inherit;
    margin: 0;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  select {
    appearance: none;
    border: none;
    background-color: transparent;
    width: 100%;

    &::-ms-expand {
      display: none;
    }

    option {
      color: #262626;
    }
  }

  [type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type=search]::-webkit-search-cancel-button, [type=search]  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  input:-internal-autofill-previewed,
  input:-internal-autofill-selected,
  textarea:-internal-autofill-previewed,
  textarea:-internal-autofill-selected,
  select:-internal-autofill-previewed,
  select:-internal-autofill-selected {
    background-color: rgba(255, 255, 255, .6) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  ul {
    list-style-position: outside;
    list-style-image: none;
    margin: 0;
  }

  ol {
    padding: 0;
    margin: 0 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  dd {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  p {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  noscript {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  iframe {
    padding: 0;
    margin: 0 0 1.45rem 0;
  }

  b, strong {
    font-weight: bold;
  }

  ol li {
    list-style: none;
  }

  ul li {
    list-style: none;
  }

  blockquote *:last-child,
  li *:last-child,
  p *:last-child {
    margin-bottom: 0;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #6d434c;
    text-decoration: none;
    position: relative;
    display: inline-block;
    transition: all .2s ease 0s;
    &:hover {
      color: #F7417A;
    }
  }

  /* a[target="_blank"] {
    cursor: ne-resize;
  } */

  a:active, a:hover {
    outline-width: 0;
  }

  .links {
    transition: none !important;
  }

  @media (min-width: 40em) {
    header h1 {
      opacity: 0;
      visibility: hidden;
    }
  }
}
`

export default GlobalStyles