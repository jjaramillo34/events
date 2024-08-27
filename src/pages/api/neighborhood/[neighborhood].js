import { loadData } from "../../../../helpers/utils";
import slugify from "slugify";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { neighborhood } = req.query;

  if (!neighborhood) {
    return res
      .status(400)
      .json({ error: "Neighborhood parameter is required" });
  }

  try {
    const [restaurants, neighData] = await Promise.all([
      loadData("data/restaurants.json"),
      loadData("data/neighborhoods1.json"),
    ]);

    if (!Array.isArray(restaurants) || !Array.isArray(neighData)) {
      throw new Error("Invalid data format");
    }

    // Process neighborhood data
    const processedNeighData = neighData.map((item) => ({
      ...item,
      neighborhood_slug:
        item.neighborhood === "Sunnyside-St"
          ? "sunnyside-st"
          : item.neighborhood === "Murray Hill-Qns"
          ? "murray-hill-qns"
          : slugify((item.neighborhood || "").toLowerCase()),
    }));

    const neighborhoodData = processedNeighData.find(
      (item) => item.neighborhood_slug === neighborhood
    );

    if (!neighborhoodData) {
      return res.status(404).json({ error: "Neighborhood not found" });
    }

    const neighborhoodRestaurants = restaurants.filter(
      (restaurant) => restaurant.neighborhood_slug === neighborhood
    );

    if (neighborhoodRestaurants.length === 0) {
      return res
        .status(404)
        .json({ error: "No restaurants found in this neighborhood" });
    }

    const response = {
      name: neighborhoodData.neighborhood,
      neighborhood_slug: neighborhoodData.neighborhood_slug,
      count: neighborhoodRestaurants.length,
      summary: neighborhoodData.summary,
      transportation: neighborhoodData.transportation,
      photos: neighborhoodData.photos,
      demographics: neighborhoodData.demographics,
      places: neighborhoodData.places,
      restaurants: neighborhoodRestaurants,
    };

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    return res.status(200).json(response);
  } catch (error) {
    console.error(`Error in neighborhood API for ${neighborhood}:`, error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}
