// utils.js
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

function loadData(filePath) {
  try {
    const jsonDirectory = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(jsonDirectory, "utf8");
    const data = JSON.parse(fileContents);

    data.forEach((item) => {
      item.neighborhood_slug = slugify((item.neighborhood || "").toLowerCase());

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
};
