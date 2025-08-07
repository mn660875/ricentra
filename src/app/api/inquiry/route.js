import { connectionStr } from "@/app/lib/db";
import { Inquiry } from "@/app/lib/model/inquiry";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data=[];
    let success= true;

    try{
        await mongoose.connect(connectionStr);
        data= await Inquiry.find();

    }catch{
        data= {result: "false"};
        success= false
    }

    return NextResponse.json({result: data, success})
}
 export  async function POST(request){
    let payload= await request.json();

    await mongoose.connect(connectionStr)
    let inquiry= new Inquiry(payload)
    const result= await inquiry.save();
    return NextResponse.json({result, success:true})
 }