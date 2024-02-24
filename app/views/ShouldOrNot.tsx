import { motion } from "framer-motion"
import type { FC } from "react"
import { useTranslation } from "react-i18next"
import { useRandomBoolean } from "../hooks/useRandomBoolean"

export const ShouldOrNot: FC = () => {
    const { t } = useTranslation()

    const [shouldOrNot, nextShouldOrNot] = useRandomBoolean()

    return (
        <motion.div
            initial={false}
            animate={{ backgroundColor: shouldOrNot ? "#A3D383" : "#B383D4" }}
            data-tauri-drag-region
            className={`relative w-full h-full flex flex-col
                        items-center justify-center
                        text-white text-opacity-85 text-shadow-md
                        font-bold text-4xl`}
        >
            <div className="contents pointer-events-none">
                {shouldOrNot ? (
                    <>
                        <div>{t("should-or-not.yes")}</div>
                        <div>{t("should-or-not.yes-comment")}</div>
                    </>
                ) : (
                    <>
                        <div>{t("should-or-not.no")}</div>
                        <div>{t("should-or-not.no-comment")}</div>
                    </>
                )}
            </div>
            <div className="absolute bottom-1 font-thin text-xs pointer-events-none">{t("should-or-not.notice")}</div>
            <button className="absolute top-5 right-5 bg-transparent text-xl" onClick={nextShouldOrNot}>
                <div className="i-solar-refresh-broken cursor-pointer" />
            </button>
        </motion.div>
    )
}
