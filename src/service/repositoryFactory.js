import mockUserRepository from './mockUserRepository';
import routeRepository from './routeRepository';
import utilRepository from './utilRepository';
import registrationRepository from './registrationRepository';
import projectRepository from './projectRepository';
import resetPasswordRepository from './resetPasswordRepository';

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  mockUser: mockUserRepository,
  route: routeRepository,
  util: utilRepository,
  registration: registrationRepository,
  project: projectRepository,
  resetPassword: resetPasswordRepository
};
