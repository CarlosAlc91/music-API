import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import TrackDetail from "./pages/TrackDetail";
import ArtistDetail from "./pages/ArtistDetail";
import Playlist from "./pages/Playlist";
import PlaylistDetail from "./pages/PlaylistDetail";
import PlaylistShared from "./pages/PlaylistShared";
import PrivateRoutes from "./components/auth/PrivateRoutes";

function App() {
  return (
    <>
      {/* 1. configuracion de rutas */}
      <Routes>
        {/* 2. Route path='donde se va a renderizar' element={que se va a renderizar }*/}
        {/* rutas publicas */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* RUTAS PROTEGIDAS */}
        {/* 4. PROTECCION DE RUTAS CON ROUTE */}
        <Route element={<PrivateRoutes />}>
          {/* ruta base o home */}
          <Route path="/" element={<Home />} />
          {/* rutas protegidas */}
          <Route path="/tracks/:id" element={<TrackDetail />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
          {/* rutas publicas */}
          <Route path="/playlist/public/:id" element={<PlaylistShared />} />
        </Route>
        {/* ruta error */}
        <Route path="*" element={<Page404 />} />
        {/* 3. GO TO REGISTER.JSX */}
      </Routes>
    </>
  );
}

export default App;
