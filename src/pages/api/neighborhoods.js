import { loadData } from "../../../helpers/utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = loadData("data/restaurants.json");
    const cityData = {};

    data.forEach((item) => {
      const city = item.borough2;
      if (city) {
        if (!cityData[city]) {
          cityData[city] = [];
        }
        cityData[city].push({
          name: item.neighborhood,
          slug: item.neighborhood_slug,
        });
      }
    });

    // Remove duplicates and prepare the response
    for (const city in cityData) {
      const neighborhoods = cityData[city];
      cityData[city] = [
        ...new Map(neighborhoods.map((item) => [item.name, item])).values(),
      ];
    }

    const cities = Object.keys(cityData).map((city) => ({
      name: city,
      neighborhoods: cityData[city].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      count: cityData[city].length,
    }));

    const totalNeighborhoods = cities.reduce(
      (acc, city) => acc + city.count,
      0
    );

    res.status(200).json({ total_count: totalNeighborhoods, cities });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
