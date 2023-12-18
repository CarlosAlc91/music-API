import ContainerAuth from "../components/layout/ContainerAuth";
import { Link, useNavigate } from "react-router-dom";
import { axiosMusic } from "../config/axios.config";
import { useUserInfo } from "../store/userInfo";
/* 1. ADD ContainerAuth COMPONENT */
/* 2. EDIT INFO AS NEEDED */
const Login = () => {
  /* 3. LOGIN LOGIC */
  /* 4.4 hook useNavigate */
  const navigate = useNavigate();

  /* 6. GETTING BACK FROM USERINFO, llamar el estado de userInfo y pasarsala al then */
  const login = useUserInfo((state) => state.login);

  /* 4.  pass the function to the form as onSubmit*/
  const handlerSubmit = (e) => {
    /* 4.1 to remove reload everytime we click on login prevenimos el comportamiento por defecto del evento */
    e.preventDefault();

    /* 4.2 recoger todos los datos del formulario */
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    /* 4.3 peticion login con axiosMusic*/
    axiosMusic
      .post("/api/auth/login", data)
      .then(({ data }) => {
        /* 6.1 llamado del estado global */
        login(data);
        navigate("/");
      })
      .catch((err) => console.log(err));

    /* 5. GO TO userInfo.js */
    /* 7. GO TO PrivateRoutes.jsx */
  };
  return (
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/images/login-header.png" alt="" />
      </header>
      {/* form */}
      <form
        onSubmit={handlerSubmit}
        className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]"
      >
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
            name="email"
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
            name="password"
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
