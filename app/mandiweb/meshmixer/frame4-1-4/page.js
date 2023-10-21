import Image from "next/image";
import Image19 from "./assets/Image19.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
      <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
        <div className="flex justify-between mt-8 space-x-4">
          <Link href="/mandiweb/meshmixer/frame4-1">
            <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
              <ChevronLeftIcon className="w-8 h-8" />
            </div>
          </Link>
        </div>
  
        <div className="flex flex-col space-x-4 bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
          <div>
            <div className="flex flex-col space-y-2 items-center">
            </div>
            <div className="flex flex-row items-center justify-center y-2">
              <div className="flex flex-col items-center">
              <p className="text-center">
                Apply the &ldquo;<span className="font-bold">Make Solid</span>
                &rdquo; function by clicking on &ldquo;
                <span className="font-bold">Accept</span>
                &rdquo;.
              </p>
              <Image className="ml-16 mr-16 py-4 transform scale-100 hover:scale-150 transition-transform duration-500 ease-out"
                alt="Somethings never change"
                src={Image19}
                width={550}
                height={550}
              />   
            </div>
           </div>
        </div>
        </div>
        <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame4-2">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>     
    </main>
  );
}