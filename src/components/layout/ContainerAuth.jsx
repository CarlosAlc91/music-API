/* 1. COPY AND PASTE main from Register.jsx */
/* 2. ADD CHILDREN PROP */
const ContainerAuth = ({ children }) => {
  return (
    <main className="font-urbanist min-h-screen bg-bg-main text-white grid justify-stretch justify-items-center items-center bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat gap-12 p-4 sm:grid-cols-[auto_auto] sm:justify-center sm:bg-[url(/images/bg-auth-desktop.png)]">
      {/* 3. RENDER  CHILDREN PROP */}
      {children}
    </main>
  );
};
export default ContainerAuth;
