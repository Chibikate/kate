import Image from "next/image";
import image16 from "./assets/image-16.png";
import image17 from "./assets/image-17.png";
import image18 from "./assets/image-18.png";
import image19 from "./assets/image-19.png";
import image20 from "./assets/image-20.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <Image
                alt="Somethings never change"
                src={image16}
                width={1920}
                height={1080}
              />
              <div>
                <p className="mt-4 text-justify">
                  Once the threshold effect has been activated, we can adjust
                  the threshold range we desire to focus on. We can either input
                  a specific number or drag the slider from left to right until
                  we achieve our desired threshold. For the purpose of this
                  activity, we will input <span className="font-bold">450</span>{" "}
                  in the minimum threshold (left box) as indicated above.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={image17}
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <p className="mt-4 text-justify">
              With our minimum threshold as 450, we can observe that only the
              bone has been selected. Click on apply to apply the threshold
              effect.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={image18}
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <p className="mt-4 text-justify">
              With the threshold effect applied, click on the show 3D button to
              render the 3D image. Depending on the computer used, a short lag
              period may happen. If the 3D image does not appear in the upper
              right corner, we can click on the{" "}
              <span className="font-bold">&ldquo;Center View&rdquo;</span>{" "}
              button on the upper left of the blue window. Clicking on the 3D
              image with the left mouse button will allow the user to move the
              3D image. To zoom in and out, click and hold the right mouse
              button and drag until desired view is achieved.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={image19}
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex-1">
            <p className="mt-4 text-justify">
              Once we are satisfied with our 3D image, we may now save our file.
              We can choose to rename the file by clicking on the segmentation
              drop-down menu and select{" "}
              <span className="font-bold">
                &ldquo;Rename Current Segmentation&rdquo;.
              </span>{" "}
              For the purpose of the exercise, let us rename it to{" "}
              <span className="font-bold">&ldquo;Skull&rdquo;.</span> We can now
              save our file as{" "}
              <span className="font-bold">&ldquo;.STL&rdquo;</span> by clicking
              on the small down arrow on the right side of the segmentation
              button as indicated above to access the drop-down menu. Select
              export to files.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <Image
              alt="Somethings never change"
              src={image20}
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex-1">
            <p className="mt-4 text-center">
              Selecting export to files will prompt a small window to appear
              where the user can then select the destination folder by clicking
              on the file path as indicated above. Once the desired file
              destination is set, click export to save the file.
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame3">Back</Link>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <Link href="/mandiweb/3dslicer/frame5">Next</Link>
        </div>
      </div>
    </main>
  );
}
