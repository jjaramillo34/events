// utils.js
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return "https://events-ten-ivory.vercel.app/";
  } else {
    return "http://localhost:3000";
  }
}

function loadData(filePath) {
  try {
    const jsonDirectory = path.join(process.cwd(), "public", filePath); // 'data/restaurants.json
    const fileContents = fs.readFileSync(jsonDirectory, "utf8");
    const data = JSON.parse(fileContents);

    data.forEach((item) => {
      item.neighborhood_slug = slugify((item.neighborhood || "").toLowerCase());
      item.borough_slug = slugify((item.borough2 || "").toLowerCase());

      // Format phone numbers if valid and 11 digits long
      ["phone_1", "phone_2", "phone_3"].forEach((phoneKey) => {
        const phone = item[phoneKey];
        if (phone && /^\d{11}$/.test(phone)) {
          const phoneNumber = parsePhoneNumberFromString(phone, "US");
          if (phoneNumber) {
            item[phoneKey] = phoneNumber.formatNational();
          }
        }
      });
    });

    return data;
  } catch (e) {
    console.error(`Failed to load data from ${filePath}: ${e}`);
    return [];
  }
}

function formatPhones(phone) {
  phone = phone.replace(/\D/g, "");
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
}

function getVersion() {
  const versionFilePath = path.join(process.cwd(), "data", "version.txt");
  try {
    const version = fs.readFileSync(versionFilePath, "utf8");
    return version.trim();
  } catch (e) {
    console.error(`Failed to retrieve version: ${e}`);
    return "Unknown";
  }
}

function getHealth() {
  return { status: "healthy" };
}

module.exports = {
  loadData,
  formatPhones,
  getVersion,
  getHealth,
  getBaseUrl,
};
