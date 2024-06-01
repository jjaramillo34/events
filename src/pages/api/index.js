// pages/api/index.js
import { getVersion, getHealth } from "../../../helpers/utils";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      service: "Restaurant API",
      version: getVersion(),
      status: getHealth(),
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
