export const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    // Reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    // Reference for production environment
    return "https://events-ten-ivory.vercel.app/";
  } else {
    // Reference for local development
    return "http://localhost:3000";
  }
};
