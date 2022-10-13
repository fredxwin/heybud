import { render, screen } from "@testing-library/react"
import { TransactionItem } from "./TransactionItem"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"

describe("TransactionItem", () => {
  it("should display expected amount value", () => {
    render(
      <ThemeProvider theme={theme}>
        <TransactionItem
          date="2022-10-13"
          description="British Gas"
          category="Bills"
          amount={{
            value: -9999.99,
          }}
        />
      </ThemeProvider>
    )
    expect(screen.getByTestId("category-icon")).toBeInTheDocument()
    expect(screen.getByTestId("transaction-item")).toBeInTheDocument()
    expect(screen.getByText("2022-10-13")).toBeInTheDocument()
    expect(screen.getByText("British Gas")).toBeInTheDocument()
    expect(screen.getByText("£9999.99")).toBeInTheDocument()
  })
})
