"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import { toast } from "react-toastify";

export default function Page() {
 const [name, setName]= useState("")
 const [companyName, setCompanyName]= useState("")
 const [country, setCountry]= useState("")
 const [quantity, setQuantity]= useState("")
 const [rice_type, setRiceType]= useState("")
 const [phone, setPhone ]= useState("")
 const [email, setEmail ]= useState("")
 const [message , setMessage ]= useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();
  if(!name || !companyName || !country || !quantity || !rice_type || !phone || !email || !message){
    toast.error("Input Field Should Not Be Empty")
  }

  let data= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/inquiry`, {
    method: "POST",
    body: JSON.stringify({name , companyName , country , quantity , rice_type , phone , email , message  })
  })
  data= await data.json();

  if(data.success){
    toast.success("Inquiry Sent Successfully");
  }else{
    toast.error("Error while signing up")
    }




   
   
  };

  return (
    <>
    <Navbar/>
    
    <section className="w-full px-5 md:px-16 py-5"  id="enquiry">
    <h1 className="headings text-2xl md:text-4xl font-bold tracking-tight">
          Export Inquiry{" "}
        </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mt-5 mx-auto grid gap-6 bg-light p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
        
      
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={companyName}
          onChange={(e)=>setCompanyName(e.target.value)}
          
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
         
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity Required (e.g., 50 tons)"
          required
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}
        
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="riceType"
          placeholder="Type of Rice (e.g., Basmati, IRRI-6)"
          required
          value={rice_type}
          onChange={(e)=>setRiceType(e.target.value)}
          
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="contact"
          placeholder="Phone / WhatsApp"
          required
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
         
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
         
          className="p-3 rounded border border-gray-300"
        />
        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          rows={4}
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
         
          className="p-3 rounded border border-gray-300"
        ></textarea>

        <button
          type="submit"
          className="btn bg-[#db20d5]  inline-block font-semibold py-3 rounded text-white cursor-pointer transition-all"
        >
          Submit Enquiry
        </button>
      </form>
    </section>
    </>
  );
}
