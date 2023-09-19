import Image from "next/image";
import image6 from "./assets/image-6.png";

import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image
          alt="somethings never change"
          src={image6}
          width={1920}
          height={1080}
        />
        <p className="text-justify mt-4">
          The CT scan files should show up once the DICOM files are done
          loading. To zoom in and out, hold &ldquo;
          <span className="font-bold">Right Click</span>&rdquo; and &ldquo;
          <span className="font-bold">Drag</span>&rdquo; until the desired view
          is acquired. To scroll through the CT scan, use the middle mouse
          scroll-wheel or dragging the slider above the boxes will both work
          equally well. <br /> The current view we are using is called &ldquo;
          <span className="font-bold">Four Up</span>&rdquo;. The empty window on
          the upper right is where the 3D image will be shown once activated.
          Clicking on the arrow on the toolbar as indicated above will activate
          a drop-down selection box which contains different views the user can
          utilize according to preference. For purposes of the activity, we will
          use the default four-up view.
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1-4">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame2">Next</Link>
        </div>
      </div>
    </main>
  );
}