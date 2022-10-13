import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { TransactionContextWrapper } from "@/context/TransactionContextWrapper"
import { theme } from "./styles/theme"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #FFFFFF;
  }
  //Hide scroll bar
  ::-webkit-scrollbar {
    display: none;
  }
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransactionContextWrapper>
        <App />
      </TransactionContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
)
