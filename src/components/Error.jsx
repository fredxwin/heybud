import styled from "styled-components"
import { Paragraph } from "@/styles/Typography"
import bud from "@/assets/bud-logo.png"

const ErrorContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #262626;
  color: white;
`
const ErrorText = styled(Paragraph)`
  color: white;
`
export const Error = () => {
  return (
    <ErrorContainer data-testid="error">
      <img src={bud} alt="bud" />
      <ErrorText type="primary" margin="18px 0 0 0">
        Ah! Something went wrong
      </ErrorText>
      <ErrorText type="primary" margin="4px 0 0 0">
        Please try again later.
      </ErrorText>
    </ErrorContainer>
  )
}
