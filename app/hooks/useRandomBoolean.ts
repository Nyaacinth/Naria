import { useEffect, useReducer } from "react"

export function useRandomBoolean(): [randomBool: boolean, next: () => void] {
    const [randomBool, next] = useReducer(() => Math.random() > 0.5, false)
    useEffect(() => next(), [])
    return [randomBool, next]
}
