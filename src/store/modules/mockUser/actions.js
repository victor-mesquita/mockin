import { showSuccess, showApiErrors, showError } from "@/util/toastManager";
import { asyncHandler } from "@/util/vuexAsync";
import { RepositoryFactory } from "@/api/repositoryFactory";
const SegmentRepository = RepositoryFactory.segment;
const SubSegmentRepository = RepositoryFactory.subSegment;
const MockUserRepository = RepositoryFactory.mockUser;

const getUsers = async (context, payload) => {
  asyncHandler(context, async () => {
    const response = await MockUserRepository.list(payload.projectId);

    // eslint-disable-next-line camelcase
    const { mock_users } = response.data;

    context.commit("SET_USERS", mock_users);
  });
};

const getUser = async (context, userId) => {
  asyncHandler(context, async () => {
    const response = await MockUserRepository.get(userId);

    const { mockUser } = response.data;

    context.commit("USER_FETCHED", mockUser);
  });
};

const createUser = async (context, payload) => {
  asyncHandler(context, async () => {
    try {
      if (payload.user.id) {
        await MockUserRepository.update(payload.user);
      } else {
        await MockUserRepository.create(payload.user);
      }

      context.commit("SET_DID_CREATE_USER", true);

      showSuccess("Usuário criado com sucesso!");
    } catch (error) {
      showApiErrors(error);
    }
  });
};

const setUser = (context, payload) => {
  context.commit("SELECTED_USER", payload);
};

const fetchSegments = async context => {
  asyncHandler(context, async () => {
    const response = await SegmentRepository.list();

    const { segments } = response.data;

    context.commit("SET_SEGMENTS", segments);
  });
};

const fetchSubSegments = async (context, { segmentId }) => {
  asyncHandler(context, async () => {
    const response = await SubSegmentRepository.list(segmentId);

    const { subSegments } = response.data;

    context.commit("SET_SUB_SEGMENTS", subSegments);
  });
};

const cleanState = async context => {
  context.commit("SET_SUB_SEGMENTS", []);
};

const deleteUser = async (context, payload) => {
  asyncHandler(context, async () => {
    if (!payload.userId) return;

    const response = await MockUserRepository.delete(payload.userId);

    if (response.data) {
      const currentUsers = [...context.state.users];
      const userIndexToRemove = currentUsers.findIndex(user => user.id === payload.userId);
      const filteredUsers = [
        ...currentUsers.splice(0, userIndexToRemove),
        ...currentUsers.splice(userIndexToRemove + 1)
      ];

      context.commit("SET_USERS", filteredUsers);
    } else {
      showError("Falha ao excluir usuário!");
    }
  });
};

export default {
  getUsers,
  getUser,
  createUser,
  setUser,
  fetchSegments,
  fetchSubSegments,
  cleanState,
  deleteUser
};
