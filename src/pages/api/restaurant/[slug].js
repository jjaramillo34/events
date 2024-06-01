import { loadData } from "../../../../helpers/utils";

export default function handler(req, res) {
  const { slug } = req.query;

  try {
    const data = loadData("data/restaurants.json");
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
