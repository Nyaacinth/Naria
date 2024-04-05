import { useReducer } from "react"
import { useTranslation } from "react-i18next"

export function useMagic8BallAnswer(): [answer: string, possibilityPercentage: number, nextAnswer: () => void] {
    // All possible answers and translation keys:
    /* {
        "magic-eight-ball.answer.rank-1.1": "Don't count on it",
        "magic-eight-ball.answer.rank-1.2": "My reply is no",
        "magic-eight-ball.answer.rank-1.3": "My sources say no",
        "magic-eight-ball.answer.rank-1.4": "Outlook not so good",
        "magic-eight-ball.answer.rank-1.5": "Very doubtful",
        "magic-eight-ball.answer.rank-2.1": "Reply hazy, try again",
        "magic-eight-ball.answer.rank-2.2": "Ask again later",
        "magic-eight-ball.answer.rank-2.3": "Better not tell you now",
        "magic-eight-ball.answer.rank-2.4": "Cannot predict now",
        "magic-eight-ball.answer.rank-2.5": "Concentrate and ask again",
        "magic-eight-ball.answer.rank-3.1": "Yes",
        "magic-eight-ball.answer.rank-3.2": "As I see it, yes",
        "magic-eight-ball.answer.rank-3.3": "Most likely",
        "magic-eight-ball.answer.rank-3.4": "Outlook good",
        "magic-eight-ball.answer.rank-3.5": "Signs point to yes",
        "magic-eight-ball.answer.rank-4.1": "Without a doubt",
        "magic-eight-ball.answer.rank-4.2": "Yes - definitely",
        "magic-eight-ball.answer.rank-4.3": "You may rely on it",
        "magic-eight-ball.answer.rank-4.4": "As I see it, yes",
        "magic-eight-ball.answer.rank-4.5": "It is decidedly so"
    } */

    const { t } = useTranslation()
    const [possibilityPercentage, nextPossibilityPercentage] = useReducer(
        () => Math.round(Math.random() * 99 + 1),
        Math.round(Math.random() * 99 + 1)
    )
    const [answerWithinSectionIndex, nextAnswerWithinSectionIndex] = useReducer(
        () => Math.round(Math.random() * 4 + 1),
        Math.round(Math.random() * 4 + 1)
    )

    const answerTKey = `magic-eight-ball.answer.rank-${Math.ceil(possibilityPercentage / 25)}.${answerWithinSectionIndex}`

    return [
        t(answerTKey),
        possibilityPercentage,
        () => {
            nextPossibilityPercentage()
            nextAnswerWithinSectionIndex()
        }
    ]
}
