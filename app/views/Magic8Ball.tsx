import { motion } from "framer-motion"
import { FC, useState } from "react"
import { useMagic8BallAnswer } from "../hooks/useMagic8BallAnswer"

export const Magic8Ball: FC = () => {
    const [answer, possibilityPercentage, nextAnswer] = useMagic8BallAnswer()
    const [question, setQuestion] = useState("")
    const [hasQuestion, setHasQuestion] = useState(false)
    const [shouldDisableSubmit, setShouldDisableSubmit] = useState(false)

    return (
        <motion.div
            initial={false}
            animate={{
                backgroundColor: !hasQuestion
                    ? "#83D48B"
                    : ["#83D48B", "#A3D383", "#CCD483", "#B383D4"][Math.floor(possibilityPercentage / 25)]
            }}
            data-tauri-drag-region
            className={`relative w-full h-full flex flex-col
                        items-center justify-center
                        text-white text-opacity-85 text-shadow-md
                        font-bold text-3xl`}
        >
            {!hasQuestion ? (
                <>
                    <input
                        className="appearance-none w-4/5 h-10 bg-white text-black outline-none text-center text-xl caret-blue rounded-full shadow-md shadow-inset"
                        placeholder="Ask a question"
                        onChange={(event) => setQuestion(event.target.value)}
                        disabled={shouldDisableSubmit}
                    />
                    <motion.button
                        initial={false}
                        animate={{
                            scale: question ? 1 : 0.9,
                            backgroundColor: question ? "#000000" : "#444444"
                        }}
                        className="absolute bottom-20% p-2 rounded-full shadow-md"
                        onClick={(event) => {
                            setShouldDisableSubmit(true)
                            event.currentTarget
                                ?.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
                                    duration: 1000,
                                    iterations: 1
                                })
                                .finished.then(() => {
                                    setShouldDisableSubmit(false)
                                    setHasQuestion(true)
                                })
                        }}
                        disabled={!question || shouldDisableSubmit}
                    >
                        <div className="text-lg i-solar-slash-circle-outline" />
                    </motion.button>
                </>
            ) : (
                <>
                    <div className="contents pointer-events-none">{answer}</div>
                    <div className="text-sm">~{possibilityPercentage}%</div>
                    <button
                        className="absolute bottom-20% bg-black p-2 rounded-full shadow-md"
                        onClick={() => {
                            setQuestion("")
                            setHasQuestion(false)
                            nextAnswer()
                        }}
                    >
                        <div className="text-lg i-solar-undo-left-round-outline" />
                    </button>
                </>
            )}
            <div className="absolute bottom-1 font-thin text-xs pointer-events-none">
                Notice: you shouldn&lsquo;t use this in serious scenarios
            </div>
        </motion.div>
    )
}
