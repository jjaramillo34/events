import { loadData } from "../../../helpers/utils";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = await loadData("data/restaurants.json");
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }

    const featureRestaurants = data.filter((restaurant) => restaurant.feature);
    const total = featureRestaurants.length;
    const pageSize = 12;

    if (total < pageSize) {
      return res.status(400).json({
        error: "Insufficient data",
        message: `Only ${total} featured restaurants available. Requested ${pageSize}.`,
      });
    }

    const randomRestaurants = getRandomRestaurants(
      featureRestaurants,
      pageSize
    );

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    return res.status(200).json({
      total: total,
      pageSize: pageSize,
      restaurants: randomRestaurants,
    });
  } catch (error) {
    console.error(`Error in random restaurants API: ${error.message}`);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}

function getRandomRestaurants(arr, count) {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, count);
}
