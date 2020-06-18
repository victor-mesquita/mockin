async function asyncHandler(context, action) {
  try {
    context.commit("FETCHING", true);

    const response = await action();

    context.commit("FETCHING", false);
    return response;
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    throw error;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { asyncHandler };
