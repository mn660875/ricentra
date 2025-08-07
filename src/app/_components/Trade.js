import Image from "next/image";

export default function Latest() {
  return (
    <>
      <div className="w-full h-100 md:h-[90vh] mt-12 p-10">
        <h1 className="headings text-3xl font-bold tracking-tight mb-5">
          {" "}
          Trade & Export Highlights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grid Item 1 */}
          <div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={"/imgs/Trade-2.jpg"}
              alt="Rice Field"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="text-white text-center px-4">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Export Statistics of 2025
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  In 2025, Pakistan exported over 4 million tons of rice,
                  maintaining a strong position in the global agriculture trade
                  sector.
                </p>
                <button className="bg-[#db20d5]  px-4 p-2 font-semibold text-white mt-5 cursor-pointer ">
                  {" "}
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={"/imgs/Trade-2.jpg"}
              alt="Rice Field"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="text-white text-center px-4">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Pakistan’s Basmati in Global Markets
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Pakistan Basmati rice continues to dominate Middle Eastern
                  and European markets due to its long grain and aromatic
                  quality.
                </p>
                <button className="bg-[#db20d5] px-4 p-2 text-white mt-5 cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* Grid Item 3 */}
          <div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={"/imgs/Trade-2.jpg"}
              alt="Wheat Field"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="text-white text-center px-4">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Challenges in Rice Logistics
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Despite strong production, Pakistan faces logistical
                  challenges that impact delivery timelines and global
                  competitiveness.{" "}
                </p>
                <button className="bg-[#db20d5] px-4 p-2 text-white mt-5 cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="block m-auto mt-4 border bg-[#db20d5] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-transparent hover: border-[#db20d5] hover:text-[#db20d5] font-semibold">
          View All
        </button>
      </div>
      
    </>
  );
}
