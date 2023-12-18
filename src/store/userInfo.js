/* ESTADOS GLOBALES CON ZUSTAND */

/* 1. importar */
import { create } from "zustand"

/* 2. definir valor inicial del estado global */
const initialState = {
  email: "",
  name: "",
  token: ""
}

/* 3. ejecutar y exportar funcion implicita */
export const useUserInfo = create((set) => ({
  /* 3.1 estado global */
  user: initialState,
  /* 3.2 funcion para cambiar el estado con el parametro set */
  login: (infoLogin) => {
    set({ user: infoLogin })
  }
}))


/* 4. GO BACK TO LOGIN.JSX */
