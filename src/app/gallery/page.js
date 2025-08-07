import Image from "next/image";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default  function Page(){
    return (
        <>
         <Navbar/>
       <div className="w-full px-5 md:px-16 py-5">
      
       <h1 className="headings text-4xl font-bold">Image Gallery</h1>
      <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-4 auto-rows-[230px] gap-2 w-full max-w-3xl mt-10"  >
            <div className="col-span-2 row-span-2 rounded-lg">
                <Image src={"/imgs/1.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/>
            </div>
            <div className="col-span-2 rounded-lg">
            <Image src={"/imgs/latest-1.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/>
            </div>
            <div className="col-span-1 rounded-lg">
            <Image src={"/imgs/latest-2.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/>
            </div>
            <div className="col-span-1  rounded-lg">
            <Image src={"/imgs/latest-3.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/>
            </div>
            <div className="col-span-1  rounded-lg">  <Image src={"/imgs/heading.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/></div>
            <div className="col-span-3  rounded-lg">  <Image src={"/imgs/Trade-2.jpg"}
                alt="1"
                width={1200}
                height={800}
                className="w-[100%] h-[100%] object-cover rounded-lg"/></div>
        </div>
         </div>

       </div>
       <Footer/>
        </>
    )
}