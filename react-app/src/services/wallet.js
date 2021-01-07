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
  const response = await fetch(`api/users/${user_id}/wallets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
export default newWallet;



export const getWallet = async ({ wallet_id }) => {
  // console.log('get',`api/wallet/${wallet_id}`);
  const response = await fetch(`/api/wallet/${wallet_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};