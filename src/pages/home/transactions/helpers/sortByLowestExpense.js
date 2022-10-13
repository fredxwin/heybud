export const sortByLowestExpense = (transactions) => {
  const filterByExpense = transactions.filter((txn) => {
    let isPositve = Math.sign(txn.amount.value)
    if (isPositve === -1) return txn
  })
  const smallestExpense = filterByExpense.sort(
    (current, nextCurrent) => nextCurrent.amount.value - current.amount.value
  )
  return smallestExpense.slice(0, 10)
}
