import Image from "next/image";
import image13 from "./assets/image-13.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-1-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
            <p className="text-center mt-4">
              Once in the segment editor module, click on the{" "}
              <span className="font-bold">add</span> button to add the segment
              we will be working with.
            </p>
          </div>
          <div className="flex items-center justify-center py-6">
            <Image className="mr-16 ml-16 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
              alt="somethings never change"
              src={image13}
              width={500}
              height={450}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/3dslicer/frame3-2-1">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </main>
  );
}
