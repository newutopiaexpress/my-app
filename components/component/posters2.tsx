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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export function Posters2() {
  return (

    <div className="grid md:grid-cols-5 gap-9 min-h-96 mb-12 p-6 lg:p-9 mx-auto border  border-stone-300 rounded-3xl relative">

        <Link href="https://clone.utopia.express/" className="absolute right-4 top-6 w-48  rounded-full">
          <p className="text-xs text-right mr-2 text-stone-600 opacity-25 hover:opacity-100">Series 002 <ArrowIcon/></p>
        </Link>

        <div className="md:col-span-2">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="p-9 md:p-12">
                        <Image
                        alt="Image"
                        className="float-left shadow-xl shadow-stone-800/20"
                        src="/coke_small.jpg"
                        width= "424"
                        height= "600"
                        style={{
                        objectFit: "cover",
                        }}
                        /> 
                    </CarouselItem>
                    <CarouselItem className="p-9 md:p-12">
                        <Image
                        alt="Image"
                        className="float-left shadow-xl shadow-stone-800/20"
                        src="/broccoli_small.jpg"
                        width= "424"
                        height= "60"
                        style={{
                        objectFit: "cover",
                        }}
                        /> 
                    </CarouselItem>
                    <CarouselItem className="p-9 md:p-12">
                        <Image
                        alt="Image"
                        className="float-left shadow-xl shadow-stone-800/20"
                        src="/disco_small.jpg"
                        width= "424"
                        height= "60"
                        style={{
                        objectFit: "cover",
                        }}
                        /> 
                    </CarouselItem>
                    <CarouselItem className="p-9 md:p-12">
                        <Image
                        alt="Image"
                        className="float-left shadow-xl shadow-stone-800/20"
                        src="/honey_small.jpg"
                        width= "424"
                        height= "60"
                        style={{
                        objectFit: "cover",
                        }}
                        /> 
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-left-6"/>
                <CarouselNext className="-right-4"/>
            </Carousel>
        </div>

        <div className="p-6 md:col-span-3 min-h-96 max-w-2xl">

          <div className="mt-12 w-60 text-center py-1 px-3 rounded-full text-xs bg-amber-200 text-stone-700">HQ, 300 Dpi printable Poster Series</div>

          <h1 className="pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-600 bg-clip-text text-start  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-5xl md:leading-[3rem]">
          Sparks of an artificial consciousness
          </h1>
          <p className="pb-6 text-2xl font-normal text-slate-600 text-left">
            Poster series based on the "Sparks of Consciousness"  experiment.   
          </p> 
         
          <Link href="/posters-001">
            <Button variant="outline" className=" text-slate-500 hover:text-slate-800 h-14 border border-slate-300">
                <span className="ml-4">View all <span className="font-extrabold">Printable Posters</span></span>
                <span className="float-right ml-2">
                <Button variant="ghost" size="sm">
                  <ArrowIcon/>
                </Button>
                </span>
            </Button>
          </Link>
         
        </div>



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

