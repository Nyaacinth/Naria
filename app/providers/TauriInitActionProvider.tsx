import { appWindow } from "@tauri-apps/api/window"
import type { FC, PropsWithChildren } from "react"
import { useEffect } from "react"

export const TauriInitActionProvider: FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        if (!(window as any).__TAURI__) return

        appWindow.show()
        appWindow.setFocus()
    })

    useEffect(() => {
        if (location.protocol !== "tauri:") return

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
