export interface IRoute {
  name: string,
  url: string,
}

export interface IRoutes {
  Root: IRoute,
  Home: IRoute,
  Rooms: IRoute,
  Room: IRoute,
  CreateRoom: IRoute,
  EditRoom: IRoute,
  NotFound: IRoute,
  NotImplemented: IRoute,
  Users: IRoute,
  User: IRoute,
  CreateUser: IRoute,
  EditUser: IRoute,
}