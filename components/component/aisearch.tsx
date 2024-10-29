import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import Typewriter from 'typewriter-effect';

const Aisearch: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-0 bg-rose-500 min-h-[476px] rounded-3xl">
      <div className="col-span-12 md:col-span-6 pl-6 pt-6 relative">
        <p className="absolute top-2 left-2 text-sm text-rose-300 flex items-center">
          <Image className="w-12 h-12 float-left mr-2" src="/fb-w.png" alt="Nikon" width={1024} height={1024} />
          Anthropic Claude based AI assistant
        </p>
        <h1 className="mt-16 pb-8 text-right bg-gradient-to-br from-stone-100 to-stone-200 bg-clip-text font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[4rem]">
        Research & Writer Assistant
        </h1>
        <p className="text-rose-200 text-xl font-thin leading-7 tracking-normal text-right md:ml-16 mb-4">
        AI assistant that can collect data from the Internet and then creatively process it while chatting with you.
        </p>
        <p className="text-right">
            <Link href="https://search.utopia.express" target="_blank">
                <Badge variant="outline" className="mt-1 align-middle text-lg ml-4 text-left py-2 px-4">
                search.utopia.express<SparIcon/>
                </Badge>
            </Link>
        </p>
        

      </div>
      <div
        className="col-span-12 md:col-span-6 relative bg-cover bg-left-top bg-no-repeat rounded-3xl flex items-center">

        <span className="absolute top-4 right-4 text-sm text-rose-300 flex items-center">
          Service running
            <span className="relative flex h-3 w-3 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
        </span>

        <div className="mt-20 mb-12 relative mx-auto shadow-2xl shadow-rose-600 h-96 w-64 bg-gradient-to-r from-stone-100 to-stone-50 rounded-2xl p-6 ring-offset-0 ring-8 ring-stone-100/80">
                <div className="relative w-12 h-12">
                    <div className="absolute">
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-700/10"></span>
                        </span>
                    </div>
                </div>
                <p className="h-28 text-2xl font-extrabold italic text-stone-700">
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

                <div className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-stone-800 -right-6 bottom-12 text-xl font-extrabold tracking-tighter italic text-stone-100">
                    Free
                </div>
        </div>
      </div>
    </div>
  );
};

export default Aisearch;


function SparIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-4 text-stone-100">
<path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
</svg>
    )
  }


