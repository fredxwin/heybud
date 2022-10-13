import { memo, useEffect, useState } from "react"
import { Heading, Paragraph } from "@/styles/Typography"
import { TransactionItem } from "./TransactionItem"
import { FilterOptions } from "./FilterOptions"
import { sortByLowestExpense } from "./helpers/sortByLowestExpense"
import { getTransactionsByType } from "./helpers/getTransactionsByType"
import styled from "styled-components"

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`

export const TransactionsView = memo(({ transactions }) => {
  const [filteredTxn, setFilteredTxn] = useState(transactions)
  const [activeFilter, setActiveFilter] = useState([])

  useEffect(() => {
    if (activeFilter.length === 0) {
      setFilteredTxn(transactions)
    }
  }, [transactions, activeFilter])

  const handleFilter = (e) => {
    !activeFilter.includes(e.target.value) ? setActiveFilter([e.target.value]) : setActiveFilter([])
    switch (e.target.value) {
      case "expense":
        let expenseTxn = sortByLowestExpense(transactions)
        setFilteredTxn(expenseTxn)
        break
      case "in":
        let inboundTxn = getTransactionsByType(transactions, 1)
        setFilteredTxn(inboundTxn)
        break
      case "out":
        let outboundTxn = getTransactionsByType(transactions, -1)
        setFilteredTxn(outboundTxn)
        break
    }
  }
  return (
    <TransactionsContainer data-testid="transaction-view">
      <Heading margin="18px 0 12px 0">Transactions</Heading>
      <Paragraph type="secondary" margin="0 0 0 12px">
        Filters:
      </Paragraph>
      <FilterOptions action={handleFilter} activeFilter={activeFilter} />
      {filteredTxn?.map((txn) => (
        <TransactionItem
          key={txn.id}
          date={txn.date}
          description={txn.description}
          category={txn.category_title}
          amount={txn.amount}
        />
      ))}
    </TransactionsContainer>
  )
})
