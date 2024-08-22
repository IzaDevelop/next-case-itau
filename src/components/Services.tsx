import Image from "next/image";
import { Container } from "./Container";
import { IconCard, IconOptions, IconPhone, IconSolutions, Phone } from "@/assets";

export function Services() {
    return (
        <section className="py-10">
            <Container>
                <div className="flex-1 max-w-xl">
                    <span className="text-primary-orange text-sm font-bold uppercase">Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-5xl font-bold py-5">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-second-gray text-lg">Veja como você pode cuidar das suas finanças pelo App Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>

                    <ul>
                        <li className="flex items-center gap-3 py-10 border-b border-opacity-gray">
                            <Image src={IconPhone} alt="Icon phone"/>
                            <p>Acomanhe sua conta, faça transfêrencia e pagamentos de onde estiver</p>
                        </li>
                        <li className="flex items-center gap-3 py-10 border-b border-opacity-gray">
                            <Image src={IconSolutions} alt="Icon solutions"/>
                            <p>Soluções de empréstimos e renegociação para organizar suas finanças</p>
                        </li>
                        <li className="flex items-center gap-3 py-10 border-b border-opacity-gray">
                            <Image src={IconOptions} alt="Icon option"/>
                            <p>Diversas opções de investimentos, de acordo com seu perfil de investidor</p>
                        </li>
                        <li className="flex items-center gap-3 py-10">
                            <Image src={IconCard} alt="Icon card"/>
                            <p>Acompanhe a fatura do seu cartão e faça compras online com seu cartão virtual</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <Image src={Phone} alt="Phone"/>
                </div>
            </Container>
        </section>
    )
}