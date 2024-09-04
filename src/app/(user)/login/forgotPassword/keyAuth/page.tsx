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
        <main className="forgot_password_main_page_auth">
          <div className="forgot_password_main_auth">
            <div className="forgot_password_title_container">
              <Link href="/login">
                <ReturnCircleBackArrowIcon />
              </Link>
              <h1 className="forgot_password_title">
                Recebeu o código de verificação?
              </h1>
            </div>
            <div>
              <form>
                <div className="forgot_password_form_auth">
                  <div className="forgot_password_label_container_auth">
                    <label className="forgot_password_label_auth">
                      Insira o código recebido no seu e-mail.
                    </label>
                  </div>
                  <div className="forgot_password_input_container_auth">
                    <input className="forgot_password_input_auth" />
                    <input className="forgot_password_input_auth" />
                    <input className="forgot_password_input_auth" />
                    <input className="forgot_password_input_auth" />
                    <input className="forgot_password_input_auth" />
                    <input className="forgot_password_input_auth" />
                  </div>
                  <div className="register_form_pt3">
                    {
                      //<span className="forgot_password_form_error_auth">O formulário teve um erro hehehe</span>
                    }
                    <button
                      type="submit"
                      className="forgot_password_form_submit_auth"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Link
              href="/login/forgotPassword"
              className="forgot_password_link_return"
            >
              Não recebeu o código?
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
