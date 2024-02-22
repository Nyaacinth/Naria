import { createRoot } from "react-dom/client"
import { Route, Router } from "wouter"
import { TauriInitActionProvider } from "./providers/TauriInitActionProvider"
import { Splash } from "./views/Splash"

import "@unocss/reset/tailwind-compat.css"
import "virtual:uno.css"

createRoot(document.getElementById("root")!).render(
    <TauriInitActionProvider>
        <Router>
            <Route path="/" component={Splash} />
        </Router>
    </TauriInitActionProvider>
)
