export const getCoins = async ( symbol ) => {
  const response = await fetch(`api/coin/${symbol}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
export default getCoins;

