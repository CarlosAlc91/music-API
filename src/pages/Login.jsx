import ContainerAuth from "../components/layout/ContainerAuth";
import { Link } from "react-router-dom";
/* 1. ADD ContainerAuth COMPONENT */
/* 2. EDIT INFO AS NEEDED */
const Login = () => {
  return (
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/images/login-header.png" alt="" />
      </header>
      {/* form */}
      <form className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]">
        <h2 className="text-4xl font-bold uppercase">Sign in</h2>
        {/* fields */}
        <div className="grid gap-4">
          <label className="text-white/40" htmlFor="email">
            Email
          </label>
          <input
            className="border-yellow-border p-1 bg-transparent border-b outline-none"
            type="email"
            id="email"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white/40" htmlFor="password">
            Password
          </label>
          <input
            className="border-yellow-border p-1 bg-transparent border-b outline-none"
            type="password"
            id="password"
          />
        </div>
        {/* button */}
        <button className="bg-purple-light max-w-max px-6 py-1 mx-auto font-semibold uppercase rounded-full">
          Login
        </button>
        <Link className="text-center underline" to={"/auth/register"}>
          Sign up
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Login;
