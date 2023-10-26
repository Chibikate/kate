import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen flow-x-hidden items-center justify-center bg-white py-4 ml-16 mr-16">
      <div className=" space-between rounded-lg shadow-xl h-[30rem]">
        <div className="items-center text-center justify-between ">
          <p className="p-4 font-bold text-3xl text-white bg-primary">INTRODUCTION</p>
        </div>
        <div className="text-justify space-y-4 mx-2 pt-4">
          <p>
            <spand className="font-bold">
              Virtual surgical planning (VSP){" "}
            </spand>
            is a new technology that uses computers to help surgeons plan and
            perform mandibular reconstructions with greater precision and
            accuracy. Mandibular reconstruction is a complex surgery that is
            often needed after trauma, cancer treatment, or congenital
            deformities. The goal is to restore both the function and appearance
            of the lower jaw. VSP allows surgeons to create a digital model of
            the patient's jaw and plan the surgery in detail before it is
            performed. This helps to reduce the risk of complications and
            improve the outcome of the surgery. This tutorial will teach
            students the basics of VSP for mandibular reconstruction. Students
            will learn how to use the VSP software - 3D slicer and Meshmixer to
            create a digital model of the patient's jaw.
          </p>
          <p className="pt-4">
            <span className="font-bold ">Computed Tomography (CT)</span> scans
            and{" "}
            <span className="font-bold ">Magnetic Resonance Imaging (MRI)</span>
            scans are medical imaging techniques that produce detailed images of
            the inside of the body. These images can be used to create a
            <span className="font-bold ">three-dimensional (3D) </span>model of
            the patient's jaw.
          </p>
          <p className="pt-4">
            <span className="font-bold ">
              Digital Imaging and Communications in Medicine (DICOM)
            </span>{" "}
            is the international standard for storing, transmitting, and
            managing medical imaging information and data. 3D printing in
            medicine uses DICOM files to create custom anatomical parts, such as
            surgical planning guides.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
            <div className="w-32 h-12 hover:border-white-400 hover:border-2 bg-primary flex items-center justify-center hover-border hover:border-white-400 hover:text-white text-white font-bold rounded-full shadow-lg mt-8 cursor-pointer">
              <Link href="/mandiweb/3d-slicer">Proceed</Link>
            </div>
          </div>
    </div>
  );
}
