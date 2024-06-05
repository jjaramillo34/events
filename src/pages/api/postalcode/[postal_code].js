import { loadData } from "../../../../helpers/utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { postal_code } = req.query;

    if (!postal_code) {
      return res
        .status(400)
        .json({ error: "postal_code parameter is required" });
    }

    const data = loadData("data/restaurants.json");
    const filteredRestaurants = data.filter(
      (item) =>
        item.borough2 && item.postal_code && item.postal_code === postal_code
    );

    console.log("filteredRestaurants", filteredRestaurants);

    if (filteredRestaurants.length === 0) {
      return res
        .status(404)
        .json({ error: "No restaurants found for the given postal_code" });
    }

    const boroughCounts = {};
    filteredRestaurants.forEach((item) => {
      const city = item.borough2;
      if (city) {
        if (!boroughCounts[city]) {
          boroughCounts[city] = 0;
        }
        boroughCounts[city] += 1;
      }
    });

    const result = {
      total_count: filteredRestaurants.length,
      boroughs: Object.keys(boroughCounts).map((city) => ({
        name: city,
        count: boroughCounts[city],
      })),
      restaurants: filteredRestaurants.map((restaurant) => ({
        name: restaurant.name,
        borough: restaurant.borough2,
        postal_code: restaurant.postal_code,
        address: restaurant.full_address,
        phone: restaurant.phone,
        site: restaurant.site,
        category: restaurant.category,
        type: restaurant.type,
        rating: restaurant.rating,
        reviews: restaurant.reviews,
        photo: restaurant.photo,
        working_hours: restaurant.working_hours,
      })),
    };

    res.status(200).json(result);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
