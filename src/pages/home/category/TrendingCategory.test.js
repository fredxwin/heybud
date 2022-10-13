import { render, screen } from "@testing-library/react"
import { TrendingCategory } from "./TrendingCategory"
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
  {
    id: "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
    date: "2018-07-05",
    description: "Transport for London",
    category_title: "Bills",
    amount: {
      value: -2.85,
      currency_iso: "GBP",
    },
  },
  {
    id: "c09f785b61c0fa361dc143b7331551d8b4cc58349774fae6f61d696564bbebd74db0",
    date: "2018-07-09",
    description: "Pret a Manger",
    category_title: "Bills",
    amount: {
      value: -35.87,
      currency_iso: "GBP",
    },
  },
  {
    id: "da972f75ba1b4da81c93dcffeedf388f5c85e76642b2d41089d715b428b580dc469a",
    date: "2018-07-02",
    description: "Vodafone",
    category_title: "Entertainment",
    amount: {
      value: -29.99,
      currency_iso: "GBP",
    },
  },
  {
    id: "73f0fc40b287cd4e3ca0f8134b7dd065881e30b1e4b9eddcba06a281d2b435392698",
    date: "2018-07-01",
    description: "Marks & Spencer",
    category_title: "Entertainment",
    amount: {
      value: -45.23,
      currency_iso: "GBP",
    },
  },
  {
    id: "7580594e47b09ce6d22addaccb2fcf6c4f6297e616c0cecbf8acc902e1813a161816",
    date: "2018-06-29",
    description: "British Gas",
    category_title: "Entertainment",
    amount: {
      value: -48.75,
      currency_iso: "GBP",
    },
  },
  {
    id: "c20e70f1c2a31f36c252b8518ad745c200c9900b861e17a4eb9e0abb75562d4fdd3b",
    date: "2018-06-25",
    description: "BrewDog Shoreditch",
    category_title: "Entertainment",
    amount: {
      value: -76.06,
      currency_iso: "GBP",
    },
  },
  {
    id: "4eb53d62c82b5c79cd3c6421f300eb07ab6b1f75ee4b7fdd47eaee55088f3b9271d1",
    date: "2018-06-11",
    description: "Amazon",
    category_title: "Entertainment",
    amount: {
      value: -1678.49,
      currency_iso: "GBP",
    },
  },
  {
    id: "6ff529e15bea0a8c9036eff6dcd2d6fa1546b589542fa2bd0110d2e49264b889b707",
    date: "2018-06-24",
    description: "Amazon",
    category_title: "Entertainment",
    amount: {
      value: -145.25,
      currency_iso: "GBP",
    },
  },
]

describe("TrendingCategory", () => {
  it("should not render CategoryItem on empty transactions", () => {
    render(
      <ThemeProvider theme={theme}>
        <TrendingCategory transactions={[]} />
      </ThemeProvider>
    )
    expect(screen.getByTestId("trending-categories")).toBeEmptyDOMElement()
  })
  it("transactions should be ranked accordingly", () => {
    render(
      <ThemeProvider theme={theme}>
        <TrendingCategory transactions={transactions} />
      </ThemeProvider>
    )
    expect(screen.getByTestId("category-bills")).toBeInTheDocument()
    expect(screen.getByTestId("category-entertainment")).toBeInTheDocument()
    expect(screen.getByTestId("category-entertainment")).toHaveTextContent("🥇📺Entertainment")
    expect(screen.getByTestId("category-bills")).toHaveTextContent("🥈💳Bills")
  })
})
