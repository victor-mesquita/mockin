import repository from './repository';

const resource = '/reset-password/';
export default {
  requestNewPassword(email) {
    return repository.post(`${resource}`, { user: { email } });
  },
  updatePassword(securityToken, password, passwordConfirmation) {
    return repository.post(`${resource}update`, {
      id: securityToken,
      user: { password, passwordConfirmation }
    });
  }
};
