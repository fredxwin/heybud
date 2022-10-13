import { render, screen } from "@testing-library/react"
import { App } from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

describe("App", () => {
  it("should App render", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
    expect(screen.getByTestId("provider-card")).toBeVisible()
  })
})
