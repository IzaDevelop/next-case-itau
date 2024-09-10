'use client'

import Image from "next/image";
import { IconUser, Logo, Menu } from "@/assets/";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import { useEffect, useRef, useState } from "react";

export function Header() {
    const [menu, setMenu] = useState(false);

    const refMenu = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: any) => {
        if (!refMenu.current?.contains(e.target)) {
            setMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = menu

        const prevTheme = currentTheme ? "overflow-auto" : "overflow-hidden"
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? "overflow-hidden" : "overflow-auto"
        rootElement.classList.add(nextTheme)
    }, [menu])


    return (
        <header>
            <nav className="hidden lg:flex items-center w-full">
                <div className="flex flex-1 items-center justify-between px-4 h-20 bg-primary-orange w-[80%]">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo" />

                        <ul className="flex items-center gap-10">
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
            </nav>

            <nav className="block lg:hidden">
                <div className="bg-primary-orange p-5 w-full flex justify-between h-20">
                    <Image src={Logo} alt="Logo" />

                    <button onClick={() => setMenu(!menu)} type="button">
                        <Image src={Menu} alt="Menu" />
                    </button>

                    <div onClick={() => setMenu(false)}
                        className={`${menu ? "visible absolute top-20 right-0" : "hidden"}`}
                    >
                        <ul className="w-screen bg-primary-orange">
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

                        <button className="flex items-center gap-4 bg-primary-blue text-white font-bold h-10 px-5 w-full text-sm">
                            <Image src={IconUser} alt="user" />
                            <span>Acessar conta</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}