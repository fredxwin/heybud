import styled from "styled-components"
import { AccountCard } from "@/pages/home/account/AccountCard"
import { TrendingCategory } from "@/pages/home/category/TrendingCategory"
import { TransactionsView } from "@/pages/home/transactions/TransactionsView"
import { Spinner } from "@/components/Spinner"
import { Error } from "@/components/Error"
import { useTransactionContext } from "@/hooks/useTransactionContext"
import mobile from "@/assets/mobile.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AppContainer = styled.div`
  width: 400px;
  height: 700px;
  background-image: url(${mobile}); no-repeat;
  background-size: 400px 700px;
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 700px;
    background-size: 400px 700px;
  }
  @media screen and (max-width: 640px) {
    width: 350px;
    height: 600px;
    background-size: 350px 600px;
  }
`
const Content = styled.div`
  position: relative;
  left: 35px;
  top: 70px;
  width: 330px;
  height: 570px;
  overflow-y: auto;
  @media screen and (max-width: 1024px) {
    width: 330px;
    height: 570px;
  }
  @media screen and (max-width: 640px) {
    left: 30px;
    width: 290px;
    height: 480px;
  }
`

export const App = () => {
  const { data, loading, error } = useTransactionContext()
  console.log(data)
  return (
    <Container>
      <AppContainer>
        <Content>
          {loading && <Spinner />}
          {error && <Error />}
          {data && (
            <>
              <AccountCard provider={data.provider} balance={data.balance} />
              <TrendingCategory transactions={data.transactions} />
              <TransactionsView transactions={data.transactions} />
            </>
          )}
        </Content>
      </AppContainer>
    </Container>
  )
}
