import { loadData } from "../../../../helpers/utils";
import slugify from "slugify";

export default function handler(req, res) {
  const { neighborhood } = req.query;

  try {
    const restaurants = loadData("data/restaurants.json");
    const neighData = loadData("data/neighborhoods1.json");

    // Manually set slugs for specific neighborhoods
    neighData.forEach((item) => {
      if (item.neighborhood === "Sunnyside-St") {
        item.neighborhood_slug = "sunnyside-st";
      } else if (item.neighborhood === "Murray Hill-Qns") {
        item.neighborhood_slug = "murray-hill-qns";
      } else {
        item.neighborhood_slug = slugify(
          (item.neighborhood || "").toLowerCase()
        );
      }
    });

    const filteredNeighData = neighData.filter(
      (item) => item.neighborhood_slug === neighborhood
    );

    if (!filteredNeighData.length) {
      return res.status(404).json({ error: "Neighborhood not found" });
    }

    const summary = filteredNeighData[0].summary;
    const transportation = filteredNeighData[0].transportation;
    const photos = filteredNeighData[0].photos;
    const demographics = filteredNeighData[0].demographics;
    const places = filteredNeighData[0].places;

    const neighborhoodRestaurants = restaurants.filter(
      (restaurant) => restaurant.neighborhood_slug === neighborhood
    );

    if (!neighborhoodRestaurants.length) {
      return res
        .status(404)
        .json({ error: "No restaurants found in this neighborhood" });
    }

    return res.status(200).json({
      count: neighborhoodRestaurants.length,
      summary,
      transportation,
      photos,
      demographics,
      places,
      restaurants: neighborhoodRestaurants,
    });
  } catch (e) {
    console.error(
      `Failed to retrieve data for neighborhood ${neighborhood}: ${e}`
    );
    return res.status(500).json({ error: "Internal server error" });
  }
}
