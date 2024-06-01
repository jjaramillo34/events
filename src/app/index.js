// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Event Info App</h1>
      <Link href="/restaurants">
        <a>View Restaurants</a>
      </Link>
    </div>
  );
}
