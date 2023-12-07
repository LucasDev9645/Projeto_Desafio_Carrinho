import styled from "styled-components";

import { colors } from "@/app/styles/globalStyles";

export const ContainerProductCard = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 22rem;
  height: 20rem;
`;

export const ProductTitle = styled.p`
  text-align: center;
  font-weight: bold;
`;

export const ContainerPrice = styled.div`
  margin-top: 1rem;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: ${colors.black};
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    opacity: 0.7;
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.red};
    }
  }
`;
