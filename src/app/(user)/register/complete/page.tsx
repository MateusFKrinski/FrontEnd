import Link from "next/link";
import SuccessIcon from "@/app/(user)/register/complete/components/SuccessIcon";

export default function page(){
    return(
        <>
            <main className="register_complete_main">
                <div className="register_complete_sub_main">
                    <div className="register_complete_info">
                        <div className="register_complete_success"><SuccessIcon/></div>
                        <div className="register_complete_message">
                            <h1 className="register_complete_title">Conta criada com sucesso!</h1>
                            <h2 className="register_complete_subtitle">Clique no botão abaixo para aproveitar e solucionar todas as suas dúvidas
                                em nosso
                                forum!</h2>
                        </div>
                    </div>
                    <Link href="/" className="register_complete_link">
                        Continuar para o forum
                    </Link>
                </div>
            </main>
        </>
    )
}