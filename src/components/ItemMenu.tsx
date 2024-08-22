import Image from "next/image";
import { Arrow } from "@/assets";

type Props = {
    name: string
}

export function ItemMenu({name} : Props) {
    return (
        <button className="flex items-center gap-3 text-white font-bold">
            <span>{name}</span>
            <Image src={Arrow} alt="Arrow dropdown" />
        </button>
    )
}