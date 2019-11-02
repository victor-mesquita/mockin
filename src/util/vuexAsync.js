async function asyncHandler(context, action) {
  try {
    context.commit("FETCHING", true);

    await action();

    context.commit("FETCHING", false);
  } catch (error) {
    context.commit("FETCHING", false);
    context.commit("FETCHING_FAILED", true);

    throw error;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { asyncHandler };
