export const makePurchase = async ({type, price, quantity, coin_id, wallet_id}) => {
  const response = await fetch("/api/wallet/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      price,
      quantity,
      coin_id,
      wallet_id,
    }),
  });
  return await response.json();
};