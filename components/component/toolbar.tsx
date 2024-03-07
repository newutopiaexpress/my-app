/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bgW8MLC9pAQ
 */
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";


export function Toolbar() {
  return (
    <div className="mx-auto sm:w-full md:w-5/6">

      <div className="flex flex-row h-28">
        <div className="w-1/2 border-r border-slate-400"></div>
        <div className="w-1/2"></div>
      </div>

      <h1 className="pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text text-center  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[5rem]">Free your imagination</h1>
      <div className="w-100 md:w-3/5 mx-auto">
        <p className="text-center text-lg text-slate-500">The model gets better and better as you generate more and more images with the same subject. With your custom fine tuned model, you can generate any images featured of you, or your subject.<br/><span className="text-fuchsia-400">Coming in the next weeks! </span></p>
        <p className="text-center"></p>
      </div>


      <div className="flex flex-row h-8 pt-2">
        <div className="w-1/2 border-r border-slate-400"></div>
        <div className="w-1/2"></div>
      </div>

      <div className="mx-auto w-5/6 md:w-1/2 flex items-center p-2 bg-gradient-to-t from-stone-800 to-stone-700  mt-3 transition-all tracking-wide font-normal text-slate-300 shadow-xl shadow-fuchsia-400/50 hover:shadow-fuchsia-400/50 hover:shadow-lg rounded-full">
        <div className="flex items-center justify-center w-10 h-10 rounded-full">

        <Avatar className="ml-2">
          <AvatarImage src="/girl-icon.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        </div>
        <span className="mx-4 mr-10">photo of @me as caribbean pearl fisherman</span>
        <Button className="bg-transparent hover:bg-[#444] text-slate-400 hover:text-slate-200 p-2 rounded-full">
          <ArrowLeftIcon className="text-slate-400" />
        </Button>
        <Button className="bg-transparent hover:bg-[#444] text-slate-400 hover:text-slate-200 p-2 rounded-full">
          <SettingsIcon className="text-slate-400"/>
        </Button>
      </div>

      <div className="flex flex-row h-20 mt-4">
        <div className="w-1/2 border-r border-slate-400"></div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex flex-row h-20 mt-0">
        <div className="w-1/2 border-r border-slate-400"></div>
        <div className="w-1/2"></div>
      </div>

      
      <div className="flex flex-row md:w-3/5 gap-8 mx-auto">
        <div className="w-1/5 relative py-6">
          <div className="absolute ">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
            </span>
          </div>

          <Image
            alt="Image"
            className="object-cover rounded-full shadow-lg border-slate-100"
            src="/lucy2.png"
            width= "180"
            height= "180"
            style={{
            objectFit: "cover",
            }}
          />
        </div>
        <div className="w-4/5">
          <h1 className="text-start pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[5rem]">but until then!</h1>
          <p className="text-lg text-slate-500 leading-tight">Send an email to Lucy, our AI kind assistant &<br/>she will make it, and resend for you in minutes.</p>
          <p className="text-xs text-stone-500">Buy some credits and we'll send you the details.</p>
        </div>

      </div>
    </div>
  )
}



function ArrowLeftIcon() {
  return (
    <svg 
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
  
  )
}


function SettingsIcon() {
  return (
    <svg 
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
  
  )
}