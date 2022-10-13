import styled from "styled-components"

const Spin = styled.div`
  border: 8px solid #f3f4f6;
  border-top: 8px #262626 solid;
  border-radius: 100%;
  height: 38px;
  width: 38px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
const Container = styled.div`
  display: flex;
  margin: auto;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`

export const Spinner = () => {
  return (
    <Container data-testid="spinner">
      <Spin />
    </Container>
  )
}
