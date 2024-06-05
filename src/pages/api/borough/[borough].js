import { loadData } from "../../../../helpers/utils";
import slugify from "slugify";

export default function handler(req, res) {
  const { borough } = req.query;

  try {
    const restaurants = loadData("data/restaurants.json");
    const boroughs = loadData("data/boroughs.json");

    const boroughData = boroughs.find(
      (item) => slugify(item.borough.toLowerCase()) === borough
    );

    const name = boroughData.borough;
    const borough_slug = slugify(boroughData.borough.toLowerCase());
    const summary = boroughData.summary;
    const transportation = boroughData.transportation;
    const photos = boroughData.photos;
    const demographics = boroughData.demographics;
    const places = boroughData.places;

    if (!boroughData) {
      return res.status(404).json({ message: "Not found" });
    }

    const boroughRestaurants = restaurants.filter(
      (item) => slugify(item.borough2.toLowerCase()) === borough
    );

    const count = boroughRestaurants.length;

    const jsonObject = {
      name: name,
      borough_slug: borough_slug,
      count: count,
      summary: summary,
      transportation: transportation,
      photos: photos,
      demographics: demographics,
      places: places,
      restaurants: boroughRestaurants,
    };

    res.status(200).json(jsonObject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
