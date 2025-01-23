import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/styles/index.scss"
import { App } from "./App.jsx"
import { Provider } from "react-redux"
import store from "./store/store"

const rootElement = document.getElementById("root")
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
} else {
  console.error("Root element not found")
}
