"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-end items-center p-2 space-x-4">
        <Link href={"Start"}>Start</Link>
        <Link href={"Info"}>Info</Link>
        <Link href={"OSA"}>OSA</Link>
        {/* Liten play-knapp längst till höger */}
        {/* <InlinePlayButton /> */}
      </nav>
    </header>
  );
}
