export const makeList = async ({ symbol, user_id }) => {
      const response = await fetch("/api/list/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symbol,
      user_id,
    }),
  });
  return await response.json();
};
