import Image from "next/image";
import { IconUser, Logo } from "@/assets/";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";


export function Header() {
    return (
        <header className="flex items-center w-full">
            <div className="flex flex-1 items-center justify-between px-4 h-20 bg-primary-orange w-[80%]">
                <div className="flex items-center gap-14">
                    <Image src={Logo} alt="Logo" />

                    <ul className="flex items-center gap-12">
                        <li>
                            <ItemMenu name="Para você" />
                        </li>
                        <li>
                            <ItemMenu name="Para empresas" />
                        </li>
                        <li>
                            <ItemMenu name="Serviços" />
                        </li>
                        <li>
                            <ItemMenu name="Ajuda" />
                        </li>
                    </ul>
                </div>

                <div>
                    <Search />
                </div>
            </div>

            <button className="flex items-center gap-4 bg-primary-blue text-white font-bold h-20 px-5 w-[20%]">
                <Image src={IconUser} alt="user" />
                <span>Acessar conta</span>
            </button>
        </header>
    )
}