/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bgW8MLC9pAQ
 */
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ThreeSteps } from "./three-steps";

export function Clone2() {
  return (

    <div className="min-h-96 mb-12 p-6 lg:p-9 mx-auto border  border-stone-300 rounded-3xl relative">

        <Link href="https://clone.utopia.express/" className="absolute right-4 top-6 w-48  rounded-full">
          <p className="text-xs text-right mr-2 text-stone-600 opacity-25 hover:opacity-100">clone.utopia.express <ArrowIcon/></p>
        </Link>

        <Image
                  alt="Image"
                  className="float-left"
                  src="/elf.png"
                  width= "337"
                  height= "600"
                  style={{
                    objectFit: "cover",
                  }}
        />

        <div className="min-h-96 max-w-2xl grid-cols-1">
          <h1 className="md:mt-9 md:pt-12 pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-emerald-900 bg-clip-text text-start  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-5xl md:leading-[3rem]">
          Create a digital clone of anything
          </h1>
          <p className="pb-4 text-2xl font-normal text-slate-600 text-left">
          With the tools bellow you can take any picture of yourself. Or anyone. Or anything.    
          </p> 
          <Link href="">
            <Button>Create a Clone</Button>
          </Link>
        </div>

        <div className="min-h-16"></div>
       

    </div>
  )
}


function ArrowIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="float-right w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
  )
}

