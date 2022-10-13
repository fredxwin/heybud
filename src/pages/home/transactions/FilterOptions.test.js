import { render, screen } from "@testing-library/react"
import { FilterOptions } from "./FilterOptions"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"

describe("FilterOptions", () => {
  it("all checkbox should be unchecked", () => {
    render(
      <ThemeProvider theme={theme}>
        <FilterOptions activeFilter={[]} />
      </ThemeProvider>
    )
    const IN = screen.getByTestId("checkbox-in")
    const OUT = screen.getByTestId("checkbox-out")
    const EXPENSE = screen.getByTestId("checkbox-expense")
    expect(IN.checked).toEqual(false)
    expect(OUT.checked).toEqual(false)
    expect(EXPENSE.checked).toEqual(false)
  })
  it("outgoing should be checked", () => {
    render(
      <ThemeProvider theme={theme}>
        <FilterOptions activeFilter={["out"]} />
      </ThemeProvider>
    )

    const OUT = screen.getByTestId("checkbox-out")
    expect(OUT.checked).toEqual(true)
  })
})
