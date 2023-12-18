/* ESTADOS GLOBALES CON ZUSTAND */

/* 1. importar */
import { create } from "zustand"
import { persist } from "zustand/middleware"

/* 2. definir valor inicial del estado global */
const initialState = {
  email: "",
  name: "",
  token: ""
}

/* 3. CREAR PERSISTENCIA */
/* 4. ejecutar y exportar funcion implicita */
export const useUserInfo = create(persist(
  (set) => ({
    /* 4.1 estado global */
    user: initialState,
    /* 4.2 funcion para cambiar el estado con el parametro set */
    login: (infoLogin) => {
      set({ user: infoLogin })
    }
  }),
  /* 4.3 como se va a guardar en localstorage */
  {
    name: "userInfo"
  }
))


/* 5. GO BACK TO LOGIN.JSX */
