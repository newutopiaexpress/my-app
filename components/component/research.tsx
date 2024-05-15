/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7VFkLwBdWbx
 */
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Typewriter from 'typewriter-effect';
import { ThreeSteps2 } from "./three-steps2";
import Link from "next/link";
import React from "react"; 


export function Research() {
  return (
    <div className="mt-12 mb-9">

      
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 border-stone-300 rounded-3xl bg-emerald-500 shadow-xl">

          <div className="p-4 lg:p-9 lg:col-span-2 sm:mb-8 flex flex-col transition-all  relative"> 

            <h1 className="pb-2 pt-2 animate-fade text-left text-stone-700 font-extrabold tracking-tight drop-shadow-sm [text-wrap:balance] text-2xl md:text-3xl md:leading-[4rem]">
              <span className="bg-gradient-to-br from-lime-100 to-slate-100 bg-clip-text text-transparent">Lucy</span><span className="text-2xl font-normal text-lime-200"> - Your companion to down the rabbit hole!</span>
            </h1>
            
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3 w-full pt-2 lg:gap-6">
              <div className="p-4 basis-full lg:basis-1/3 transition-all rounded-xl border border-green-400 hover:border hover:border-lime-300 hover:shadow-lg">
                <UploadIcon/>
                <p className="text-md text-lime-200 pt-4">Refine</p>
                <p className="text-slate-100 text-xs">Lucy understands what you need, and helps you refine your search.</p>
              </div>
              <div className="p-4 basis-full lg:basis-1/3 transition-all rounded-xl border border-green-400 hover:border hover:border-lime-300 hover:shadow-lg">
                <TrainingIcon/>
                <p className="text-md text-lime-200 pt-4">Research</p>
                <p className="text-slate-100 text-xs">Runs multiple parallel searches and collects reliable data.</p>
              </div>
              <div className="p-4 basis-full lg:basis-1/3 transition-all rounded-xl border border-green-400 hover:border hover:border-lime-300 hover:shadow-lg">
                <GenerateIcon/>
                <p className="text-md text-lime-200 pt-4">Interpret</p>
                <p className="text-slate-100 text-xs">Lucy is able to chat about the results & help you with follow-up questions</p>
              </div>
            </div>

          </div>

          <div className="mt-6 p-6 flex flex-col transition-all bg-transparent relative"> 
            
            <Link href="https://search.utopia.express" className="absolute right-4 top-0 w-48  rounded-full">
              <p className="text-xs text-right text-stone-100 opacity-50 hover:opacity-100">search.utopia.express <ArrowIcon/></p>
            </Link>

            <div className="relative w-32 h-32">
              <div className="absolute">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-lime-500"></span>
                </span>
              </div>
              <Image
                alt="Image"
                className="sm:w-28 sm:h-28 md:w-34 md:h-34 float-left mr-6 mb-6 object-cover rounded-full shadow-xl border-1 border-lime-200"
                src="/lucy2.png"
                width= "100"
                height= "100"
                style={{
                objectFit: "cover",
                }}
              />
            </div>

            <p className="h-14 text-sm text-slate-100">
              <Typewriter
                options={{
                  loop: true,
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Who are my competitors and how are they better than me?')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Could the Pyramids have been used as power-generating transformers?')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Im looking for a long black skirt with cannabis motifs')
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </p>

            <Link target="_blank" href="https://search.utopia.express">
              <Button variant="outline" className=" text-lime-200 hover:text-slate-800 h-14 w-60">
                  <span className="ml-4">search.utopia.express</span>
                  <span className="float-right ml-2">
                  <Button variant="ghost" size="sm">
                    <ArrowIcon/>
                  </Button>
                  </span>
              </Button>
            </Link>

          </div>

        </div>

    </div>
  )
}




function UploadIcon() {
  return (
<svg className="w-9 h-9 stroke-lime-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

  )
}


function GenerateIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9 stroke-lime-200">
<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>


  )
}

function TrainingIcon() {
  return (
<svg className="p-1 animate-spin h-9 w-9 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="stroke-green-400" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path className=" fill-lime-200" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
  )
}


function ArrowIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="float-right w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
  )
}


function MergeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}



