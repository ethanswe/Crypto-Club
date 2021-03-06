export const makePurchase = async ({type, price, quantity, symbol, wallet_id}) => {
  const response = await fetch("/api/transaction/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      price,
      quantity,
      symbol,
      wallet_id,
    }),
  });
  return await response.json();
};


// TODO Dry up code by makeSale = makePurchase w/ same arguments 
export const makeSale = async ({type, price, quantity, symbol, wallet_id}) => {
  const response = await fetch("/api/transaction/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      price,
      quantity,
      symbol,
      wallet_id,
    }),
  });
  return await response.json();
};