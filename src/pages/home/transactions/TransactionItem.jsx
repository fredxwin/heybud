import { memo } from "react"
import { CategoryIcon } from "@/components/CategoryIcon"
import { Paragraph } from "@/styles/Typography"
import styled from "styled-components"

const Transaction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  max-width: 330px;
  &:hover {
    background-color: #f3f4f6;
  }
  padding: 8px 4px;
  border-radius: 12px;
`
const IconColumn = styled.div`
  width: 48px;
  flex: 0 0 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AmountColumn = styled(IconColumn)`
  width: 96px;
  flex: 0 0 96px;
  justify-content: end;
  @media screen and (max-width: 640px) {
    width: 76px;
    flex: 0 0 76px;
  }
`

const Details = styled.div`
  width: 160px;
  flex: 0 0 160px;
  @media screen and (max-width: 640px) {
    width: 120px;
    flex: 0 0 120px;
  }
`

const AmountText = styled(Paragraph)`
  color: ${({ positive }) => positive === 1 && "#22c55e"};
`
export const TransactionItem = memo(({ date, description, category, amount }) => {
  //check if value is postive (1) or negative (-1)
  let isPositve = Math.sign(amount.value)
  let formatCurrencyValue = isPositve === -1 && amount.value.toString().substring(1)
  return (
    <Transaction tabIndex={0} data-testid="transaction-item">
      <IconColumn>
        <CategoryIcon categoryType={category} merchant={description} />
      </IconColumn>
      <Details>
        <Paragraph type="primary" isBold>
          {description}
        </Paragraph>
        <Paragraph type="secondary" margin="4px 0 0 0">
          {date}
        </Paragraph>
      </Details>
      <AmountColumn>
        <AmountText type="primary" isBold positive={isPositve}>
          {isPositve === -1 ? `£${formatCurrencyValue}` : `+£${amount.value}`}
        </AmountText>
      </AmountColumn>
    </Transaction>
  )
})
