import Image from "next/image";
import Navbar from "../_components/Navbar";

export default function Page() {
    return (
        <>
        <Navbar/>
        <section className="px-4 sm:px-10 py-5">
        <div className="max-w-6xl mx-auto ">
          <h1 className="headings text-4xl font-bold mb-2">About Us</h1>
          <p className="text-gray-700 mb-5">
            At <span className="italic font-semibold">Ricentra,</span> we are dedicated to bringing Pakistan’s premium rice to the global market. <br/> Our leadership team combines <span className="italic font-semibold">vision,</span>  <span className="italic font-semibold">dedication,</span> and deep industry knowledge to make this mission a reality.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
            {/* Muhammad Nasir */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition ">
              <Image
                src="/imgs/nasir.jpg"
                alt="Muhammad Nasir"
                width={1200}
                height={800}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold ">Muhammad Nasir</h3>
              <p className="text-purple-700 font-medium">Co-Founder & CEO</p>
              <p className="mt-2 text-gray-600">
              As the Co-Founder and CEO of Ricentra, Muhammad Nasir brings a visionary mindset to the organization. With a solid background in technology and strategic planning, he leads the company’s growth and global expansion, ensuring innovation remains at the heart of every decision.
              </p>
            </div>
  
            {/* Chaudhary Usman */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <Image
                src="/imgs/usman.jpg"
                alt="Chaudhary Usman"
                width={1200}
                height={800}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Chaudhary Usman</h3>
              <p className="text-purple-700 font-medium">Co-Founder & COO</p>
              <p className="mt-2 text-gray-600">
              Serving as the Co-Founder and COO, Chaudhary Usman manages the operational backbone of Ricentra. His expertise in logistics and international trade allows him to streamline processes and maintain quality across all export activities, playing a key role in Ricentra’s global reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
     
    );
  }
  