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

const getUser = async (context, userId) => {
  asyncHandler(context, async () => {
    const response = await UserRepository.get(userId);

    const { user } = response.data;

    context.commit("USER_FETCHED", user);
  });
};

const createUser = async (context, payload) => {
  asyncHandler(context, async () => {
    try {
      if (payload.user.id) {
        await UserRepository.update(payload.user);
      } else {
        await UserRepository.create(payload.user);
      }

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

const cleanState = async context => {
  context.commit("SET_SUB_SEGMENTS", []);
};

export default {
  getUsers,
  getUser,
  createUser,
  setUser,
  fetchSegments,
  fetchSubSegments,
  cleanState
};
