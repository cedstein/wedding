// ...existing code...
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href={`/rsvp`} className="border border-gray-600 rounded p-2">
        Anmäl dig
      </Link>
    </>
  );
}
