import { createGlobalStyle } from "styled-components";
import reset from "./reset.css";

const GlobalStyles = createGlobalStyle`
${reset}

:root {
  --white: #ffffff;
  --black: #2d2d2b;
  --grey: #707070;
  --light-grey: #a4a4a4;
  --lightest-grey: #e4e4e4;
  --lilac: #d5c5ea;
  --orange: #e98300;
  --orange-light: #FFB45F;
  --yellow-light: #efd9a5;
  --mint: #74c7ad;
  --gun: #406271;
  --sky: #1B75BC;
  --red: #d82222;
  --pink: #f7c3c3;
  --smoke: rgba(0,0,0,0.4);
  --fog: rgba(255,255,255,0.4);
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: var(--black);
  background: linear-gradient(45deg, var(--lilac), var(--orange-light));

}

.error {
  color: var(--red)
}

`;

export default GlobalStyles;
