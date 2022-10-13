export const getTransactionsByType = (transactions, type) => {
  return transactions.filter((txn) => {
    let isPositve = Math.sign(txn.amount.value)
    if (isPositve === type) return txn
  })
}
