// utils.js
import { parsePhoneNumberFromString } from "libphonenumber-js";

export function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return "https://events-ten-ivory.vercel.app/";
  } else {
    return "http://localhost:3000";
  }
}

export function formatPhones(phone) {
  phone = phone.replace(/\D/g, "");
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
}

export function getHealth() {
  return { status: "healthy" };
}

// Server-side only functions
export async function loadData(filePath) {
  if (typeof window === "undefined") {
    const fs = await import("fs/promises");
    const path = await import("path");
    const slugify = (await import("slugify")).default;

    try {
      const jsonDirectory = path.join(process.cwd(), "public", filePath);
      const fileContents = await fs.readFile(jsonDirectory, "utf8");
      const data = JSON.parse(fileContents);

      data.forEach((item) => {
        item.neighborhood_slug = slugify(
          (item.neighborhood || "").toLowerCase()
        );
        item.borough_slug = slugify((item.borough2 || "").toLowerCase());

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
  } else {
    console.error("loadData function is only available on the server side");
    return [];
  }
}

export async function getVersion() {
  if (typeof window === "undefined") {
    const fs = await import("fs/promises");
    const path = await import("path");

    const versionFilePath = path.join(process.cwd(), "data", "version.txt");
    try {
      const version = await fs.readFile(versionFilePath, "utf8");
      return version.trim();
    } catch (e) {
      console.error(`Failed to retrieve version: ${e}`);
      return "Unknown";
    }
  } else {
    console.error("getVersion function is only available on the server side");
    return "Unknown";
  }
}
