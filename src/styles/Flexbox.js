import styled from "styled-components"

export const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction === "row" ? "row" : "column")};
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
`
