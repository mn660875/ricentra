import Image from "next/image";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full px-5 md:px-16 py-5">
        <h1 className="headings text-3xl md:text-4xl font-bold text-center">Image Gallery</h1>

        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[230px] gap-2 w-full max-w-6xl mt-10">

            <div className="md:col-span-2 md:row-span-2 rounded-lg">
              <Image
                src="/imgs/1.jpg"
                alt="1"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="md:col-span-2 rounded-lg">
              <Image
                src="/imgs/crop.jpg"
                alt="2"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg">
              <Image
                src="/imgs/latest-2.jpg"
                alt="3"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg">
              <Image
                src="/imgs/latest-3.jpg"
                alt="4"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg">
              <Image
                src="/imgs/heading.jpg"
                alt="5"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="md:col-span-3 rounded-lg">
              <Image
                src="/imgs/Trade-2.jpg"
                alt="6"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
