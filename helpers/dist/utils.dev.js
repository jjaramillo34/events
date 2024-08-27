"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaseUrl = getBaseUrl;
exports.formatPhones = formatPhones;
exports.getHealth = getHealth;
exports.loadData = loadData;
exports.getVersion = getVersion;

var _libphonenumberJs = require("libphonenumber-js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return "https://".concat(process.env.VERCEL_URL);
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return "https://events-ten-ivory.vercel.app/";
  } else {
    return "http://localhost:3000";
  }
}

function formatPhones(phone) {
  phone = phone.replace(/\D/g, "");

  if (phone.length === 10) {
    return "(".concat(phone.slice(0, 3), ") ").concat(phone.slice(3, 6), "-").concat(phone.slice(6));
  }

  return phone;
}

function getHealth() {
  return {
    status: "healthy"
  };
} // Server-side only functions


function loadData(filePath) {
  var fs, path, slugify, jsonDirectory, fileContents, data;
  return regeneratorRuntime.async(function loadData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof window === "undefined")) {
            _context.next = 26;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("fs/promises"));
          }));

        case 3:
          fs = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("path"));
          }));

        case 6:
          path = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("slugify"));
          }));

        case 9:
          slugify = _context.sent["default"];
          _context.prev = 10;
          jsonDirectory = path.join(process.cwd(), "public", filePath);
          _context.next = 14;
          return regeneratorRuntime.awrap(fs.readFile(jsonDirectory, "utf8"));

        case 14:
          fileContents = _context.sent;
          data = JSON.parse(fileContents);
          data.forEach(function (item) {
            item.neighborhood_slug = slugify((item.neighborhood || "").toLowerCase());
            item.borough_slug = slugify((item.borough2 || "").toLowerCase());
            ["phone_1", "phone_2", "phone_3"].forEach(function (phoneKey) {
              var phone = item[phoneKey];

              if (phone && /^\d{11}$/.test(phone)) {
                var phoneNumber = (0, _libphonenumberJs.parsePhoneNumberFromString)(phone, "US");

                if (phoneNumber) {
                  item[phoneKey] = phoneNumber.formatNational();
                }
              }
            });
          });
          return _context.abrupt("return", data);

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](10);
          console.error("Failed to load data from ".concat(filePath, ": ").concat(_context.t0));
          return _context.abrupt("return", []);

        case 24:
          _context.next = 28;
          break;

        case 26:
          console.error("loadData function is only available on the server side");
          return _context.abrupt("return", []);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 20]]);
}

function getVersion() {
  var fs, path, versionFilePath, version;
  return regeneratorRuntime.async(function getVersion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(typeof window === "undefined")) {
            _context2.next = 21;
            break;
          }

          _context2.next = 3;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("fs/promises"));
          }));

        case 3:
          fs = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(Promise.resolve().then(function () {
            return _interopRequireWildcard(require("path"));
          }));

        case 6:
          path = _context2.sent;
          versionFilePath = path.join(process.cwd(), "data", "version.txt");
          _context2.prev = 8;
          _context2.next = 11;
          return regeneratorRuntime.awrap(fs.readFile(versionFilePath, "utf8"));

        case 11:
          version = _context2.sent;
          return _context2.abrupt("return", version.trim());

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](8);
          console.error("Failed to retrieve version: ".concat(_context2.t0));
          return _context2.abrupt("return", "Unknown");

        case 19:
          _context2.next = 23;
          break;

        case 21:
          console.error("getVersion function is only available on the server side");
          return _context2.abrupt("return", "Unknown");

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[8, 15]]);
}