"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _utils = require("../../../helpers/utils");

function handler(req, res) {
  var data, featureRestaurants, total, pageSize, randomRestaurants;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== "GET")) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(405).json({
            message: "Method Not Allowed"
          }));

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _utils.loadData)("data/restaurants.json"));

        case 5:
          data = _context.sent;

          if (Array.isArray(data)) {
            _context.next = 8;
            break;
          }

          throw new Error("Invalid data format");

        case 8:
          featureRestaurants = data.filter(function (restaurant) {
            return restaurant.feature;
          });
          total = featureRestaurants.length;
          pageSize = 12;

          if (!(total < pageSize)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "Insufficient data",
            message: "Only ".concat(total, " featured restaurants available. Requested ").concat(pageSize, ".")
          }));

        case 13:
          randomRestaurants = getRandomRestaurants(featureRestaurants, pageSize);
          res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
          return _context.abrupt("return", res.status(200).json({
            total: total,
            pageSize: pageSize,
            restaurants: randomRestaurants
          }));

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          console.error("Error in random restaurants API: ".concat(_context.t0.message));
          return _context.abrupt("return", res.status(500).json({
            error: "Internal Server Error",
            message: _context.t0.message
          }));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 18]]);
}

function getRandomRestaurants(arr, count) {
  return arr.map(function (a) {
    return {
      sort: Math.random(),
      value: a
    };
  }).sort(function (a, b) {
    return a.sort - b.sort;
  }).map(function (a) {
    return a.value;
  }).slice(0, count);
}