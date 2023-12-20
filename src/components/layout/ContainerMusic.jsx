/* componente para contenedor de canciones */
/* 1. agregar  prop children para que el contener pueda ser usado en varios componentes*/
/* 2. GO TO Home.jsx */
/* 3. Regresar de Home.jsx para maquetar el contenedor */
/* 4. GO TO Home.jsx */

const ContainerMusic = ({ children }) => {
  return (
    <section className="bg-purple-dark w-[min(100%,_450px)] rounded-2xl p-4 py-6">
      {children}
    </section>
  );
};
export default ContainerMusic;
