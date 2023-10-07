import Image from "next/image";
import Image16 from "./assets/Image16.png";
import Image17 from "./assets/Image17.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-row space-x-4 items-center"></div>

        <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex-1">
            <Image
              alt="Somethings never change"
              src={Image16}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              To mirror the remaining mandible, click on &ldquo;
              <span className="font-bold">Edit</span>&rdquo; in the left toolbar
              and select &ldquo;<span className="font-bold">Mirror</span>
              &rdquo;.
            </p>
          </div>
          <div className="flex-1">
            <Image
              alt="Somethings never change"
              src={Image17}
              width={1920}
              height={1080}
            />
            <p className="text-center">
              {" "}
              A mirror image of the selected part will appear. To bring the
              mandible together, click and drag the arrow as shown above or
              click on the desired area.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame3-2">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/meshmixer/frame4">Next</Link>
        </div>
      </div>
    </main>
  );
}