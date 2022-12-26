import styled, { css } from "styled-components";

//todo: 각각 컴포넌트들로 만들어줄것
export const Img = styled.img`
  width: ${({ wd }) => wd || "40rem"};
  height: ${({ hg }) => hg || "40rem"};
  border-radius: 10%;
`;
export const Card = styled.div`
  flex-wrap: wrap;
  display: flex;
  border: 1px solid
    ${({ borderColor }) => borderColor || css`var(--ig-light-theme-separator)`};
  width: ${({ wd }) => wd || "35rem"};
  height: ${({ hg }) => hg || "4rem"};
  border-radius: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || "row"};
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ mg }) => mg || "0"};
  width: 45rem;
  padding: ${({ pd }) => pd || "3rem"};
  border: 0.1px solid
    ${({ borderColor }) => borderColor || css`var(--color-point4)`};
`;
export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ mg }) => mg || "0"};
`;
export const Button = styled.button`
  display: flex;
  color: ${({ color }) => color || css`var(--color-black)`};
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 4.4rem;
  border-radius: 3rem;
  border: none;
  background-color: ${({ background }) =>
    background || css`var(--color-yellow)`};
  font-weight: 600;
  gap: 1rem;
  margin: ${({ mg }) => mg || "0"};
`;
