import Image from "next/image";
import { Arrow } from "@/assets";

type Props = {
    name: string
}

export function ItemMenu({name} : Props) {
    return (
        <button className="flex items-center gap-3 text-white text-sm font-bold px-5 py-2 lg:px-0 lg:py-0 w-full">
            <span>{name}</span>
            <Image src={Arrow} alt="Arrow dropdown" />
        </button>
    )
}