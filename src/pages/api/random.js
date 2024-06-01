import { loadData } from "../../../helpers/utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = loadData("data/restaurants.json");
    const featureRestaurants = data.filter((restaurant) => restaurant.feature);
    const total = featureRestaurants.length;
    const pageSize = 12;

    try {
      const randomRestaurants = getRandomRestaurants(
        featureRestaurants,
        pageSize
      );
      res.status(200).json(randomRestaurants);
    } catch (e) {
      console.error(`Error selecting random restaurants: ${e}`);
      res
        .status(500)
        .json({ error: "Insufficient data to select random restaurants" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

function getRandomRestaurants(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
