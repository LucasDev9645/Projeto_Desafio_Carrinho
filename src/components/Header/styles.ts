import styled from "styled-components";

import { colors } from "@/app/styles/globalStyles";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  padding: 1rem 3rem;
  opacity: 0.8;
`;

export const Cart = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
`;

export const DetailCart = styled.span`
  z-index: 99;
  position: absolute;
  left: 1.5rem;
  bottom: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${colors.red};
  border-radius: 50%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
