import { loadData } from "../../../helpers/utils";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = await loadData("data/restaurants.json");

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }

    const cityData = data.reduce((acc, item) => {
      const city = item.borough2;
      if (city) {
        if (!acc[city]) {
          acc[city] = new Map();
        }
        acc[city].set(item.neighborhood, {
          name: item.neighborhood,
          slug: item.neighborhood_slug,
        });
      }
      return acc;
    }, {});

    const cities = Object.entries(cityData).map(([city, neighborhoods]) => ({
      name: city,
      neighborhoods: Array.from(neighborhoods.values()).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      count: neighborhoods.size,
    }));

    const totalNeighborhoods = cities.reduce(
      (acc, city) => acc + city.count,
      0
    );

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    return res.status(200).json({
      total_count: totalNeighborhoods,
      cities: cities.sort((a, b) => b.count - a.count), // Sort cities by neighborhood count
    });
  } catch (error) {
    console.error("Error in neighborhoods API:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}
