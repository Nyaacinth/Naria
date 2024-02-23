import { motion } from "framer-motion"
import { FC, ReactElement, useState } from "react"
import { useLocation } from "wouter"

export interface ViewNavigatorProps {
    routes: { path: string; icon: ReactElement<HTMLDivElement> }[]
}

export const ViewNavigator: FC<ViewNavigatorProps> = ({ routes }) => {
    const [hover, setHover] = useState(false)
    const [showing, setShowing] = useState(false)

    const [_location, goto] = useLocation()

    return (
        <motion.div
            initial={false}
            animate={{ left: showing ? 0 : "-2.25rem", opacity: hover ? 1 : 0 }}
            className="absolute h-full bottom-0 flex flex-row"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => {
                setHover(false)
                setShowing(false)
            }}
        >
            <div className="flex flex-col ml-1 mb-a mt-a w-8 gap-1">
                {routes.map((route) => (
                    <button
                        className={`rounded-full bg-black bg-opacity-75 text-white p-2 ${showing ? "shadow-md" : ""}`}
                        key={route.path}
                        onClick={() => goto(route.path)}
                    >
                        {route.icon}
                    </button>
                ))}
            </div>
            <button
                className="ml-1 mb-a mt-a rounded-full bg-black bg-opacity-75 text-white p-2 shadow-md"
                onClick={() => setShowing((v) => !v)}
            >
                <motion.div
                    animate={{ rotate: showing ? "-180deg" : "0deg" }}
                    className="i-solar-alt-arrow-right-linear"
                />
            </button>
        </motion.div>
    )
}
