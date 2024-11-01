import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const Aiphoto: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-0 bg-black min-h-[476px] rounded-3xl">
      <div className="col-span-12 md:col-span-7 pl-4 pr-4 md:pl-6 pt-6 relative">
        <p className="absolute top-2 left-2 text-sm text-stone-100/40 flex items-center">
          <Image className="w-10 h-10 float-left mr-2" src="/fb-w.png" alt="Nikon" width={1024} height={1024} />
          Flux AI based fine tuning
        </p>
        <h1 className="mt-16 md:pb-8 text-left md:text-right bg-gradient-to-br from-stone-100 to-stone-200 bg-clip-text font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-4xl md:text-7xl md:leading-[4rem]">
          The Ai Photographer
        </h1>
        <p className="text-stone-300 text-xl font-thin leading-7 tracking-normal text-left md:text-right md:ml-32 mb-12">
          Stunningly lifelike photos, as if taken by a professional photographer. Take photos in the modern way!
        </p>
        <Link href="https://clone.utopia.express" target="_blank">
          <div className="text-stone-800 w-full md:w-96 mb-12 md:float-right md:text-right relative">
            <Image
              src="/v1.png"
              alt="AI Photographer"
              width={150}
              height={180}
              className="w-12 h-12 rounded-full absolute left-0 top-1 shadow-orange-900/30"
            />
            <Image
              src="/v2.png"
              alt="AI Photographer"
              width={150}
              height={180}
              className="w-12 h-12 rounded-full absolute left-10 top-1 shadow-orange-900/30"
            />
            <Image
              src="/v3.png"
              alt="AI Photographer"
              width={150}
              height={180}
              className="w-12 h-12 rounded-full absolute left-20 top-1 shadow-orange-900/30 opacity-70"
            />
            <Badge variant="outline" className="ml-36 mt-1 align-middle text-lg md:ml-4 text-left py-2 px-4">
            clone.utopia.express <SparIcon/>
            </Badge>
          </div>
        </Link>
      </div>
      <div className="min-h-96 col-span-12 md:col-span-5 pb-0 relative bg-cover bg-left-top bg-no-repeat bg-black rounded-3xl"
        style={{ backgroundImage: "url('/pp.png')" }}
      >
        <p className="absolute top-4 right-20 md:right-6 text-sm text-stone-500 flex items-center">
          Service running
            <span className="relative flex h-3 w-3 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-black/50"></span>
            </span>
        </p>
      </div>
    </div>
  );
};

export default Aiphoto;


function SparIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4 text-stone-100">
<path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
</svg>
    )
  }


