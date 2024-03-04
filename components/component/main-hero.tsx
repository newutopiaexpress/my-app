/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/N544DxeuZPU
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/logo.png";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export function MainHero() {
  return (
    <div className="min-h-max p-8 text-gray-800 dark:text-gray-100">
        
      <main className="mt-20 mb-10 text-center">
        <Button className="mb-4 bg-transparent hover:bg-slate-100 shadow-rose-400/20 hover:shadow-red-400/30 shadow-xl hover:shadow-lg text-slate-400 hover:text-gray-500">
          <BankCardIcon/> 
          <span className="tracking-wide text-rose-300 hover:text-rose-400 mr-2 ml-1 text-sm">
          Automated Income</span> Launch your AI service in 24h
        </Button>

          <h1 className="pb-2 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
          Let humans do,
          <br />
          what they really want to do
          </h1>
        <p className="tracking-wide	mt-3 text-2xl text-slate-500 dark:text-gray-100 transparent">
          Lets do things out of adventure, curiosity, joy and passion.
          <br />
          We are not the robots anymore. We built one.
        </p>
        <div className="mt-6 mb-5">

          <Button className="transition-all	tracking-wide text-sm font-normal bg-transparent text-slate-400 shadow-xl shadow-slate-400/50 hover:shadow-xl hover:shadow-sky-300/60 rounded-full dark:border-gray-900" asChild>
            <Link href="#">
              <Avatar>
                <AvatarImage src="https://www.utopia.express/img/kep.gif" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="tracking-wide text-slate-400 hover:text-rose-400 mr-2 ml-1 text-sm">
          Fun & Recreation</span>
              <span className="transition-all mr-3 text-slate-500 hover:text-slate-400">Create your Digital Counterpart</span>
              <Badge variant="default">NEW</Badge>
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}


function BankCardIcon() {
  return (
<svg className="fill-rose-300  hover:text-rose-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
</svg>
  )
}
