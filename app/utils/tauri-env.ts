export function checkIfTauri() {
    return !!(window as any).__TAURI__
}

export function checkIfTauriProd() {
    return checkIfTauri() && location.protocol === "tauri:"
}

export function checkIfTauriDev() {
    return checkIfTauri() && location.protocol !== "tauri:"
}
