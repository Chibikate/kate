"use client";
import Image from "next/image";
import "./globals.css";
import { Inter, Anton } from "next/font/google";
import Logo from "./assets/Logo.svg";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-rows space-x-4 justify-between items-center bg-[#1d2d44] p-4">
          <div className="flex flex-rows items-center space-x-4">
            <Link href={"/"}>
              <Image src={Logo} />
            </Link>
            <div>
              <p className={`${anton.className} text-xl text-white`}>
                MandiWeb
              </p>
              <p className={`${inter.className} font-medium text-white`}>
                Web-based Tutorial on Virtual Planning for <br />
                Reconstruction of Simple Mandibular Fractures
              </p>
            </div>
          </div>
          <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </p>
                  </Link>

                  <Link href="/aboutus">
                    <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About us
                    </p>
                  </Link>

                  <div
                    className="relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center space-x-4">
                      Tutorials
                      <ChevronDownIcon
                        className={`h-4 w-4 ml-1 transition ${
                          isHovered ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isHovered && (
                      <div className="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-md">
                        <Link href="/thingstodownload">
                          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Things to download
                          </p>
                        </Link>
                        <Link href="/3dslicer">
                          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            3D slicer
                          </p>
                        </Link>
                        <Link href="/meshmixer">
                          <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Meshmixer
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="pt-4">{children}</div>
        <footer className="bg-primary text-center text-white">
          <p className="py-6 text-sm">
            © Copyright 2023 <br />{" "}
            <span className="font-bold">
              Web-based Tutorial on Virtual Planning for Reconstruction of
              Simple Mandibular Fractures
            </span>
            <br />
            Mindanao State University - Iligan Institure of Technology (MSU-IIT)
            <br />
            Andres Bonifacio Avenue, Tibanga 9200 Iligan City, Philippines
          </p>
        </footer>
      </body>
    </html>
  );
}
