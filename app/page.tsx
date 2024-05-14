"use client"
import { Research } from "@/components/component/research";
import { Tamas } from "@/components/component/tamas";
import { MainHeroV3 } from "@/components/component/main-hero-v3";
import { Youtube } from "../components/component/youtube";
import { Lucy } from "@/components/component/lucy";
import { Clone2 } from "@/components/component/clone2";
import { Contact } from "@/components/component/contact";
import { Tamas2 } from "@/components/component/tamas2";
import { ThreeSteps } from "@/components/component/three-steps";
import { CloneCards } from "@/components/component/clone-cards";
import { Purposes } from "@/components/component/purposes";
import { Separator } from "@/components/ui/separator";
import { Posters } from "@/components/component/posters";
import { PostersTwo } from "@/components/component/posters-two";


export default function Home() {
  return (


      <div className="sm:w-full md:w-full lg:w-5/6 mx-auto py-6 px-6">
        <MainHeroV3/>
          <div className="mx-auto lg:w-2/3">
          <Tamas2/>
          </div>
          <div className="mx-auto lg:w-full">
          
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>
          <p className="text-xs uppercase tracking-wider text-stone-400">
            Personalized, rentable AI services
            <span className="float-right">2024.05.01</span>
          </p>
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>

          <Purposes/>
          </div> 

          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>
          <p className="text-xs uppercase tracking-wider text-stone-400">
            AI based fine tuning service
            <span className="float-right">2024.05.10</span>
          </p>
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>


          <div className="mx-auto lg:w-full">
          <Clone2/>
          </div> 


          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>
          <p className="text-xs uppercase tracking-wider text-stone-400">
            Multi Agent Research Assistant
            <span className="float-right">2024.05.10</span>
          </p>
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>


          <div className="mx-auto lg:w-full">
          <Research/> 
          </div>

          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>
          <p className="text-xs uppercase tracking-wider text-stone-400">
            Uplifting Music on youtube
            <span className="float-right">2024.04.10</span>
          </p>
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>

          <div className="mx-auto lg:w-full">
          <Posters/>
          </div>

          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>
          <p className="text-xs uppercase tracking-wider text-stone-400">
            Poster Series
            <span className="float-right">2024.02.10</span>
          </p>
          <Separator className="w-full h-px bg-stone-300 mt-4 mb-4"/>

          <div className="mx-auto lg:w-full">
          <Youtube/>
          </div>


      </div>
          
    
  );
}
