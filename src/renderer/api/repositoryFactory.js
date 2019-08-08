import UserRepository from "./userRepository";
import RouteRepository from "./routeRepository";

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  user: UserRepository,
  route: RouteRepository
};
