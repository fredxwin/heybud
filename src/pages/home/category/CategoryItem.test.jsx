import { render, screen } from "@testing-library/react"
import { CategoryItem } from "./CategoryItem"
import { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"

describe("CategoryItem", () => {
  it("should display expected amount value", () => {
    render(
      <ThemeProvider theme={theme}>
        <CategoryItem categoryType="shopping" rank="🥇" />
      </ThemeProvider>
    )
    expect(screen.getByTestId("category-shopping")).toBeVisible()
    expect(screen.getByTestId("category-shopping")).toHaveTextContent("🥇🛍️shopping")
    expect(screen.getByTestId("category-icon")).toBeInTheDocument()
  })
})
