import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container md:px-28 mt-32">
      <div className="bg-black p-6 rounded-t-3xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-40 lg:justify-center">
          <div>
            <Image src="/Logo.svg" alt="logo" width={130} height={70} />
          </div>
          <div className="flex flex-col lg:flex-row underline lg:space-x-8 lg:space-y-0 space-y-8 items-center text-white">
            <nav>
              <Link href="#">About us</Link>
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
          </div>
          <div className="flex flex-row gap-4">
            <FaLinkedinIn className="text-black bg-white p-2 w-8 h-8 rounded-full text-center" />
            <FaFacebookF className="text-black bg-white p-2 w-8 h-8 rounded-full text-center" />
            <FaTwitter className="text-black bg-white p-2 w-8 h-8 rounded-full text-center" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-36 items-center mt-12">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-4 md:text-left text-center items-center justify-center">
            <p className="bg-neonGreen w-32 px-2 py-1 text-lg font-bold rounded-lg text-center justify-center">
              Contact us:
            </p>
            <span className="text-white">Email: info@positivus.com</span>
            <span className="text-white">Phone: 555-567-8901</span>
            <span className="text-white">Address: 1234 Main St</span>
            <span className="text-white -mt-4">
              Moonstone City, Stardust State 12345
            </span>
          </div>

          {/* Buttons Section */}
          <div className="px-40 mt-10 md:mt-0">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 h-40 bg-charcoalBlack md:w-[570px] rounded-3xl md:p-4 p-8">
            <button className="text-white text-left border-white border-2 rounded-lg w-[220px] px-4 py-2">
              Email
            </button>
            <button className="text-black bg-neonGreen rounded-lg w-[220px] py-2">
              Subscribe to news
            </button>
          </div>
          </div>
          
        </div>
        <div className="border-white border-2 mt-16"></div>
        <p className="text-white mt-12 text-center">
          © 2023 Positivus. All Rights Reserved.{" "}
          <span>
            {" "}
            <Link href="#" className="ml-9 underline">
              Privacy Policy
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
