import { createRoot } from "react-dom/client"
import { Route, Router } from "wouter"
import { ShowTauriWindowProvider } from "./providers/ShowTauriWindowProvider"
import { Splash } from "./views/Splash"

import "@unocss/reset/tailwind-compat.css"
import "virtual:uno.css"

createRoot(document.getElementById("root")!).render(
    <ShowTauriWindowProvider>
        <Router>
            <Route path="/" component={Splash} />
        </Router>
    </ShowTauriWindowProvider>
)
