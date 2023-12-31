import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { axiosMusic } from "../config/axios.config.js";
/* 1. MAQUETACION DE LA PAGINA */
/* 2. GO TO ContainerAuth.jsx */
/* 3. DELETE INFO FROM MAIN AND ADD COMPONENT ContainerAuth */
/* 4. GO TO Login.jsx */

const Register = () => {
  /* 5. GET FORM INFO and PASS IT TO FORM
   */

  /* 5.5 useNavigate */
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    /* 5.1 to remove reload everytime we click on create e.preventDefault() */
    e.preventDefault();
    /* 5.2 get user's info email, usernamw and password (target form) */
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    /* 5.3 create my own axios to insert my own URL 
    GO TO axios.config.js
    */
    /* 5.4 peticion con axiosMusic */
    axiosMusic
      .post("/api/auth/register", data)
      .then(() => {
        alert("User created");
        navigate("/auth/login");
      })
      .catch((err) => console.log(err));

    /* 5.6 GO TO LOGIN */
  };
  return (
    /* main container */
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/images/register-header.png" alt="" />
      </header>
      {/* form */}
      <form
        onSubmit={handlerSubmit}
        className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]"
      >
        <h2 className="text-4xl font-bold uppercase">Sign up</h2>
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
          <label className="text-white/40" htmlFor="username">
            Username
          </label>
          <input
            className="border-yellow-border p-1 bg-transparent border-b outline-none"
            type="text"
            id="username"
            name="username"
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
          Create
        </button>
        <Link className="text-center underline" to={"/auth/login"}>
          Login
        </Link>
      </form>
    </ContainerAuth>
  );
};
export default Register;

/* clase 30 => 20:00 */
