import Image from "next/image";

export default function Latest(){
 
    return(
        <>
           <div className="w-full mt-12 p-10">
            <h1 className="headings text-3xl font-bold tracking-tight mb-5">Latest Stories</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Grid Item 1 */}
  <div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
    <Image
       src={"/imgs/mazdoor.jpg"}
      alt="Rice Field"
      width={1200}
      height={800}
      className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="text-white text-center px-4">
        <h3 className="text-xl sm:text-2xl font-semibold">Rice Export</h3>
        <p className="text-sm sm:text-base mt-2">Pakistan is a top exporter of Basmati rice.</p>
        <button className="bg-[#db20d5]  px-4 p-2 font-semibold text-white mt-5 cursor-pointer " > Read More</button>
      </div>
    </div>
  </div>

{/* Grid Item 2 */}
<div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
    <Image
     src={"/imgs/latest-2.jpg"}
      alt="Rice Field"
      width={1200}
      height={800}
      className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="text-white text-center px-4">
        <h3 className="text-xl sm:text-2xl font-semibold">Rice Produce</h3>
        <p className="text-sm sm:text-base mt-2">Pakistan is a top producer of Basmati rice.</p>
        <button className="bg-[#db20d5] px-4 p-2 text-white mt-5 cursor-pointer">Read More</button>
      </div>
    </div>
  </div>
  {/* Grid Item 3 */}
  <div className="relative group h-[300px] sm:h-[350px] md:h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
    <Image
     src={"/imgs/latest-3.jpg"}
      alt="Wheat Field"
      width={1200}
      height={800}
      className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="text-white text-center px-4">
        <h3 className="text-xl sm:text-2xl font-semibold">Wheat Production</h3>
        <p className="text-sm sm:text-base mt-2">Wheat is Pakistan’s most widely grown crop.</p>
        <button className="bg-[#db20d5] px-4 p-2 text-white mt-5 cursor-pointer">Read More</button>
      </div>
    </div>
  </div>
</div>





<button className="block m-auto mt-4 border bg-[#db20d5] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-transparent hover: border-[#db20d5] hover:text-[#db20d5] font-semibold">View All</button>
      </div>
        </>
    )
}