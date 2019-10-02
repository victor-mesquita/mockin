import { showSuccess, showApiErrors } from "@/util/toastManager";
import { asyncHandler } from "@/util/vuexAsync";
import { RepositoryFactory } from "@/api/repositoryFactory";
const SegmentRepository = RepositoryFactory.segment;
const SubSegmentRepository = RepositoryFactory.subSegment;
const UserRepository = RepositoryFactory.user;

const getUsers = async context => {
  asyncHandler(context, async () => {
    const response = await UserRepository.list();

    const { users } = response.data;

    context.commit("SET_USERS", users);
  });
};

const createUser = async (context, payload) => {
  asyncHandler(context, async () => {
    try {
      await UserRepository.create(payload.user);

      context.commit("SET_DID_CREATE_USER", true);

      showSuccess("Usuário criado com sucesso!").goAway(1500);
    } catch (error) {
      if (error.response && error.response.data) {
        showApiErrors(error.response.data.errors);
      }
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

const cleanState = async (context) => {
  context.commit("SET_SUB_SEGMENTS", []);
};

export default {
  getUsers,
  createUser,
  setUser,
  fetchSegments,
  fetchSubSegments,
  cleanState
};
