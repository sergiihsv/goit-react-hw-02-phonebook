import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html {
  height: 100%;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
* {
  margin: 0;
  padding: 0;
}
img,
picture,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
ul  {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;
