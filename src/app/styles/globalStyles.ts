"use client";

import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#111111",
  white: "#FFFFFF",
  gray: "#3E3E3E",
};

export const GlobalCss = createGlobalStyle`
* {
 margin:0;
 padding:0;
 box-sizing:border-box;
}

a {
  text-decoration:none;
}

li {
  list-style:none;
}

body {
background-color:${colors.gray};
color:${colors.white};
}

.container {
  max-width:75rem;
  width: 100%;
  margin:0 auto;
}
`;
