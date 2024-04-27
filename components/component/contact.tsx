/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/N5nmaMzeqlK
 */
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { ContactCard } from "./contact-card";
  import Image from "next/image";

export function Contact() {
  return (

    <div className="mt-9 mb-9 rounded-3xl w-3/4 pl-9 pr-9 mx-auto relative" style={{
      backgroundImage: `url('/contact2.png')`,
       height: "500px",
       backgroundSize: "cover",
       opacity: "1",
      }}>


    <Separator orientation="vertical" className="mt-6 h-16 bg-slate-300 mx-auto"/>

    <h1 className="pt-8 pb-6 animate-fade-up bg-gradient-to-br from-red-200 to-red-100 bg-clip-text text-center  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-5xl md:leading-[3rem]">
        Start your Automated Business!
    </h1>
    <p className="text-2xl tracking-tighter font-normal text-red-300 text-center">
    You bring the idea, I bring the tech.
    </p>

      <Separator orientation="vertical" className="mt-6 h-10 bg-slate-300 mx-auto"/>

      <div className="text-center mx-auto p-1 flex flex-row border w-1/2 h-16 border-slate-300 backdrop-blur-sm shadow-2xl rounded-full">
        <div className="pt-2 pb-2 pr-6">
          <p className="pt-1 pl-6 text-right text-lg font-normal text-red-100">Have you got a good use case?</p>
        </div>
        <Dialog>
          <DialogTrigger className="hover:text-stone-400">
            <div className="shadow-lg py-1 float-right w-28 h-10 rounded-full bg-gradient-to-bl from-slate-700 to-red-400 hover:from-slate-700 hover:to-sky-700 text-slate-300">   
               Contact me
            </div>
          </DialogTrigger>
          <DialogContent className="rounded-xl bg-transparent shadow-none border-0">
              <DialogHeader>
                <DialogTitle className="pb-9 text-slate-500">How can we help you?</DialogTitle>
                  <DialogDescription>
                        <ContactCard/>
                  </DialogDescription>
                </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>

      <Separator orientation="vertical" className="opacity-0 h-32 bg-slate-300 mx-auto"/>

    </div>
  )
}


function CopyIcon() {
  return (
<svg className="float-right w-5 h-5 stroke-slate-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
</svg>

  )
}

function InfoIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 float-right mt-1 mr-4 ml-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>
  )
}





