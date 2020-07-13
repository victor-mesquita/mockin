import { showApiErrors } from "@/util/toastManager";
import { asyncHandler } from "@/util/vuexAsync";
import { RepositoryFactory } from "@/api/repositoryFactory";
const SessionRepository = RepositoryFactory.session;
const RegistrationRepository = RepositoryFactory.registration;

function handleAuthToken(response, accessToken, context) {
  if (response.data) {
    window.localStorage.setItem('token', accessToken);
  }

  const authenticated = accessToken != null;

  context.commit("USER_AUTHENTICATED", authenticated);
  return authenticated;
}

const login = async (context, payload) => asyncHandler(context, async () => {
  try {
    const response = await SessionRepository.login(payload.user);
    const { accessToken } = response.data;

    const authenticated = handleAuthToken(response, accessToken, context);

    return authenticated;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

const createUser = async (context, payload) => asyncHandler(context, async () => {
  try {
    const response = await RegistrationRepository.create(payload.user);
    const { accessToken } = response.data;

    const authenticated = handleAuthToken(response, accessToken, context);

    return authenticated;
  } catch (error) {
    showApiErrors(error);

    throw error;
  }
});

export default {
  login,
  createUser
};
