import { useContext } from "react"
import { TransactionContext } from "@/context/TransactionContextWrapper"

export const useTransactionContext = () => {
  const context = useContext(TransactionContext)
  if (context === undefined) {
    throw new Error("Context not found")
  }
  return context
}
