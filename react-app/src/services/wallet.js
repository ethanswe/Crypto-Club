export const newWallet = async (name, balance) => {
  const response = await fetch("/api/wallet/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      balance,
    }),
  });
  return await response.json();
}


export default newWallet;