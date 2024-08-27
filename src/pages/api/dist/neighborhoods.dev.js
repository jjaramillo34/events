"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _utils = require("../../../helpers/utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function handler(req, res) {
  var data, cityData, cities, totalNeighborhoods;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method !== "GET")) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(405).json({
            error: "Method Not Allowed"
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
          cityData = data.reduce(function (acc, item) {
            var city = item.borough2;

            if (city) {
              if (!acc[city]) {
                acc[city] = new Map();
              }

              acc[city].set(item.neighborhood, {
                name: item.neighborhood,
                slug: item.neighborhood_slug
              });
            }

            return acc;
          }, {});
          cities = Object.entries(cityData).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                city = _ref2[0],
                neighborhoods = _ref2[1];

            return {
              name: city,
              neighborhoods: Array.from(neighborhoods.values()).sort(function (a, b) {
                return a.name.localeCompare(b.name);
              }),
              count: neighborhoods.size
            };
          });
          totalNeighborhoods = cities.reduce(function (acc, city) {
            return acc + city.count;
          }, 0);
          res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
          return _context.abrupt("return", res.status(200).json({
            total_count: totalNeighborhoods,
            cities: cities.sort(function (a, b) {
              return b.count - a.count;
            }) // Sort cities by neighborhood count

          }));

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          console.error("Error in neighborhoods API:", _context.t0);
          return _context.abrupt("return", res.status(500).json({
            error: "Internal Server Error",
            message: _context.t0.message
          }));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15]]);
}