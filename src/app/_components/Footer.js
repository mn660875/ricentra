import Image from "next/image";
import Navbar from "./Navbar";

import { FaComment, FaEye, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full md:h-[100vh] bg-black p-12  flex items-center flex-col sm:flex-row gap-4 text-white">

        <div className=" md:w-1/3 h-[100%] p-5">
          <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
            About
          </h2>
          <p className="tracking-tight pt-8">
            Ricentra is a forward-thinking platform dedicated to sharing
            insights on global trade, innovation, and technology. We aim to
            empower readers with accurate information, thought-provoking
            articles, and practical knowledge that supports business growth and
            personal development. Our mission is to bridge the gap between
            global markets and everyday users through reliable content.
          </p>
        </div>
        <div className="md:w-1/3 h-[100%] p-5">
          <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
            Latest Post
          </h2>
          <div className="pt-8 flex items-center justify-between gap-2">
            <div className="w-50 h-30">
              <Image
                src={"/imgs/1.jpg"}
                alt="latest post"
                width={1200}
                height={800}
                className="h-[100%] w-[100%] object-center"
              />
            </div>
            <div className="flex justify-center flex-col text-sm">
              <h1 className="tracking-tight font-semibold">Discover how Pakistan’s rice export</h1>
              <p className="mt-2">Author</p>
            <div className="flex items-center gap-4 mt-2">
            <div className="flex item-center gap-1 "><FaComment size={"20px"}/>300</div>
            <div className="flex item-center gap-1"><FaEye  size={"20px"}/> 5</div>
            </div>
             
            </div>
          </div>
          <div className="pt-8 flex items-center gap-2">
            <div className="w-50 h-30">
              <Image
                src={"/imgs/Trade-2.jpg"}
                alt="latest post"
                width={1200}
                height={800}
                className="h-[100%] w-[100%] object-center"
              />
            </div>
            <div className="flex justify-center flex-col text-sm">
              <h1 className="tracking-tight font-semibold">Discover how Pakistan’s rice export</h1>
              <p className="mt-2">Author</p>
            <div className="flex items-center gap-4 mt-2">
            <div className="flex item-center gap-1"><FaComment  size={"20px"}/>300</div>
            <div className="flex item-center gap-1"><FaEye  size={"20px"}/>5</div>
            </div>
             
            </div>
          </div>
          
        </div>
        <div className="md:w-1/3  h-[100%] p-5">
        <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
            Social Media
          </h2>
          <div className="flex flex-wrap mt-10 ">
            <ul className="list-none flex items-center- gap-3 flex-wrap ">
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaFacebook/></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaTwitter/></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaInstagram/></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaTiktok/></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaWhatsapp /></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaYoutube/></li>
              <li className="text-xl rounded-lg bg-white  text-black p-3 " ><FaLinkedin/></li>
            </ul>
            <div className="mt-10">
              <p className="text-lg tracking-tight" >Subscribe here to get interesting stuff and updates!</p>
              <div className="flex items-center mt-5">
                <input type="email"
                placeholder="Enter Email Here"
                className="border-1 border-white px-2 py-1 w-60"
                />
                <button className="bg-[#db20d5] text-white px-3 py-1 font-semibold border-1 border-[#db20d5]  cursor-pointer hover:bg-white hover:text-[#db20d5] transition">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
}
