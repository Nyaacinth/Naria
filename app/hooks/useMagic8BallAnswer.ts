import { usePossibility } from "./usePossibility"

export function useMagic8BallAnswer(): [answer: string, possibilityPercentage: number, nextAnswer: () => void] {
    // 0-25: "Don't count on it" | "My reply is no" | "My sources say no" | "Outlook not so good" | "Very doubtful"
    // 26-50: "Reply hazy, try again" | "Ask again later" | "Better not tell you now" | "Cannot predict now" | "Concentrate and ask again"
    // 51-75: "Yes" | "As I see it, yes" | "Most likely" | "Outlook good" | "Signs point to yes"
    // 76-100: "Without a doubt" | "Yes - definitely" | "It is certain" | "You may rely on it" | "It is decidedly so"
    const [possibilityPercentage, nextPossibilityPercentage] = usePossibility("percentage")
    const answerWithinSectionIndex = Math.floor(Math.random() * 5)

    let answer: string
    if (possibilityPercentage <= 25) {
        answer = [
            "Don't count on it", //
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ][answerWithinSectionIndex]
    } else if (possibilityPercentage <= 50) {
        answer = [
            "Reply hazy, try again", //
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again"
        ][answerWithinSectionIndex]
    } else if (possibilityPercentage <= 75) {
        answer = [
            "Yes", //
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Signs point to yes"
        ][answerWithinSectionIndex]
    } else {
        answer = [
            "Without a doubt", //
            "Yes - definitely",
            "It is certain",
            "You may rely on it",
            "It is decidedly so"
        ][answerWithinSectionIndex]
    }

    return [answer, possibilityPercentage, nextPossibilityPercentage]
}
