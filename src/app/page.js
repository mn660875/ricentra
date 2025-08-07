import Image from "next/image";

import Navbar from "./_components/Navbar";

import { Clock, Heart } from "lucide-react";
import Latest from "./_components/Latest";
import Trade from "./_components/Trade";
import SliderShowcase from "./_components/SLiderShowcase";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import Footer from "./_components/Footer";


export default function Home() {
  
  const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedDate = formatter.format(date); // e.g., "August 4, 2025"

  return (
    <>
    <section>
      <Navbar/>
    </section>
     <main className="px-4 sm:px-10 space-y-10">
  <section >
    <h1 className=" text-3xl md:text-5xl mt-3 italic  tracking-tight font-extrabold py-2 text-transparent bg-[url('/imgs/heading.jpg')] bg-cover bg-bottom bg-clip-text">Ricentra Blogs</h1>
    <p className="italic font-semibold text-[#353839]  flex items-center gap-1 ">
      The  <Heart className="text-[#db20d5]" /> Of Premium Rice
     
    </p>
    
  </section>

  <section className="flex flex-col items-center md:flex-row gap-6">
    <div className="md:w-1/2">
      <Image src="/imgs/1.jpg"
      alt="header"
      width={1200}
      height={800}
       className="w-full h-full rounded-md object-cover" />
    </div>
    <div className="md:w-1/2 px-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        Rice Crop and Market Trends in Pakistan and Globally
      </h2>
      <p className="mt-2 text-[#708090] font-semibold">Nasir Akhtar</p>
      <p className="text-[#708090] font-semibold flex items-center gap-1">
        <Clock size={20} /> {formattedDate}
      </p>
      <p className="tracking-tight mt-2">
             Rice is one of Pakistan’s most important crops, both as a staple food and a major export commodity. Grown primarily in Punjab and Sindh, Pakistan produces high-quality varieties such as Basmati, which is highly demanded in international markets for its aroma and long grain. The country ranks among the top global rice exporters, supplying millions of tons annually to markets in the Middle East, Europe, and Africa. Domestically, rice plays a vital role in food security and rural employment.

      </p>
      <button className="bg-[#db20d5] mt-3 px-3 py-1 border rounded-sm text-white font-semibold cursor-pointer hover:bg-transparent hover:border-[#db20d5] hover:border hover:text-[#db20d5] transition-all">
        Read More
      </button>
    </div>
  </section>

  {/* Latest component should be in normal flow */}
  <section >
    <Latest />
   
  </section>
  <section>
  <Trade/>
  </section>
  <section>
  <SliderShowcase/>
  </section>
 
</main>

<ScrollToTopButton/>
<Footer/>
   
        
       
      
    </>
  );
}
