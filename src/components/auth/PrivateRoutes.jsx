import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "../../store/userInfo";

const PrivateRoutes = () => {
  /* 1. TRAERNOS EL ESTADO useUserIfo */
  const user = useUserInfo((state) => state.user);

  /* 2. COMPROBACION SI ESTA LOGEADO O NO */
  if (user.token) {
    /* 3. AGREGAR COMPONENTE OUTLET*/
  } else {
    /* 4. SINO, VETE AL LOGIN */
    /* return <Navigate to={"/auth/login"} />; */
  }
  return <Outlet />;

  /* 5. GO TO HOME */
};
export default PrivateRoutes;
