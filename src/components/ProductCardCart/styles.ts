import styled from "styled-components";

import { colors } from "@/app/styles/globalStyles";

export const ProductCardCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.blackGray};
  margin-bottom: 1rem;
  padding: 0.3rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: bold;

  button {
    background-color: ${colors.white};
    border: 2px solid transparent;
    width: 1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.red};
    }
  }
`;
