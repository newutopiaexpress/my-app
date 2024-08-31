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


export function Photographer2() {
  return (
    <div className="mb-10">

        <div className="py-9">
            <Separator className="w-full h-px bg-stone-500/10 mt-4 mb-4"/>
            <Link href="https://clone.utopia.express" className="" target="_blank">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 hover:text-stone-800">
                        <span className="invisible md:visible">Astria AI</span>
                        <span className="float-right">clone.utopia.express <ArrowIcon/></span>
                    </p>
            </Link>
            <Separator className="w-full h-px bg-stone-500/10 mt-4 mb-4"/>
        </div>
      
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 lg:gap-4">

            <div className="col-span-1 transition-all relative"> 
                
                <div className="relative mx-auto bg-transparent">

                    <Image
                        src="/robot.png"
                        alt="AI Photographer"
                        width={570}
                        height={582}
                        className="mx-auto duration-400 transition-all cover md:float-right scale-75 md:scale-100">
                    </Image>

                </div>   

            </div> 

            <div className="col-span-1 text-stone-500 sm:mb-8 flex flex-col transition-all rounded-3xl relative"> 

                    <h1 className="relative mt-9 pb-6 md:mt-10 text-center md:text-left animate-fade bg-gradient-to-br from-stone-700 to-stone-800 bg-clip-text font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[4rem]">
                      The 
                      <span className="relative text-center align-top bg-gradient-to-br from-stone-400/10 to-stone-400/30 bg-clip-text"> Ai </span> 
                        Photographer
                    </h1>
                    <p className="text-center md:text-left text-2xl max-w-[390px]">Stunningly lifelike photos, as if taken by a professional photographer.</p>
                    
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 md:gap-9 w-full md:max-w-[600px] pt-6 text-stone-500 text-center">
                    
                      <div className="py-6 text-left  transition-all relative mb-4">
                          <ScanIcon/>
                          <p className="text-center md:text-left pt-2 text-sm leading-5">
                              <span className="font-normal">Upload some portraits and let the magic begin!</span>
                          </p>
                      </div>
                      <div className="py-6 text-left transition-all relative mb-4">
                          <GenerateIcon/>
                          <p className="text-center md:text-left pt-2 text-sm leading-5"> 
                              <span className="font-normal">Our AI model able to learn, and reconstruct your characteristic.</span>
                          </p>
                      </div>
                      
                      <div className="relative py-6 text-left transition-all mb-4">
                          <TrainingIcon/>
                          <p className="text-center md:text-left pt-2 text-sm leading-5">
                              <span className="font-normal">One serie contain 24 photos in 3 different style.</span>
                          </p>
                      </div>
                    </div>

                    <Link href="https://search.utopia.express" className="hover:text-stone-700" target="_blank">
                        <div className=" text-stone-800 mt-16">
                            <h2 className="text-4xl font-extrabold float-left"><span className="align-middle text-sm opacity-35">from: </span>9<span className="align-middle text-sm opacity-35"> €/series</span></h2>
                            <Badge variant="orangeblack" className="align-middle text-lg mt-2 ml-4">Get Your Portraits!</Badge>   
                        </div>
                    </Link>
            </div>        

        </div>


    </div>
  )
}




function ScanIcon() {
  return (
<svg className="w-12 h-12 stroke-stone-400 mx-auto md:text-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>

  )
}


function GenerateIcon() {
  return (
<svg className="w-12 h-11 stroke-stone-400 mx-auto md:text-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
</svg>
  )
}

function TrainingIcon() {
  return (
<svg className="w-12 h-11 stroke-stone-400 mx-auto md:text-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>

  )
}


function ArrowIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="float-right ml-2 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
  )
}






