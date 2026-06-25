import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#243F8F]">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-white text-3xl font-bold">
            Online Crime Reporting Portal (Government of India)
          </h1>

          <div className="bg-white">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-[#182850] h-10 flex items-center">
        <ul className="flex items-center gap-6 px-3 text-white text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/About"
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/Login"
              className="hover:text-gray-300 transition-colors"
            >
              Login
            </Link>
          </li>

          {/* <li>
            <Link
              href="/Status_tracker"
              className="hover:text-gray-300 transition-colors"
            >
              Track Status
            </Link>
          </li> */}

          <li>
                <Link href="/Contact">
                  Contact
                </Link>
                </li>
        </ul>
      </nav>

    </>
  );
}