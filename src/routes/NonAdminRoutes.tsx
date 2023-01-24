import { Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Room from "../components/pages/room/Room";
import routes from "./routes";
import NotImplemented from "../components/pages/not-implemented/NotImplemented";

interface INonAdminRoutes {}

const NonAdminRoutes: React.FC<INonAdminRoutes> = () => {
  return (
    <>
      <Route path={routes.Home.url} element={<Home />} />
      <Route path={routes.Rooms.url} element={<Room />} />
      <Route path={routes.Room.url} element={<NotImplemented />} />
      <Route path={routes.CreateRoom.url} element={<NotImplemented />} />
      <Route path={routes.EditRoom.url} element={<NotImplemented />} />
    </>
  );
};

export default NonAdminRoutes;
