import { useState } from "react"

function nextBool() {
    return Math.random() > 0.5
}

export function useShouldOrNot(): [shouldOrNot: boolean, next: () => void] {
    const [value, setValue] = useState(nextBool())
    return [value, () => setValue(nextBool())] as const
}
