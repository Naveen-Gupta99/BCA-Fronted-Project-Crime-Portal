import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#182850] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Online Crime Reporting Portal
            </h3>
            <p className="text-sm text-gray-300">
              A platform to report cyber crimes and track complaint status
              securely and efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/About">About</Link>
              </li>

              <li>
                <Link href="/Login">Login</Link>
              </li>

              <li>
                <Link href="/Status_tracker">
                  Track Status
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  Contact
                </Link>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <p className="text-gray-300 text-sm">
              Email: ng968633@gmail.com
            </p>

            <p className="text-gray-300 text-sm">
              Helpline: 1930
            </p>

            <p className="text-gray-300 text-sm">
              Government of India
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 border-t border-gray-600 pt-4 mt-4">
  <p>
    Disclaimer: This website is a college project created for educational and
    demonstration purposes only. It is not an official Government of India
    website and should not be considered a real crime reporting platform.
  </p>

  <p className="mt-2">
    Users are requested not to submit any real complaints, personal
    information, or sensitive data on this portal. This project is developed
    solely for academic purposes and follows general principles of privacy,
    security, and responsible use of information.
  </p>
</div>

        <hr className="my-6 border-gray-600" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Online Crime Reporting Portal.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}