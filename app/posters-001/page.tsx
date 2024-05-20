"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


export default function Page() {
  return (

<div className="sm:w-full md:w-full mx-auto py-6 px-9">

<Separator className="w-full h-px bg-stone-300 mt-9 mb-4"/>
    <p className="ml-2 text-xs uppercase tracking-wider text-stone-400">
      Printable poster series
      <span className="float-right">2024.05.01</span>
    </p>
  <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>

    <div className="grid md:grid-cols-9 gap-0 min-h-96 mt-6 mb-12 p-6 lg:p-9 mx-auto border  border-stone-300 rounded-3xl relative">

        <div className="md:col-span-4">

                        <Image
                        alt="Image"
                        className="float-left"
                        src="/spark.png"
                        width= "480"
                        height= "600"
                        style={{
                        objectFit: "cover",
                        }}
                        /> 
                    
        </div>

        <div className=" md:col-span-5 min-h-96 max-w-2xl">

          <div className="mt-9 w-60 text-center py-1 px-3 rounded-full text-xs bg-amber-200 text-stone-700">HQ, 300 Dpi printable Poster Series</div>

          <h1 className="pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-600 bg-clip-text text-start  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-5xl md:leading-[3rem]">
          Sparks of an artificial consciousness
          </h1>
          <p className="pb-6 text-2xl font-normal text-slate-600 text-left">
            Poster series based on the "Sparks of Consciousness"  experiment.   
          </p>
          <p className="text-md">
          The experiment is based on what image an LLM produces when the input (context) is close to zero. We created this situation in such a way that the input image was a single-colored blank surface (canvas) that only contained a QR code. Then we asked LLM to fill in the empty part with the "fill with backgrounds" command. 
          </p> <br/>
          <p className="text-md">
          The command does not contain any specific reference, so LLM is forced to conjure up an image from his imagination. The vast majority of the hundreds of resulting images depicted amorphous shapes or were completely empty images, but 5-10% showed surprisingly meaningful results. This series consists of these "sparks of meaning".
          </p> 

          <div className="mt-6">
          <Link target="_blank" href="https://buy.stripe.com/cN2aIBaZr2SM2xq8wL">
            <Button variant="outline" className=" text-slate-500 hover:text-slate-800 h-14 border border-slate-300">
                <span className="ml-4">8 pieces of high quality posters 
                <Button variant="outline" className="bg-amber-200 font-extrabold ml-2">24.99€</Button></span>
                <span className="float-right ml-2">
                <Link href="">
                      <Image
                        alt="Image"
                        className="float-left w-10 ml-2 opacity-25"
                        src="/untitled-1.png"
                        width= "986"
                        height= "411"
                        style={{
                        objectFit: "cover",
                        }}
                        />
                </Link>
                </span>
            </Button>
          </Link>
          </div>
         
        </div>

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-9">
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/coke_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/broccoli_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/honey_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/disco_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/bonsai_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/daftpunk_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/fuck_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
          <div>
            <Image
              alt="Image"
              className="w-120"
              src="/pencil_small.jpg"
              width= "694"
              height= "1041"
              style={{
              objectFit: "cover",
              }}
              /> 
          </div>
    </div>

    <div className="mx-auto text-center mt-6 ">
          <Link target="_blank" href="https://buy.stripe.com/cN2aIBaZr2SM2xq8wL">
            <Button variant="outline" className=" text-slate-500 hover:text-slate-800 h-14 border border-slate-300">
                <span className="ml-4"><span className="font-extrabold">8 pieces</span> of high quality, printable, <span className="font-extrabold">300Dpi, A/3 size posters</span> 
                <Button variant="outline" className="bg-amber-200 font-extrabold ml-2">24.99€</Button></span>
                <span className="float-right ml-2">
                      <Image
                        alt="Image"
                        className="float-left w-10 ml-2 opacity-25"
                        src="/untitled-1.png"
                        width= "986"
                        height= "411"
                        style={{
                        objectFit: "cover",
                        }}
                        />
                </span>
            </Button>
          </Link>
    </div>

    
</div>         
    
  );
}


function ArrowIcon() {
  return (
<svg className="text-red-400 float-right w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  )
}
