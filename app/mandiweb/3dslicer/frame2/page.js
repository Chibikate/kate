import Image from "next/image";
import image5 from "./assets/image-5.png";
import image6 from "./assets/image-6.png";
import image7 from "./assets/image-7.png";
import image8 from "./assets/image-8.png";
import image9 from "./assets/image-9.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <Image alt="something never " src={image5} width={1920} height={1080} />
        <div>
          <h3 className="text-2xl font-bold mb-4">3D Slicer Module</h3>
          <p className="text-justify">
            Modules in 3D Slicer allow us to perform actions that affect the
            DICOM files in various ways. The drop-down menu can be accessed from
            the upper left of the toolbar as indicated above. For the purpose of
            the activity, we will only be using{" "}
            <span className="font-bold">Crop Volume</span>,{" "}
            <span className="font-bold">Segment Editor</span>, and{" "}
            <span className="font-bold">Volumes Module</span> in preparation of
            the 3D file.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Image alt="something never " src={image6} width={1920} height={1080} />
        <p className="text-center mt-4">
          Click on the{" "}
          <span className="font-bold">&ldquo;Magnifying Glass&rdquo;</span>icon
          on the toolbar, just left from the module drop-down box to bring up
          the search function and type in &ldquo;
          <span className="font-bold">Crop</span>&rdquo;. Select{" "}
          <span className="font-bold">Crop Volume</span> and click on{" "}
          <span className="font-bold">Switch to Module</span>.
        </p>
      </div>

      <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <div>
          <Image
            alt="something never "
            src={image7}
            width={1900}
            height={1050}
          />
          <p>
            Once in the Crop Volume module, click on the input{" "}
            <span className="font-bold">Region of Interest (ROI)</span> drop
            down box and select{" "}
            <span className="font-bold">Create New Annotation ROI</span>.
          </p>
        </div>
        <div>
          <Image
            alt="something never "
            src={image8}
            width={1920}
            height={1090}
          />
          <p>
            Clicking on the &ldquo;<span className="font-bold">Eye</span>&rdquo;
            icon will reveal a bounding box that could be adjusted by clicking
            and dragging on the points to narrow the region of interest.
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4 bg-gray-100 p-8 rounded-lg shadow-md">
        <Image alt="something never " src={image9} width={1920} height={1080} />
        <p className="text-justify">
          Drag the bounding box to focus on the areas needed. For this exercise,
          focus must be on the midface and mandible cutting out the rest of the
          skull but making sure the temporomandibular joint is included. Once
          the region of interest is selected, click apply to apply the crop.
          Click the <span className="font-bold">&ldquo;eye&rdquo;</span> icon
          once again to remove the bounding box.
        </p>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame1">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3">Next</Link>
        </div>
      </div>
    </main>
  );
}
