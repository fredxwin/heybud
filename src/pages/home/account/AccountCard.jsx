import styled from "styled-components"
import { Paragraph, Heading } from "@/styles/Typography"
import { Flexbox } from "@/styles/Flexbox"
import mastercard from "@/assets/mastercard.svg"
import monzo from "@/assets/monzo-logo.svg"

const Card = styled.div`
  background-color: ${({ type, theme }) => theme.provider[type].backgroundColor};
  border-radius: 12px;
  width: 90%;
  color: white;
  min-height: 160px;
  margin: 0 auto;
`
const Label = styled(Paragraph)`
  color: #ffffff;
`
const currencyTypes = {
  GBP: "£",
  USD: "$",
}
export const AccountCard = ({ provider, balance }) => {
  let bankProvider = provider.title.toLowerCase()
  return (
    <>
      <Heading margin="0 0 16px 0">Cards</Heading>
      <Card data-testid="provider-card" type={bankProvider}>
        <Flexbox direction="row" alignItems="center" padding="0 12px 24px 12px">
          <img alt={bankProvider} width="128px" height="32px" src={monzo} loading="lazy" />
          <img alt="mastercard" width="64px" height="64px" src={mastercard} loading="lazy" />
        </Flexbox>
        <Flexbox direction="column" padding="12px">
          <Label type="secondary" isBold>
            Balance
          </Label>
          <Heading data-testid="amount">
            {currencyTypes[balance?.currency_iso]}
            {balance?.amount}
          </Heading>
        </Flexbox>
      </Card>
    </>
  )
}
