import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "../../store/userInfo";
import PrincipalLayout from "../layout/PrincipalLayout";

const PrivateRoutes = () => {
  /* 1. TRAERNOS EL ESTADO useUserIfo */
  const user = useUserInfo((state) => state.user);

  /* 2. COMPROBACION SI ESTA LOGEADO O NO */
  if (user.token) {
    /* 3. AGREGAR COMPONENTE OUTLET*/
    /* 6. agregar el componente PrincipalLayout */
    /* return <PrincipalLayout>
      <Outlet />
    </PrincipalLayout>; */
  } else {
    /* 4. SINO, VETE AL LOGIN */
    /* return <Navigate to={"/auth/login"} />; */
  }
  return (
    <PrincipalLayout>
      <Outlet />
    </PrincipalLayout>
  );
  /* 5. GO TO PPrincialLayout */
};
export default PrivateRoutes;
