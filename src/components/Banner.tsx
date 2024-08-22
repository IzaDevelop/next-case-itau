import Image from "next/image";
import { Container } from "./Container";
import { AppleStore, PlayStore, Woman } from "@/assets";

export function Banner() {
    return (
        <section className="w-full h-[700px] bg-hero bg-black bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-lg text-white space-y-4">
                    <h1 className="text-7xl font-bold">Tenha seu banco na palma da mão.</h1>
                    <p className="text-xl">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>

                    <div className="flex gap-4">
                        <button>
                            <Image src={AppleStore} alt="Apple Store" />
                        </button>

                        <button>
                            <Image src={PlayStore} alt="Play Store" />
                        </button>
                    </div>
                </div>

                <div>
                    <Image src={Woman} alt="woman"/>
                </div>
            </Container>
        </section>
    )
}