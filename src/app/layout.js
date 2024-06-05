import Link from "next/link";

export const metadata = {
  title: "NYC Events",
  description: "NYC Events guide for your next event in New York City",
  keywords: "events, NYC, New York City, food festivals, restaurant openings",

  // Open Graph
  og_title: "NYC Events",
  og_description: "NYC Events guide for your next event in New York City",
  og_image: "/img/og_image.jpg",
  og_url: "https://nyc-events.vercel.app/",
  og_type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.og_title} />
        <meta property="og:description" content={metadata.og_description} />
        <meta property="og:image" content={metadata.og_image} />
        <meta property="og:url" content={metadata.og_url} />
        <meta property="og:type" content={metadata.og_type} />
      </head>
      <body>{children}</body>
    </html>
  );
}
