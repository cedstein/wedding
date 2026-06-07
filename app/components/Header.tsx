import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-end p-2 space-x-4">
        <Link href={"Start"}>Start</Link>
        <Link href={"Info"}>Info</Link>
        <Link href={"OSA"}>OSA</Link>
      </nav>
    </header>
  );
}
