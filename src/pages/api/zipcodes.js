import { loadData } from "../../../helpers/utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = loadData("data/restaurants.json");
    const postalData = {};

    data.forEach((item) => {
      const city = item.borough2;
      // count the number of restaurants in each zip code

      if (city) {
        if (!postalData[city]) {
          postalData[city] = [];
        }
        postalData[city].push({
          name: item.postal_code,
          slug: item.neighborhood_slug,
        });
      }
    });

    // Remove duplicates and prepare the response
    for (const city in postalData) {
      const neighborhoods = postalData[city];
      postalData[city] = [
        ...new Map(neighborhoods.map((item) => [item.name, item])).values(),
      ];
    }

    const cities = Object.keys(postalData).map((city) => ({
      name: city,
      neighborhoods: postalData[city].sort((a, b) => a.name - b.name),
      // count the number of restaurants in each zip code
      count: postalData[city].length,
    }));

    const totalNeighborhoods = cities.reduce(
      (acc, city) => acc + city.count,
      0
    );

    res.status(200).json({
      total_count: totalNeighborhoods,
      cities: cities,
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
