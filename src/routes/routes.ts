import { IRoutes } from "../types/route.types";
import urls from "./routes.settings.json";

const routes: IRoutes = {
  Root: {
    name: "Root",
    url: urls.root,
  },
  Home: {
    name: "Home",
    url: urls.home,
  },
  Rooms: {
    name: "Rooms",
    url: urls.rooms.rooms,
  },
  Room: {
    name: "Room",
    url: urls.rooms.room,
  },
  CreateRoom: {
    name: "Create New Room",
    url: urls.rooms.newRoom,
  },
  EditRoom: {
    name: "Edit Room",
    url: urls.rooms.editRoom,
  },
  NotFound: {
    name: "Not Found",
    url: urls.notFound,
  },
  NotImplemented: {
    name: "Not Implemented Yet",
    url: urls.notImplemented,
  },
  Users: {
    name: "Users",
    url: urls.users.users,
  },
  User: {
    name: "User",
    url: urls.users.user,
  },
  CreateUser: {
    name: "Create New User",
    url: urls.users.newUser,
  },
  EditUser: {
    name: "Edit User",
    url: urls.users.editUser,
  }
}

export default routes;