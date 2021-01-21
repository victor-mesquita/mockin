import { showApiErrors, showSuccess } from '@/util/toastManager';
import { asyncHandler } from '@/util/vuexAsync';
import { RepositoryFactory } from '@/api/repositoryFactory';
import sessionRepository from '@/api/sessionRepository';

const RegistrationRepository = RepositoryFactory.registration;
const ResetPasswordRepository = RepositoryFactory.resetPassword;

function handleAuthToken(userId, response, context) {
  const { accessToken, renewalToken } = response.data;

  if (response.data) {
    window.localStorage.setItem('token', accessToken);
    window.localStorage.setItem('auth-user', userId);
    window.localStorage.setItem('renewalToken', renewalToken);
  }

  const authenticated = accessToken != null;

  context.commit('USER_AUTHENTICATED', authenticated);
  return authenticated;
}

const login = async function login(context, payload) {
  const store = this;

  return asyncHandler(context, async () => {
    try {
      const response = await sessionRepository.login(payload.user);

      const authenticated = handleAuthToken(payload.user.email, response, context);

      if (authenticated) {
        const projects = await store.dispatch('global/fetchProjects');

        if (projects.length > 0) {
          store.dispatch('global/setProject', { project: projects[0] });
        }
      }

      return authenticated;
    } catch (error) {
      showApiErrors(error);

      throw error;
    }
  });
};

const createUser = async (context, payload) =>
  asyncHandler(context, async () => {
  try {
    const response = await RegistrationRepository.create(payload.user);

    const authenticated = handleAuthToken(payload.user.email, response, context);

    return authenticated;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

const requestNewPassword = async (context, payload) =>
  asyncHandler(context, async () => {
  try {
    const response = await ResetPasswordRepository.requestNewPassword(payload.email);
    const { success } = response.data;

    showSuccess(success.message);
    return true;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

const updatePassword = async (context, payload) =>
  asyncHandler(context, async () => {
  try {
    const response = await ResetPasswordRepository.updatePassword(
      payload.securityToken,
      payload.password,
      payload.passwordConfirmation
    );
    const { success } = response.data;

    showSuccess(success.message);
    return true;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

export default {
  login,
  createUser,
  requestNewPassword,
  updatePassword
};
