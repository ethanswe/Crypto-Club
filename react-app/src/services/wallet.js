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
}


export default newWallet;