/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7r3IHOOfBNk
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export function CarouselSection() {
  return (
    <div className="w-full">
            <Carousel>
              <CarouselContent className="w-full h-[440px] ml-2 mb-6 relative">

                <div className="absolute right-0 z-40 w-20 h-full bg-gradient-to-tl from-stone-100 to-stone-100/0"></div>
                
                <CarouselItem className="transition-all duration-300  group  rounded-3xl shadow-lg bg-cover bg-no-repeat relative bg-center saturate-0 hover:saturate-100" style={{ backgroundImage: "url('/v9.jpg')" }}>
                    <Link href="https://clone.utopia.express" className="group">  
                      <Image className="absolute top-2 left-2 w-12 h-12" src="/fb-w.png" alt="Nikon" width ={1024} height={1024} />
                      <h1 className="transition-all  absolute left-14 top-5 text-stone-100 font-thin text-xl leading-6 tracking-tight">The Ai Photographer</h1>
                      <p className="p-4 opacity-0 absolute -left-8 rounded-lg top-24 group-hover:opacity-100 text-stone-100 text-sm bg-stone-900/100 max-w-[50%] leading-5">Stunningly lifelike photos, as if taken by a professional photographer.</p>
                      <span className="tracking-normal text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 bg-stone-100/0 border border-stone-100/80 px-4 py-2 rounded-full text-stone-100/100 backdrop-blur-sm">
                      clone.utopia.express
                      <LinkIcon/>
                      </span>
                    </Link>
                </CarouselItem>

                <CarouselItem className="transition-all duration-300 group bg-gradient-to-br from-cyan-900 to-stone-900 border-8 border-stone-900 rounded-3xl shadow-lg bg-cover bg-no-repeat relative bg-center saturate-0 hover:saturate-100">
                    <Link href="https://gordon.utopia.express" className="group">  
                      <Image className="absolute top-2 left-2 w-12 h-12" src="/fb-w.png" alt="Nikon" width ={1024} height={1024} />
                      <h1 className="transition-all  absolute left-14 top-2 text-stone-100 font-thin text-xl leading-6 tracking-tight max-w-[70%]">Research & Writer Assistant</h1>
                      <p className="p-4 opacity-0 absolute -right-8 rounded-lg bottom-28 group-hover:opacity-100 text-stone-100 text-sm bg-stone-900/100 max-w-[50%] leading-5">Cooperation of three autonomous AI agents to make your work more fun & efficient.</p>
                      <span className="tracking-normal text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 bg-stone-100/0 border border-stone-100/80 px-4 py-2 rounded-full text-stone-100/100 backdrop-blur-sm">
                      search.utopia.express
                      <LinkIcon/>
                      </span>
                    </Link>
                    <p className="absolute top-32 pr-2 h-28 text-2xl font-extrabold italic text-stone-200">
                      <Typewriter
                      options={{
                      loop: true,
                      delay: 50,
                      }}
                      onInit={(typewriter) => {
                      typewriter
                          .typeString('Collect information about the technological singularity')
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString('Write a blog post based on the information gained')
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                      }}
                      />
                    </p>
                </CarouselItem>

                <CarouselItem className="transition-all duration-300  group rounded-3xl shadow-lg bg-cover bg-no-repeat relative bg-center saturate-0 hover:saturate-100" style={{ backgroundImage: "url('/gordon.jpg')" }}>
                    <Link href="https://gordon.utopia.express" className="group">  
                      <Image className="absolute top-2 left-2 w-12 h-12" src="/fb-w.png" alt="Nikon" width ={1024} height={1024} />
                      <h1 className="transition-all  absolute left-14 top-2 text-stone-100 font-thin text-xl leading-6 tracking-tight max-w-[70%]">Roast yourself with Gordon Ramsay</h1>
                      <p className="p-4 opacity-0 absolute -right-8 rounded-lg bottom-28 group-hover:opacity-100 text-stone-100 text-sm bg-stone-900/100 max-w-[50%] leading-5">Upload a picture and Gordon will give his opinion on it. He won't spare you.</p>
                      <span className="tracking-normal text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 bg-stone-100/0 border border-stone-100/80 px-4 py-2 rounded-full text-stone-100/100 backdrop-blur-sm">
                      gordon.utopia.express
                      <LinkIcon/>
                      </span>
                    </Link>
                </CarouselItem>

                <CarouselItem className="transition-all duration-300 group rounded-3xl shadow-lg bg-cover bg-no-repeat relative bg-center saturate-0 hover:saturate-100" style={{ backgroundImage: "url('/com.jpg')" }}>
                    <Link href="https://gordon.utopia.express" className="group">  
                      <Image className="absolute top-2 left-2 w-12 h-12" src="/fb-w.png" alt="Nikon" width ={1024} height={1024} />
                      <h1 className="transition-all  absolute left-14 top-6 text-stone-100 font-bold text-xl leading-6 tracking-tight max-w-[70%]">Coming soon</h1>
                      <p className="p-4 opacity-0 absolute -right-8 rounded-lg bottom-28 group-hover:opacity-0 text-stone-100 text-sm bg-stone-900/100 max-w-[50%] leading-5">Upload a picture and Gordon will give his opinion on it. He won't spare you.</p>
                      <span className="tracking-normal text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 bg-stone-100/0 border border-stone-100/80 px-4 py-2 rounded-full text-stone-100/100 backdrop-blur-sm">
                      utopia.express
                      <LinkIcon/>
                      </span>
                    </Link>
                </CarouselItem>

                <CarouselItem className="transition-all duration-300 group rounded-3xl shadow-lg bg-cover bg-no-repeat relative bg-center saturate-0 hover:saturate-100" style={{ backgroundImage: "url('/gordon.jpg')" }}>
                    <Link href="https://gordon.utopia.express" className="group">  
                      <Image className="absolute top-2 left-2 w-12 h-12" src="/fb-w.png" alt="Nikon" width ={1024} height={1024} />
                      <h1 className="transition-all  absolute left-14 top-6 text-stone-100 font-bold text-xl leading-6 tracking-tight max-w-[70%]">Roast yourself with Gordon Ramsay</h1>
                      <p className="p-4 opacity-0 absolute -right-8 rounded-lg bottom-28 group-hover:opacity-100 text-stone-100 text-sm bg-stone-900/100 max-w-[50%] leading-5">Upload a picture and Gordon will give his opinion on it. He won't spare you.</p>
                      <span className="tracking-normal text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 absolute bottom-3 right-3 bg-stone-100/0 border border-stone-100/80 px-4 py-2 rounded-full text-stone-100/100 backdrop-blur-sm">
                      gordon.utopia.express
                      <LinkIcon/>
                      </span>
                    </Link>
                </CarouselItem>


              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
    </div>
  )
}

function LinkIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-5 h-5 float-right">
  <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
</svg>
  )
}

function BankCardIcon() {
  return (
<svg className="fill-orange-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
</svg>
  )
}


