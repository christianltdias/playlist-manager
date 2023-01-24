import { Navigate, Route, Routes } from "react-router-dom";
import NonAdminRoutes from "./NonAdminRoutes";
import AdminRoutes from "./AdminRoutes";
import NotFound from "../components/pages/not-found/NotFound";
import routes from "./routes";
import NotImplemented from "../components/pages/not-implemented/NotImplemented";

const Routing: React.FC = () => (
  <Routes>
    {NonAdminRoutes({})}
    {AdminRoutes({})}
    
    <Route path={routes.Root.url} element={ <Navigate to={routes.Home.url} />} />
    <Route path={routes.NotImplemented.url} element={<NotImplemented />} />
    <Route path={routes.NotFound.url} element={<NotFound />} />
  </Routes>
);

export default Routing;
