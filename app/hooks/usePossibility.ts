import { useReducer } from "react"

export function usePossibility(type: "normal" | "percentage" = "normal"): [possibility: number, next: () => void] {
    const [possibility, next] = useReducer(() => Math.random(), Math.random())
    switch (type) {
        case "normal":
            return [possibility, next]
        case "percentage":
            return [Math.round(possibility * 100), next]
    }
}
