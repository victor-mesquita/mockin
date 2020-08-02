import { showApiErrors, showSuccess } from "@/util/toastManager";
import { asyncHandler } from "@/util/vuexAsync";
import { RepositoryFactory } from "@/api/repositoryFactory";
const SessionRepository = RepositoryFactory.session;
const RegistrationRepository = RepositoryFactory.registration;
const ResetPasswordRepository = RepositoryFactory.resetPassword;

function handleAuthToken(userId, response, accessToken, context) {
  if (response.data) {
    window.localStorage.setItem('token', accessToken);
    window.localStorage.setItem('auth-user', userId);
  }

  const authenticated = accessToken != null;

  context.commit("USER_AUTHENTICATED", authenticated);
  return authenticated;
}

const login = async function login(context, payload) {
  const store = this;

  return asyncHandler(context, async () => {
    try {
      const response = await SessionRepository.login(payload.user);
      const { accessToken } = response.data;

      const authenticated = handleAuthToken(payload.user.email, response, accessToken, context);

      if (authenticated) {
        const projects = await store.dispatch('global/fetchProjects');

        if (projects.length > 0) {
          store.dispatch("global/setProject", { project: projects[0] });
        }
      }

      return authenticated;
    } catch (error) {
      showApiErrors(error);

      throw error;
    }
  });
};


const createUser = async (context, payload) => asyncHandler(context, async () => {
  try {
    const response = await RegistrationRepository.create(payload.user);
    const { accessToken } = response.data;

    const authenticated = handleAuthToken(payload.user.email, response, accessToken, context);

    return authenticated;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

const requestNewPassword = async (context, payload) => asyncHandler(context, async () => {
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

const updatePassword = async (context, payload) => asyncHandler(context, async () => {
  try {
    const response = await ResetPasswordRepository.updatePassword(payload.securityToken, payload.password, payload.passwordConfirmation);
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
