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

export default function Home() {
  return (


      <div className="sm:w-full md:w-full lg:w-5/6 mx-auto py-6 px-6">
        <MainHeroV3/>
          <div className="mx-auto lg:w-2/3">
          <Tamas2/>
          </div>
          <div className="mx-auto lg:w-full">
          <Research/> 
          </div>
          <div className="mx-auto lg:w-full">
          <Clone2/>
          </div> 
          <div className="mx-auto lg:w-full">
          <Purposes/>
          </div>    
        <Youtube/>
      </div>
          
    
  );
}
