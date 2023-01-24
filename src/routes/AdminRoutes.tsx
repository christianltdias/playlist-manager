import { Route } from "react-router-dom";
import routes from "./routes";
import NotImplemented from "../components/pages/not-implemented/NotImplemented";

interface IAdminRoutes {

}

const AdminRoutes: React.FC<IAdminRoutes> = () => {
  return (
    <>
      <Route path={routes.Users.url} element={<NotImplemented />} /> 
      <Route path={routes.User.url} element={<NotImplemented />} /> 
      <Route path={routes.CreateUser.url} element={<NotImplemented />} /> 
      <Route path={routes.EditUser.url} element={<NotImplemented />} /> 
    </>
  );
};

export default AdminRoutes;