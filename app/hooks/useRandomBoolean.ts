import { useReducer } from "react"

export function useRandomBoolean(): [randomBool: boolean, next: () => void] {
    return useReducer(() => Math.random() > 0.5, Math.random() > 0.5)
}
