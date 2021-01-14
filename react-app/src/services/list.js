export const addCoinToList = async ({ symbol, user_id }) => {
      const response = await fetch(`/api/users/${user_id}/list/coins`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symbol
    }),
  });
  return await response.json();
};


export const getList = async ({ user_id }) => {
      const response = await fetch(`/api/users/${user_id}/list`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};