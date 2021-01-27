export const newWallet = async ({name, balance, user_id}) => {
  const response = await fetch("/api/wallet/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      balance,
      user_id,
    }),
  });
  return await response.json();
};

// /api/wallet/42
export const getWallets = async ({ user_id }) => {
  const response = await fetch(`/api/users/${user_id}/wallets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
export default newWallet;



export const getWallet = async ({ wallet_id }) => {
  if (wallet_id === undefined) {
    wallet_id = '';
  }
  const response = await fetch(`/api/wallet/${wallet_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};


export const updateWallet = async ({ wallet_id, name, balance }) => {
  const response = await fetch(`/api/wallet/${wallet_id}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      balance,
    }),
  });
  return await response.json();
};


export const deleteWallet = async ({ wallet_id }) => {
  const response = await fetch(`/api/wallet/${wallet_id}/delete`, {
    method: "DELETE"
  });
  return await response.json();
}