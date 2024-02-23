import { useReducer } from "react"

export function usePossibility(type: "normal" | "percentage" = "normal"): [possibility: number, next: () => void] {
    const [possibility, next] = useReducer(() => Math.random(), Math.random())
    const possibilityPercentage = Math.round(possibility * 100)
    switch (type) {
        case "normal":
            return [possibility, next]
        case "percentage":
            return [possibilityPercentage, next]
    }
}
