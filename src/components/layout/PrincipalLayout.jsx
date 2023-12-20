/* 1. SE AGREGA children  */
/* 2. GO TO PRIVATEROUTES */
/* 3. MAQUETACION DE layout */
/* 4. GO TO userInfo */
/* 9. GO TO ContainerMusic.jsx */

import { Link } from "react-router-dom";
import { LogoutIcon, PlayIcon, PlaylistIcon } from "../shared/Icons";
import { useUserInfo } from "../../store/userInfo";
import { useState } from "react";

const PrincipalLayout = ({ children }) => {
  /* 8. CREACION DE ESTADO PARA OCULTAR pop-up auth */
  const [isShowAuthOptions, setIsShowAuthOptions] = useState(false);
  /* 5. REGRESANDO DE userInfo */
  /* 6. SE UTILIZA EL HOOK  useUserInfo y se pasa al onClick del boton */
  const logout = useUserInfo((state) => state.logout);
  return (
    <section className="min-h-screen font-urbanist bg-bg-main text-white bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:bg-[url(/images/bg-auth-desktop.png)] overflow-hidden">
      <header className="flex p-2 justify-between items-center bg-purple-dark sm:text-lg relative">
        <h1 className="uppercase font-semibold">spotify</h1>
        <section className="flex gap-4 [&>button]:uppercase [&>button]:border-[1px] [&>button]:py-1 [&>button]:px-2 [&>button]:text-sm [&>button]:rounded-full [&>button]:font-semibold [&>button]:border-yellow-border">
          <button
            /* 8.3 funcion para setear el buton cuando se da el click */
            onClick={() => setIsShowAuthOptions(!isShowAuthOptions)}
            className="hover:bg-purple-light"
          >
            Account
          </button>
          <button className="flex gap-3 sm:gap-2 items-center hover:bg-purple-light">
            <PlaylistIcon color="#30D163" />
            <span className="hidden sm:inline">Recording</span>1
          </button>
        </section>
        {/* pop-up auth */}
        {/* 8.2 ternaria para mostrar contenido */}
        <article
          className={`absolute  -bottom-4 translate-y-full grid gap-2 bg-purple-light p-3 rounded-lg border border-yellow-border transition-[right] ${
            isShowAuthOptions
              ? "right-4 duration-300 ease-in"
              : "-right-full duration-300 ease-in"
          }`}
        >
          {/* 7. se agrega el to para que redirecciones a las playlists */}
          <Link
            to={"/playlist"}
            className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border group"
          >
            <PlayIcon />
            Recordings
          </Link>
          {/* 6.1 pasa el hook al onClick del boton */}
          <button
            onClick={logout}
            className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border group"
          >
            <LogoutIcon />
            Sign out
          </button>
        </article>
      </header>
      <section className="flex justify-center items-center pt-10 px-4">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;
