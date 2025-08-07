import Image from "next/image";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className=" w-full px-5 md:px-16 py-5">
        <h1 className="headings text-2xl md:text-4xl font-bold tracking-tight">
          What is Trade?{" "}
        </h1>
        <div className="md:w-[80%] h-[400px] m-auto mt-3 md:mt-8">
          <Image
            src="/imgs/Trade-2.jpg"
            width={1200}
            height={800}
            alt="trade"
            className="w-[100%] h-[100%] rounded-xl"
          />
          <h2 className="headings font-bold text-xl mt-2">
            Definition and Importance
          </h2>
          <p className="tracking-tight">
            Trade is the exchange of goods and services between people,
            businesses, or countries. It plays a vital role in the global
            economy by allowing regions to specialize in the production of goods
            they are most efficient at and exchange them for items they lack.
            This interconnectivity not only boosts economic growth but also
            fosters international relationships and access to diverse products.
          </p>
          <h2 className="headings font-semibold text-xl mt-1">
            Types of Trade
          </h2>
          <p className="tracking-tight">
            Trade is generally categorized into two main types: domestic and
            international. Domestic trade occurs within a country’s borders,
            while international trade involves the exchange of goods across
            countries. International trade includes exports (goods sent out) and
            imports (goods brought in), and its governed by various trade
            agreements, tariffs, and policies.
          </p>
          <h2 className="headings font-semibold text-xl mt-1">
            Benefits of Trade
          </h2>
          <p className="tracking-tight">
            Trade enables better resource allocation, creates jobs, improves
            product variety and quality, and promotes innovation. For developing
            countries, it can open doors to foreign investment and global
            competitiveness. In todays digital age, e-commerce has also
            transformed trade, making it faster and more accessible.
          </p>
          <h2 className="headings font-semibold text-xl mt-1">
            Ricentras Role in Trade
          </h2>
          <p className="tracking-tight text-md">
            <span className="italic font-bold">Ricentra</span> is a
            forward-thinking company contributing to Pakistan’s global trade
            landscape through the export of premium-quality rice. By connecting
            local rice farmers and producers to international markets, Ricentra
            plays a key role in boosting agricultural exports. The company
            ensures quality control, efficient logistics, and compliance with
            international standards, making Pakistani Basmati rice a trusted
            name across borders. Through innovation, technology, and strong
            trade partnerships, Ricentra continues to strengthen its presence in
            the global agricultural export sector.
          </p>
        </div>
      </div>
    </>
  );
}
