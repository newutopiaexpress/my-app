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
import { Photographer } from "@/components/component/photographer";
import { Voice } from "@/components/component/voice";
import { Bento2 } from "@/components/component/bento2";
import { Typeform } from "@/components/component/typeform";
import { motion } from "framer-motion";
import { Revolution } from "@/components/component/revolution";
import { CarouselSection } from "@/components/component/carousel-section";
import Chat from "@/components/component/chat";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { Badge } from "@/components/ui/badge";
import Aiphoto from "@/components/component/aiphoto";
import Aisearch from "@/components/component/aisearch";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import ContactForm from '@/components/component/ContactForm';
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { SparkleFx } from "@/components/component/sparkle";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full mx-auto py-12 px-2 md:px-0">
      {/*}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="py-9 mx-auto md:w-5/6 lg:max-w-[1400px]">
          <Voice/>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="py-9 mx-auto md:w-5/6 lg:max-w-[1400px]">
          <Purposes/>
          </motion.div>

          <div 
            className="py-9 mx-auto md:w-5/6 lg:max-w-[1100px]">
          <Revolution/>
          </div>

          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1400px]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <h1 className="pt-64 pb-9 text-center bg-gradient-to-br from-stone-100 to-white bg-clip-text  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-8xl md:leading-[4rem]">
                  Designed for the Future
                </h1>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-center text-stone-100 text-xl bg-neutral-900/60 max-w-max mx-auto font-thin p-2">
                We don't know what Utopia will be like. But we believe in it, and we build it.
                </p>
              </div>
            </div>
          </div>*/}

      <div className="pt-12">
        <p className="text-center text-stone-700 text-xs font-thin">Digital Design & Development since 2005.</p>
      </div>

      <div className="rounded-3xl mx-1 md:mx-6 mt-4 bg-cover bg-no-repeat bg-bottom bg-stone-900 min-h-[600px] " style={{ backgroundImage: "url('/designed.png')" }}>
        <h1 className="pt-64 pb-9 text-center bg-gradient-to-br from-stone-100 to-white bg-clip-text  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-8xl md:leading-[4rem]">Designed for the Future</h1>
        <p className="text-center text-stone-100 text-xl bg-neutral-900/60 max-w-max mx-auto font-thin p-2">We don't know what Utopia will be like. But we believe in it, and we build it.</p>
        <p className="saturate-100 text-center text-stone-100 text-sm bg-neutral-900/0 max-w-max mx-auto font-thin p-2 flex items-center justify-center">
          Join to Utopia Express <FacebookIcon/> <EmailIcon/> {/*<LinkIcon/>*/} <YoutubeIcon/>
        </p>
      </div>

      <div className="mx-6 md:mx-12 bg-cover bg-no-repeat bg-bottom grid md:grid-cols-12 relative">
        <div className="md:min-h-[500px] p-8 col-span-12 md:col-span-6 text-center  md:text-right flex items-center justify-end">
          <h1 className="pb-1 md:pb-12 pr-1 bg-gradient-to-br from-stone-700 to-stone-800 bg-clip-text font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-8xl md:leading-[5rem]">
            Built for<br/>the present
          </h1>
        </div>
        <div className="p-8 col-span-12 md:col-span-6 text-left flex md:w-[50%] items-center justify-start md:border-l md:border-stone-300/50">
          <p className="text-stone-800 text-xl font-thin">We convert futuristic ideas into practical digital tools.  
            <SparkleFx
              className="ml-1 mr-1  text-fuchsia-400"
              speed="medium"
              count={50}
              trigger
            >
              Everything is possible.
            </SparkleFx> 
            Ask our AI assistant Lucy what's coming in your industry and how you can get superpowers.
          </p>
        </div>
        <div className="mx-auto text-center col-span-12 flex items-center justify-center">
          <Chat/>
        </div>
      </div>

      <div className="mx-6 md:mx-12 mb-6 border-t border-b border-stone-300 flex items-center justify-center text-center text-stone-700 tracking-wide font-thin [text-wrap:balance] text-sm md:leading-[5rem]">
        Built by Utopia Express 💗
      </div>

      <div className="md:ml-12 md:mr-12 grid md:grid-cols-12 gap-12 min-h-[476px] border-b border-stone-300 pb-6 mb-6">
        <div className="col-span-12 md:col-span-6">
          <Aiphoto/>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Aisearch/>
        </div> 
      </div>

      <div className="max-w-[400px] md:max-w-[600px] mx-auto h-[170px] mt-36 mb-36 flex-row items-center">
        <Image src="/tamas2.png" width={200} height={200} alt="Designed for the Future" className="max-w-32 h-auto float-left mr-12 rounded-full outline outline-8 outline-stone-300 outline-offset-4"/>
        <p>Hello! I'm Tamas, founder of Utopia Express. I create powerful websites and AI-driven applications that give your business a competitive edge. Have an exciting project in mind? Let's turn it into reality!</p>
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" className="relative mt-4 backdrop-blur-sm">
              <span className="mr-8">Send a message</span>
              <span className="absolute right-0 w-8 h-8 mr-1 shadow-sm bg-stone-100 text-stone-700 rounded-full flex items-center justify-center "><PaperPlaneIcon/></span>
            </Button>
          </SheetTrigger>
          <Suspense fallback={<p>Call Lucy...</p>}>
            <SheetContent className="w-full md:min-w-[760px] h-screen">
              <SheetHeader>
                <ContactForm />
              </SheetHeader>
            </SheetContent>
          </Suspense>
        </Sheet>
      </div> 

      {/* Add the Elevenlabs widget element */}
      <elevenlabs-convai agent-id="7hNGf7j69AYvhyk6qQNp"></elevenlabs-convai>

      {/*}
          <div className="py-9 mx-auto md:w-5/6 lg:max-w-[1200px]">
          <Youtube/>
          </div>


          <div className="mx-auto md:w-5/6 lg:max-w-[1200px] rounded-3xl">
          <Typeform/>
          </div>
          */}

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

function FacebookIcon() {
  return (
    <Link href="https://www.facebook.com/www.utopia.express">
    <svg
      className="transition-all hover:scale-125 ml-2 mr-2 w-10 h-10 saturate-100 border border-stone-100 hover:border-[#0866FF] hover:bg-[#0866FF] rounded-full p-2 flex items-center justify-center"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
    </Link>
  )
}

function EmailIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="transition-all hover:scale-125 ml-2 mr-2 w-10 h-10 border border-stone-100 hover:bg-green-500 hover:border-green-500 saturate-100 rounded-full p-2 flex items-center justify-center">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>
  )
}

function LinkIcon() {
  return (
<Link href="https://www.linkedin.com/in/konto-tamas-70530446/">
<svg className="transition-all hover:scale-125 ml-2 mr-2 w-10 h-10 saturate-100 border border-stone-100 hover:border-[#0866FF] hover:bg-[#0A66C2] text-stone-100 hover:text-stone-100 rounded-full p-2 flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</Link>
  )
}


function YoutubeIcon() {
  return (
<Link href="https://studio.youtube.com/channel/UCZxVdlr2Ez4xkq97fGbG3IQ">
<svg className="fill-stone-100 transition-all hover:scale-125 ml-2 mr-2 w-10 h-10 border border-stone-100 hover:bg-[#FF0033] hover:border-[#FF0033] saturate-100 rounded-full p-2 flex items-center justify-center" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
</svg>
</Link>
  )
}




