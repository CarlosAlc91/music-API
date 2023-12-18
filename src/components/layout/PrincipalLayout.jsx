/* 1. SE AGREGA children  */
/* 2. GO TO PRIVATEROUTES */
/* 3. MAQUETACION DE layout */

import { Link } from "react-router-dom";
import { LogoutIcon, PlayIcon, PlaylistIcon } from "../shared/Icons";

const PrincipalLayout = ({ children }) => {
  return (
    <section className="min-h-screen font-urbanist bg-bg-main text-white bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat sm:bg-[url(/images/bg-auth-desktop.png)]">
      <header className="flex p-2 justify-between items-center bg-purple-dark sm:text-lg relative">
        <h1 className="uppercase font-semibold">spotifu</h1>
        <section className="flex gap-4 [&>button]:uppercase [&>button]:border-[1px] [&>button]:py-1 [&>button]:px-2 [&>button]:text-sm [&>button]:rounded-full [&>button]:font-semibold [&>button]:border-yellow-border">
          <button className="hover:bg-purple-light">Account</button>
          <button className="flex gap-3 sm:gap-2 items-center hover:bg-purple-light">
            <PlaylistIcon color="#30D163" />
            <span className="hidden sm:inline">Recording</span>1
          </button>
        </section>
        {/* pop-up auth */}
        <article className="absolute right-4 -bottom-4 translate-y-full grid gap-2 bg-purple-light p-3 rounded-lg border border-yellow-border">
          <Link className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border">
            <PlayIcon />
            Recordings
          </Link>
          <button className="flex gap-2 items-center uppercase font-semibold hover:text-yellow-border">
            <LogoutIcon />
            Sign out
          </button>
        </article>
      </header>
      <section className="flex justify-center items-center pt-10">
        {children}
      </section>
    </section>
  );
};
export default PrincipalLayout;

/* clase 31 1:37 */
