import { createRoot } from "react-dom/client"
import { Redirect, Route, Router } from "wouter"
import { I18nProvider } from "./providers/I18nProvider"
import { TauriInitActionProvider } from "./providers/TauriInitActionProvider"
import { Magic8Ball } from "./views/Magic8Ball"
import { ShouldOrNot } from "./views/ShouldOrNot"
import { ViewNavigator } from "./views/ViewNavigator"

import "@unocss/reset/tailwind-compat.css"
import "virtual:uno.css"

createRoot(document.getElementById("root")!).render(
    <TauriInitActionProvider>
        <I18nProvider>
            <Router>
                <Route path="/should-or-not" component={ShouldOrNot} />
                <Route path="/magic-eight-ball" component={Magic8Ball} />
                <Route>
                    <Redirect to="/should-or-not" />
                </Route>
                <ViewNavigator
                    routes={[
                        {
                            path: "/should-or-not",
                            icon: <div className="i-solar-like-outline" />
                        },
                        {
                            path: "/magic-eight-ball",
                            icon: <div className="i-solar-slash-circle-outline" />
                        }
                    ]}
                />
            </Router>
        </I18nProvider>
    </TauriInitActionProvider>
)
