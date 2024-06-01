// pages/api/restaurants.js
import path from "path";
import { promises as fs } from "fs";
import { loadData } from "../../../helpers/utils";

export const config = {
  api: {
    responseLimit: "8mb",
  },
};

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = loadData("data/restaurants.json");
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
