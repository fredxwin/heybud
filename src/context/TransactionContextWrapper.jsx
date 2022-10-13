import { createContext, useContext, useState, useEffect } from "react"

export const TransactionContext = createContext()

export const useTransactionContext = () => {
  const context = useContext(TransactionContext)
  if (context === undefined) {
    throw new Error("Context not found")
  }
  return context
}

export const TransactionContextWrapper = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, isLoading] = useState(true)
  const [error, isError] = useState(false)

  const transactionEndpoint = "https://www.mocky.io/v2/5c62e7c33000004a00019b05"
  useEffect(() => {
    const getTransactions = async () => {
      await fetch(transactionEndpoint)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => isError(error))
        .finally(() => isLoading(false))
    }
    getTransactions()
  }, [])
  return (
    <TransactionContext.Provider value={{ data, loading, error }}>
      {children}
    </TransactionContext.Provider>
  )
}
