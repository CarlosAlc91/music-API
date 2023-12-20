import { useEffect } from "react";
import ContainerMusic from "../components/layout/ContainerMusic";
import { SearchIcon } from "../components/shared/Icons";
import { axiosMusic } from "../config/axios.config";
import { useUserInfo } from "../store/userInfo";

/* 2. GO TO ContainerMusic para maquetar */

const Home = () => {
  /* 4.3 estado para la autorizaion JWT */
  const { token } = useUserInfo((state) => state.user);
  /* 5. useEffect para mostrar las canciones al usuaio */
  useEffect(() => {
    /* 5.1 agregar axiosMusic */
    /* axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err)); */
  }, []);

  /* 4. obtener todos los generos */
  useEffect(() => {
    /* 4.2 cabecera de autorizacion */
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };

    /* 4.1 agregar axiosMusic con "/api/genres"*/
    axiosMusic
      .get("/api/genres", config)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    /* 1. llamar a ContainerMusic */
    <ContainerMusic>
      {/* 3. Regresando de ContainerMusic */}
      <header className="text-lg">
        <form className="flex items-center gap-2 bg-purple-dark p-2 rounded-md ">
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent outline-none flex-1"
            type="text"
            placeholder="Search"
            size={10}
          />
          <select className="bg-transparent outline-none " name="" id="">
            <option value="10">10</option>
          </select>
        </form>
      </header>
    </ContainerMusic>
  );
};
export default Home;
