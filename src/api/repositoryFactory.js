import UserRepository from "./userRepository";
import RouteRepository from "./routeRepository";
import UtilRepository from "./utilRepository";
import RouteDetailRepository from "./routeDetailRepository";

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  user: UserRepository,
  route: RouteRepository,
  routeDetail: RouteDetailRepository,
  util: UtilRepository
};
