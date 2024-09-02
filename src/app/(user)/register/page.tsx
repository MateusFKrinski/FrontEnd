import Link from "next/link";
import EyeClosedIcon from "@/app/(user)/register/components/EyeClosedIcon";

export default function Home() {
  return (
    <>
      <div>
        <header className="register_header">
          <Link href="/register" className="register_header_link_full">
            Cadastre-se
          </Link>
          <Link href="/login" className="register_header_link_outline">
            Entrar
          </Link>
        </header>
        <main className="register_main">
          <h1 className="register_title">Faça parte da nossa comunidade</h1>

          <form className="register_form">
            <div className="register_file_container">
              <div>
                <label htmlFor="" className="register_label">
                  Foto de perfil
                </label>
              </div>
              <div className="register_file_container_input">
                <div className="register_user_image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M28.0003 4.6665C21.887 4.6665 16.917 9.63649 16.917 15.7498C16.917 21.7465 21.607 26.5998 27.7203 26.8098C27.907 26.7865 28.0936 26.7865 28.2336 26.8098C28.2803 26.8098 28.3036 26.8098 28.3503 26.8098C28.3736 26.8098 28.3736 26.8098 28.397 26.8098C34.3703 26.5998 39.0603 21.7465 39.0836 15.7498C39.0836 9.63649 34.1136 4.6665 28.0003 4.6665Z"
                      fill="#8F97A6"
                    />
                    <path
                      d="M39.8532 33.0162C33.3432 28.6762 22.7266 28.6762 16.1699 33.0162C13.2066 34.9996 11.5732 37.6829 11.5732 40.5529C11.5732 43.4229 13.2066 46.0829 16.1466 48.0429C19.4132 50.2362 23.7066 51.3329 27.9999 51.3329C32.2932 51.3329 36.5865 50.2362 39.8532 48.0429C42.7932 46.0595 44.4265 43.3995 44.4265 40.5062C44.4032 37.6362 42.7932 34.9762 39.8532 33.0162Z"
                      fill="#8F97A6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="register_input_file">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M8.54395 5.95848L10.8906 3.61182L13.2373 5.95848"
                        stroke="white"
                        stroke-width="1.375"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8896 12.9983V3.67578"
                        stroke="white"
                        stroke-width="1.375"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.66699 11C3.66699 15.0517 6.41699 18.3333 11.0003 18.3333C15.5837 18.3333 18.3337 15.0517 18.3337 11"
                        stroke="white"
                        stroke-width="1.375"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div>Carregar imagem</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register_form_pt2">
              <div className="register_input_container">
                <label htmlFor="nome_usuario" className="register_label">
                  Nome de usuário:
                </label>
                <input
                  id="nome_usuario"
                  type="text"
                  placeholder="Crie seu nome de usuário..."
                  className="register_input"
                />
              </div>
              <div className="register_input_container_double">
                <div className="register_input_container">
                  <label htmlFor="nome" className="register_label">
                    Nome:
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Insira seu nome..."
                    className="register_input"
                  />
                </div>
                <div className="register_input_container">
                  <label htmlFor="sobrenome" className="register_label">
                    Sobrenome:
                  </label>
                  <input
                    id="sobrenome"
                    type="text"
                    placeholder="Insira seu sobrenome..."
                    className="register_input"
                  />
                </div>
              </div>
              <div className="register_input_container">
                <label htmlFor="email" className="register_label">
                  E-mail:
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Digite um endereço de e-mail..."
                  className="register_input"
                />
              </div>
              <div className="register_input_container">
                <label htmlFor="senha" className="register_label">
                  Crie uma senha:
                </label>
                <div className="">
                  <input
                    id="senha"
                    type="text"
                    placeholder="Digite sua senha..."
                    className="register_input"
                  />
                  <div>
                    <EyeClosedIcon />
                  </div>
                </div>
              </div>
              <div className="register_input_container">
                <label htmlFor="confirmacao_senha" className="register_label">
                  Confirme sua senha:
                </label>
                <div className="">
                  <input
                    id="confirmacao_senha"
                    type="text"
                    placeholder="Digite sua senha novamente..."
                    className="register_input"
                  />
                  <div>
                    <EyeClosedIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="register_form_pt3">
              <button type="submit" className="register_form_submit">
                Registrar
              </button>
              <Link href="/login" className="register_form_link">
                Entrar
              </Link>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
