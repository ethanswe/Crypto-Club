export const getCoins = async ( symbols ) => {
  const response = await fetch(`api/coin/${symbols}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
export default getCoins;

