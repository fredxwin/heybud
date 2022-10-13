import { render, screen } from "@testing-library/react"
import { AccountCard } from "./AccountCard"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"

const data = {
  provider: {
    title: "Monzo",
  },
  balance: {
    amount: 12.32,
    currency_iso: "GBP",
  },
}

describe("AccountCard", () => {
  it("should display expected amount value", () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountCard provider={data.provider} balance={data.balance} />
      </ThemeProvider>
    )
    expect(screen.getByTestId("amount")).toHaveTextContent("£12.32")
  })
  it("should render correct currency", () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountCard
          provider={data.provider}
          balance={{
            amount: 12.32,
            currency_iso: "USD",
          }}
        />
      </ThemeProvider>
    )
    expect(screen.getByTestId("amount")).toHaveTextContent("$12.32")
  })
})
