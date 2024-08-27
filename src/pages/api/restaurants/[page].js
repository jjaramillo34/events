import { loadData } from "../../../../helpers/utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { page } = req.query;
    const pageSize = 12;
    const pageNumber = parseInt(page, 12) || 1;

    try {
      const data = await loadData("data/restaurants.json");
      const total = data.length;
      const totalPages = Math.ceil(total / pageSize);
      const start = (pageNumber - 1) * pageSize;
      const end = start + pageSize;
      const restaurants = data.slice(start, end);

      res.status(200).json({
        restaurants,
        total,
        page: pageNumber,
        total_pages: totalPages,
        page_size: pageSize,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
