import { usePossibility } from "./usePossibility"

export function useMagic8BallAnswerTranslationKey(): [
    answer: string,
    possibilityPercentage: number,
    nextAnswer: () => void
] {
    const [possibilityPercentage, nextPossibilityPercentage] = usePossibility("percentage")
    const answerWithinSectionIndex = Math.floor(Math.random() * 5)

    let answer: string
    if (possibilityPercentage <= 25) {
        answer = [
            "magic-eight-ball.answer.rank-1.1", //
            "magic-eight-ball.answer.rank-1.2",
            "magic-eight-ball.answer.rank-1.3",
            "magic-eight-ball.answer.rank-1.4",
            "magic-eight-ball.answer.rank-1.5"
        ][answerWithinSectionIndex]
    } else if (possibilityPercentage <= 50) {
        answer = [
            "magic-eight-ball.answer.rank-2.1", //
            "magic-eight-ball.answer.rank-2.2",
            "magic-eight-ball.answer.rank-2.3",
            "magic-eight-ball.answer.rank-2.4",
            "magic-eight-ball.answer.rank-2.5"
        ][answerWithinSectionIndex]
    } else if (possibilityPercentage <= 75) {
        answer = [
            "magic-eight-ball.answer.rank-3.1", //
            "magic-eight-ball.answer.rank-3.2",
            "magic-eight-ball.answer.rank-3.3",
            "magic-eight-ball.answer.rank-3.4",
            "magic-eight-ball.answer.rank-3.5"
        ][answerWithinSectionIndex]
    } else {
        answer = [
            "magic-eight-ball.answer.rank-4.1", //
            "magic-eight-ball.answer.rank-4.2",
            "magic-eight-ball.answer.rank-4.3",
            "magic-eight-ball.answer.rank-4.4",
            "magic-eight-ball.answer.rank-4.5"
        ][answerWithinSectionIndex]
    }

    return [answer, possibilityPercentage, nextPossibilityPercentage]
}
