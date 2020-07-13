import mockUserRepository from "./mockUserRepository";
import routeRepository from "./routeRepository";
import utilRepository from "./utilRepository";
import sessionRepository from "./sessionRepository";
import registrationRepository from "./registrationRepository";

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  mockUser: mockUserRepository,
  route: routeRepository,
  util: utilRepository,
  session: sessionRepository,
  registration: registrationRepository
};
