"use client"
import { Research4 } from "@/components/component/research4";
import { Tamas } from "@/components/component/tamas";
import { MainHeroV3 } from "@/components/component/main-hero-v3";
import { Youtube } from "../components/component/youtube";
import { Lucy } from "@/components/component/lucy";
import { Clone3 } from "@/components/component/clone3";
import { Contact } from "@/components/component/contact";
import { Tamas2 } from "@/components/component/tamas2";
import { ThreeSteps } from "@/components/component/three-steps";
import { CloneCards } from "@/components/component/clone-cards";
import { Purposes } from "@/components/component/purposes";
import { Separator } from "@/components/ui/separator";
import { Posters } from "@/components/component/posters";
import { Posters2 } from "@/components/component/posters2";
import { PostersCarousel } from "@/components/component/posters-carousel";
import { Launch } from "@/components/component/launch";
import Link from "next/link";
import { Hero } from "@/components/component/hero";
import { Photographer2 } from "@/components/component/photographer2";
import { Voice } from "@/components/component/voice";
import { Bento2 } from "@/components/component/bento2";
import { Typeform } from "@/components/component/typeform";


export default function Home() {
  return (

    <div className="overflow-x-hidden w-full mx-auto py-12 px-2 md:px-0">
       
          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1400px]">
          <Bento2/>
          </div>

          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1200px]">
          <Research4/> 
          </div>

          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1200px]">
            <Photographer2/>
          </div>  

          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1200px]">
          <Youtube/>
          </div>

          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1200px]">
          <Typeform/>
          </div>

    </div>

          
    
  );
}


function ArrowIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>
  )
}