import { loadData } from "../../../helpers/utils";
import slugify from "slugify";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = loadData("data/boroughs.json");
    const restaurants = loadData("data/restaurants.json");

    const filteredBoroughs = data.map((item) => {
      item.borough_slug = slugify((item.borough || "").toLowerCase());
      return item;
    });

    const boroughs = filteredBoroughs.map((item) => {
      const boroughRestaurants = restaurants.filter(
        (restaurant) => restaurant.borough_slug === item.borough_slug
      );

      return {
        name: item.borough,
        slug: item.borough_slug,
        count: boroughRestaurants.length,
      };
    });

    const total_count = restaurants.length;

    res.status(200).json({
      total_count: total_count,
      boroughs: boroughs,
    });
  }
}
