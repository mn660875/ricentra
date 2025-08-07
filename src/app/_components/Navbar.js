import { BellIcon } from "lucide-react";
import Link from "next/link";
import BatteryStatus from "./BatteryStatus";

export default function Navbar(){
    return(
        <>
        <div className="w-full h-15 bg-white shadow-sm flex items-center justify-between px-4">

            <div className="bg-[#db20d5] px-3 py-1 rounded-lg">
                <h1 className="text-lg font-bold text-white">Logo</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-3  font-semibold text-lg text-[#3B3C36]">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"#"}>Lifestyle</Link></li>
                    <li><Link href={"#"}>Travel</Link></li>
                    <li><Link href={"/gallery"}>Gallery</Link></li>
                    <li><Link href={"/trade"}>Trade</Link></li>
                    <li><Link href={"/aboutus"}>About Us</Link></li>
                    
                </ul>

            </div>
            <div className="flex item-center gap-3 ">
                <input type="text"
                placeholder="Search Here"

                className="px-3 py-1 md:w-[250px] border-1 rounded-md outline-none border-gray-400 hidden md:block "/>
                <BellIcon size={"30px"} color="#db20d5"/> 
                
            </div>
            
<BatteryStatus/>
        </div>
        </>
    )
}