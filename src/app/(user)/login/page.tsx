import Link from "next/link";
import EyeClosedIcon from "@/app/(user)/components/UI/Icons/EyeClosedIcon";

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
        <main className="login_main">
          <h1 className="user_title">Bem vindo novamente!</h1>

          <form className="login_form">
            <div className="login_form_pt1">
              <div className="login_input_container">
                <label htmlFor="nome_usuario" className="login_label">
                  Nome de usuário ou endereço de e-mail:
                </label>
                <input
                  id="nome_usuario"
                  type="text"
                  placeholder="Crie seu nome de usuário..."
                  className="login_input"
                />
              </div>
              <div className="login_password_align">
                <div className="login_input_container">
                  <label htmlFor="senha" className="login_label">
                    Senha:
                  </label>
                  <div className="login_input_icon_container">
                    <input
                      id="senha"
                      type="password"
                      placeholder="Digite sua senha..."
                      className="login_input login_input_password"
                    />
                    <div className="login_input_icon">
                      <EyeClosedIcon />
                    </div>
                  </div>
                </div>
                <Link
                  href="/login/forgotPassword"
                  className="login_forgot_password"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>
            <div className="login_form_pt2">
              {
                //<span className="login_form_error">O formulário teve um erro hehehe</span>
              }
              <button type="submit" className="login_form_submit">
                Entrar
              </button>
              <Link href="/login" className="login_form_link">
                Cadastrar-se
              </Link>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
