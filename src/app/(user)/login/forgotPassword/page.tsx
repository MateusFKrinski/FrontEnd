import Link from "next/link";
import ReturnCircleBackArrowIcon from "@/app/(user)/components/UI/Icons/ReturnCircleBackArrowIcon";

export default function page() {
  return (
    <>
      <div>
        <header className="user_header">
          <Link href="/register" className="user_header_link_full">
            Cadastre-se
          </Link>
          <Link href="/login" className="user_header_link_outline">
            Entrar
          </Link>
        </header>
        <div className="forgot_password_page">
          <main className="forgot_password_main">
            <div className="forgot_password_title_container">
              <Link href="/login">
                <ReturnCircleBackArrowIcon />
              </Link>
              <h1 className="forgot_password_title">Esqueceu sua senha?</h1>
            </div>
            <div className="forgot_password_content">
              <h2 className="forgot_password_subtitle">
                Insira seu endereço de e-mail, um código será enviado para
                confirmar sua identidade, e assim, alterar sua senha.
              </h2>
              <form>
                <div className="forgot_password_form">
                  <div className="forgot_password_input_container">
                    <label htmlFor="email" className="forgot_password_label">
                      E-mail:
                    </label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Digite um endereço de e-mail..."
                      className="forgot_password_input"
                    />
                  </div>
                  <div className="forgot_password_form_backline">
                    {
                      //<span className="forgot_password_form_error">O formulário teve um erro hehehe</span>
                    }
                    <button
                      type="submit"
                      className="forgot_password_form_submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
