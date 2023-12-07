"use client";

import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#111111",
  white: "#FFFFFF",
  gray: "#3E3E3E",
  blackGray: "#262626",
  red: "#BB4040",
};

export const GlobalCss = createGlobalStyle`
* {
 margin:0;
 padding:0;
 box-sizing:border-box;
}

a {
  text-decoration:none;
  color:${colors.white};
}

li {
  list-style:none;
}

button {
  border: none;
}

body {
background-color:${colors.white};
color:${colors.black};
}

.container {
  max-width:75rem;
  width: 100%;
  margin:0 auto;
}

.title {
  text-align:center;
  margin:2rem;
  font-size:1.8rem;
}

.products-container {
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  align-items:center;
  gap:1rem;
}
`;
