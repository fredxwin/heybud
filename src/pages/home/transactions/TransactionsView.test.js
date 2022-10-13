import { render, screen, fireEvent } from "@testing-library/react"
import { TransactionsView } from "./TransactionsView"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"

const transactions = [
  {
    id: "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
    date: "2018-06-30",
    description: "Tesco",
    category_title: "Bills",
    amount: {
      value: -57.21,
      currency_iso: "GBP",
    },
  },
  {
    id: "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
    date: "2018-06-22",
    description: "Max Mustermann",
    category_title: "Bills",
    amount: {
      value: 510.55,
      currency_iso: "GBP",
    },
  },
  {
    id: "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
    date: "2018-07-03",
    description: "Amazon",
    category_title: "Bills",
    amount: {
      value: -99.95,
      currency_iso: "GBP",
    },
  },
]

describe("TransactionsView", () => {
  it("should be visible", () => {
    render(
      <ThemeProvider theme={theme}>
        <TransactionsView transactions={[]} />
      </ThemeProvider>
    )
    expect(screen.getByTestId("transaction-view")).toBeInTheDocument()
  })
  it("should only display filtered and unfiltered transaction on checkbox toggle", () => {
    render(
      <ThemeProvider theme={theme}>
        <TransactionsView transactions={transactions} />
      </ThemeProvider>
    )
    const inboundCheckbox = screen.getByTestId("checkbox-in")
    fireEvent.click(inboundCheckbox)
    expect(screen.getByText("Max Mustermann")).toBeInTheDocument()
    expect(screen.getByText("2018-06-22")).toBeInTheDocument()
    expect(screen.getByText("+£510.55")).toBeInTheDocument()
    fireEvent.click(inboundCheckbox)

    expect(screen.getByText("Max Mustermann")).toBeInTheDocument()
    expect(screen.getByText("2018-06-22")).toBeInTheDocument()
    expect(screen.getByText("+£510.55")).toBeInTheDocument()

    expect(screen.getByText("2018-06-30")).toBeInTheDocument()
    expect(screen.getByText("Tesco")).toBeInTheDocument()
    expect(screen.getByText("£57.21")).toBeInTheDocument()

    expect(screen.getByText("2018-07-03")).toBeInTheDocument()
    expect(screen.getByText("Amazon")).toBeInTheDocument()
    expect(screen.getByText("£99.95")).toBeInTheDocument()
  })
  it("should only display inbound transaction", () => {
    render(
      <ThemeProvider theme={theme}>
        <TransactionsView transactions={transactions} />
      </ThemeProvider>
    )
    const inboundCheckbox = screen.getByTestId("checkbox-in")
    fireEvent.click(inboundCheckbox)
    expect(screen.getByText("Max Mustermann")).toBeInTheDocument()
    expect(screen.getByText("2018-06-22")).toBeInTheDocument()
    expect(screen.getByText("+£510.55")).toBeInTheDocument()
  })
  it("should only display outgoings transaction", () => {
    render(
      <ThemeProvider theme={theme}>
        <TransactionsView transactions={transactions} />
      </ThemeProvider>
    )
    const outboundCheckbox = screen.getByTestId("checkbox-out")
    fireEvent.click(outboundCheckbox)
    expect(screen.getByText("2018-06-30")).toBeInTheDocument()
    expect(screen.getByText("Tesco")).toBeInTheDocument()
    expect(screen.getByText("£57.21")).toBeInTheDocument()
    //2nd transaction
    expect(screen.getByText("2018-07-03")).toBeInTheDocument()
    expect(screen.getByText("Amazon")).toBeInTheDocument()
    expect(screen.getByText("£99.95")).toBeInTheDocument()
  })
})
