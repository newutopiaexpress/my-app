"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


export default function Page() {
  return (

<div className="sm:w-full  mx-auto py-12 px-6">



    <div className="h-screen mx-auto relative grid content-center">

        <div className="min-h-full max-w-2xl">

              <h1 className="pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-600 bg-clip-text text-start  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[4rem]">
              Voice Assistant web application with EQ
              </h1>
              <p className="text-lg mb-6">
                A web application that uses the Hume AI engine to create a voice assistant with emotional intelligence.
              The web application is based on <Link className="text-red-400" href="https://github.com/humeai/hume-evi-next-js-starter"> this</Link> Github repository. 
              
              </p>

              <Link href="https://vercel.com/new/clone?demo-description=This%20template%20creates%20a%20voice%20chat%20using%20Hume%20AI%27s%20Empathic%20Voice%20Interface.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4Cn2WWmBMqU3OsPHsWKfab%2F9963cf136b430d071947df923cefb4e9%2Fhume.png&demo-title=Hume%20AI%20-%20Empathic%20Voice%20Interface%20Starter&demo-url=https%3A%2F%2Fhume-evi-next-js-starter.vercel.app%2F&env=HUME_API_KEY%2CHUME_CLIENT_SECRET&envLink=https%3A%2F%2Fgithub.com%2FHumeAI%2Fhume-evi-next-js-starter%2Fblob%2Fmain%2F.env.example&from=templates&project-name=Hume%20AI%20-%20Empathic%20Voice%20Interface%20Starter&repository-name=empathic-voice-interface-starter&repository-url=https%3A%2F%2Fgithub.com%2Fhumeai%2Fhume-evi-next-js-starter&skippable-integrations=1">  
                  <Button variant="outline" className="text-lg mb-4 bg-stone-800 text-stone-100 hover:bg-stone-700 h-14 border border-slate-300">
                    <span className="ml-4 mr-2">Deploy Application</span>
                    <span className="float-right ml-2">
                      <ArrowIcon/>
                    </span>
                  </Button>
              </Link>

              <p className="text-md">Additional developments:</p>
              <p className="text-sm">- Easier installation</p>
              <p className="text-sm">- Custom system prompt</p>
              <p className="text-sm">- Custom tools</p>
              <p className="mt-4 text-xs">Utolsó frissítés: 2024.08.02.</p>      

        </div>

    </div>
    
</div>         
    
  );
}


function ArrowIcon() {
  return (
<svg className="text-red-400 float-right w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.04995 2.74995C3.04995 2.44619 2.80371 2.19995 2.49995 2.19995C2.19619 2.19995 1.94995 2.44619 1.94995 2.74995V12.25C1.94995 12.5537 2.19619 12.8 2.49995 12.8C2.80371 12.8 3.04995 12.5537 3.04995 12.25V2.74995ZM5.73333 2.30776C5.57835 2.22596 5.39185 2.23127 5.24177 2.32176C5.0917 2.41225 4.99995 2.57471 4.99995 2.74995V12.25C4.99995 12.4252 5.0917 12.5877 5.24177 12.6781C5.39185 12.7686 5.57835 12.7739 5.73333 12.6921L14.7333 7.94214C14.8973 7.85559 15 7.68539 15 7.49995C15 7.31452 14.8973 7.14431 14.7333 7.05776L5.73333 2.30776ZM5.99995 11.4207V3.5792L13.4287 7.49995L5.99995 11.4207Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  )
}
