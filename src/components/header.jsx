"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      {/* Desktop Header */}
      <div className="hidden md:flex container md:px-28 flex-row items-center space-x-80">
        <div>
          <Link href="#">
            <Image src="/logo-black.svg" alt="logo" width={130} height={70} />
          </Link>
        </div>
        <div className="flex flex-row space-x-8 items-center">
          <nav>
            <Link href="about">About us</Link>
          </nav>
          <nav>
            <Link href="#">Services</Link>
          </nav>
          <nav>
            <Link href="#">Use Cases</Link>
          </nav>
          <nav>
            <Link href="#">Pricing</Link>
          </nav>
          <nav>
            <Link href="#">Blog</Link>
          </nav>
          <nav className="border-2 border-black p-2 rounded-lg">
            <Link href="#">Request a quote</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden container px-6 py-4 justify-between items-center">
        <Image src="/logo-black.svg" alt="logo" width={100} height={50} />
        <button
          className="text-2xl font-bold"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Breadcrumb Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Image src="/logo-black.svg" alt="logo" width={100} height={50} />
            <button
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link href="#" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Use Cases
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="border-2 border-black p-2 rounded-lg text-center"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
