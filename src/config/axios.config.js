/* aqui se va a crear una instancia de axios */
/* 1. import */
import axios from "axios"

/* 2. crear instancia */
const axiosMusic = axios.create({
  /* 2.1 copiar base URL de  https://documenter.getpostman.com/view/25561359/2s93zCY17q#ea6f896c-2eaa-440c-8f72-313027607945*/

  baseURL: "https://playlist-share.2.us-1.fl0.io"
})

/* 3. exportar la funcion */
export {
  axiosMusic
}

/* 4. go to Register.jsx */