import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container({children} : Props) {
    return (
        <div className="flex items-center flex-wrap justify-evenly 2xl:justify-between w-full max-w-screen-xl px-4 mx-auto">
            {children}
        </div>
    )
}