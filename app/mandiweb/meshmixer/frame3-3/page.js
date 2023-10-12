import Image from "next/image";
import Image16 from "./assets/Image16.png";
import Image17 from "./assets/Image17.png";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex flex-row items-center text-center justify-between p-8 space-y-4">
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame3-2">
          <div className="w-16 h-16  hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col space-x-4 border-2 border-primary bg-[rgba(191,213,247,0.3)] p-8 rounded-lg shadow-md">
        <div>
          <div className="flex flex-col space-y-2 items-center">
          </div>
          <div className="flex flex-row items-center justify-center y-2">
            <div className="flex flex-col items-center">
            <p className="text-center">
              To mirror the remaining mandible, click on &ldquo;
              <span className="font-bold">Edit</span>&rdquo; in the left<br/> toolbar
              and select &ldquo;<span className="font-bold">Mirror</span>
              &rdquo;.
            </p>
            <Image
              alt="Somethings never change"
              src={Image16}
              width={550}
              height={550}
            />
          </div>
          <div className="flex flex-col items-center mx-2 y-2">
          <p className="text-center">
              {" "}
              A mirror image of the selected part will appear.<br/> To bring the
              mandible together, click and drag the <br/> arrow as shown above or
              click on the desired area.
            </p>
          <Image
              alt="Somethings never change"
              src={Image17}
              width={550}
              height={550}
            />
            
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 space-x-4">
        <Link href="/mandiweb/meshmixer/frame4">
          <div className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center mx-10 text-white font-bold rounded-full shadow-lg">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </Link>
      </div> 
      
    </main>
  );
}
