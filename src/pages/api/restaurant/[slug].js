import { loadData } from "../../../../helpers/utils";

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = await loadData("data/restaurants.json");
    const restaurant = data.find((r) => r.slug === slug);

    if (restaurant) {
      res.status(200).json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (e) {
    console.error(`Failed to retrieve restaurant for slug ${slug}: ${e}`);
    res.status(500).json({ error: "Internal server error" });
  }
}
