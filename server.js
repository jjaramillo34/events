// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const restaurants = require("./src/data/restaurants");

app.prepare().then(() => {
  const server = express();

  // API endpoint to get all restaurants
  server.get("/api/restaurants", (req, res) => {
    res.json(restaurants);
  });

  // API endpoint to get a restaurant by id
  server.get("/api/restaurants/:id", (req, res) => {
    const restaurant = restaurants.find((r) => r.id === req.params.id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  });

  // Handle all other routes with Next.js
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3001;
  server.listen(port, (err) => {
    if (err) {
      console.error("Error starting server:", err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
