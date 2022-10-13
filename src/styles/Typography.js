import styled from "styled-components"

export const Paragraph = styled.p`
  color: ${({ type, theme }) => theme.text[type].color};
  font-size: ${({ type, theme }) => theme.text[type].fontSize};
  margin: 0;
  font-weight: ${({ isBold }) => isBold && "bold"};
  margin: ${({ margin }) => (margin ? margin : 0)};
`
export const Heading = styled.h1`
  font-size: 24px;
  margin: ${({ margin }) => (margin ? margin : 0)};
  text-transform: ${({ transform }) => (transform === "uppercase" ? "uppercase" : "capitlize")};
`
