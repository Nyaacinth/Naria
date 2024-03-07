import { appWindow } from "@tauri-apps/api/window"
import type { FC, PropsWithChildren } from "react"
import { useEffect } from "react"
import { checkIfTauri, checkIfTauriProd } from "../utils/tauri-env"

export const TauriInitActionProvider: FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        if (!checkIfTauri()) return

        appWindow.show()
        appWindow.setFocus()
    })

    useEffect(() => {
        if (!checkIfTauriProd()) return

        function preventContextMenuDefault(e: Event) {
            e.preventDefault()
            return false
        }

        document.addEventListener("contextmenu", preventContextMenuDefault, { capture: true })

        return () => {
            document.removeEventListener("contextmenu", preventContextMenuDefault, { capture: true })
        }
    })

    return <>{children}</>
}
