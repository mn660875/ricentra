import Image from "next/image";
import { 
  FaComment, FaEye, FaFacebook, FaInstagram, 
  FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube 
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-black p-6 md:p-12 flex flex-col md:flex-row md:items-start gap-8 text-white">
      
      {/* About Section */}
      <div className="w-full md:w-1/3 p-5">
        <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
          About
        </h2>
        <p className="tracking-tight pt-6 text-sm leading-relaxed">
          Ricely is a forward-thinking platform dedicated to sharing insights 
          on global trade, innovation, and technology. We aim to empower readers 
          with accurate information, thought-provoking articles, and practical 
          knowledge that supports business growth and personal development.
        </p>
      </div>

      {/* Latest Posts */}
      <div className="w-full md:w-1/3 p-5">
        <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
          Latest Post
        </h2>

        {[ 
          { img: "/imgs/1.jpg" }, 
          { img: "/imgs/Trade-2.jpg" } 
        ].map((post, idx) => (
          <div key={idx} className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-full sm:w-24">
              <Image
                src={post.img}
                alt="latest post"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div className="flex flex-col text-sm">
              <h1 className="tracking-tight font-semibold">
                Discover how Pakistan’s rice export
              </h1>
              <p className="mt-2">Author</p>
              <div className="flex items-center gap-4 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <FaComment size={16}/>300
                </div>
                <div className="flex items-center gap-1">
                  <FaEye size={16}/>5
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="w-full md:w-1/3 p-5">
        <h2 className="text-xl font-semibold border-b-2 border-gray-600 w-fit pb-1">
          Social Media
        </h2>
        <div className="mt-6">
          <ul className="flex flex-wrap gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaLinkedin].map((Icon, idx) => (
              <li key={idx} className="text-xl rounded-lg bg-white text-black p-3 cursor-pointer hover:scale-110 transition">
                <Icon />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm md:text-base tracking-tight">
              Subscribe here to get interesting stuff and updates!
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center mt-4 gap-3">
              <input
                type="email"
                placeholder="Enter Email Here"
                className="border border-white px-3 py-2 flex-1 bg-transparent outline-none"
              />
              <button className="bg-[#db20d5] text-white px-4 py-2 font-semibold border border-[#db20d5] hover:bg-white hover:text-[#db20d5] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
