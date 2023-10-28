'use client';

import { Progress } from 'flowbite-react';

import Image from "next/image";
import Image17 from "./assets/Image17.png";
import Image18 from "./assets/Image18.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden  dark:text-white">
    <Progress progress={64.8} size="md"/>
    <main className="flex flex-col md:flex md:flex-row items-center justify-between p-14 space-y-4">
      <div className="md:flex justify-between mt-8 space-x-4  hidden">
        <Link href="/mandiweb/mesh-mixer/frame3-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover.border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-14 rounded-lg shadow-md items-center text-center">
        <div className="items-center">
          <Image className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
            alt="Somethings never change"
            src={Image17}
            width={400}
            height={450}
          />
          <Image
            className="transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
            alt="Somethings never change"
            src={Image18}
            width={400}
            height={450}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
      <Link href="/mandiweb/mesh-mixer/frame3-1" className="md:hidden flex">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover.border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
        <Link href="/mandiweb/mesh-mixer/frame3-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
    </div>
  );
}
