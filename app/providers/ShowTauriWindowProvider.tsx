import { appWindow } from "@tauri-apps/api/window"
import type { FC, ReactNode } from "react"
import { useEffect } from "react"

export const ShowTauriWindowProvider: FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        if (!(window as any).__TAURI__) return
        appWindow.show()
        appWindow.setFocus()
    }, [])

    return <>{children}</>
}
