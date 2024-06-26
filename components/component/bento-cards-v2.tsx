/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3E3dlWMavIx
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Video } from "../ui/video";
import { CustomPriceTable } from "./custom-price-table";



export function BentoCardsV2() {
  return (
    <div className="mx-auto sm:w-full md:w-5/6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center  justify-self-center">

        <div className="p-8">
          <p className="md:pt-12 text-lg font-normal text-slate-500 sm:text-start md:text-end">
            It's not a filter nor photoshop.<br />This is You at Your best.<br />Meet your better-looking</p>
          <h1 className="pb-4 bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text sm:text-start md:text-end text-5xl md:text-8xl font-extrabold tracking-tighter text-transparent leading-5">digital Clone</h1>

        </div>

        <div className="pl-4 pr-4 pt-4 pb-0">
          <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
            <div className="relative aspect-square">

              <p className="opacity-25 font-thin p-6 text-xs absolute right-8 bottom-0 text-slate-300">ID 967890</p>
              
              <Image
                alt="Image"
                className="object-cover"
                src="/boy1.png"
                width= "430"
                height= "280"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="text-slate-400 absolute bottom-8  flex flex-col items-center justify-center gap-2 p-6">
             
              </div>
            </div>
          </Card>
        </div>

        <div className="p-8">



            <div className="flex flex-column gap-4">
                <div className="text-xs py-6 text-slate-400">
                    <p className="pt-1"><OkIcon/>CloneID</p>
                    <p className="pt-1"><OkIcon/>16 professional portrait</p>
                    <p className="pt-1"><OkIcon/>50 freely generated image</p>
                </div>
                <div className="text-right">
                    <h1 className="bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text text-5xl md:text-8xl font-extrabold tracking-tighter text-transparent">21<span className="text-6xl">€</span><EurIcon/></h1>
                </div>
            </div>
            <p className="text-lg font-normal text-slate-500 text-start">Our AI-based service able to "learn" your unique features and reproduce them down to the smallest details.</p>

            <Button className="border border-slate-700 bg-gradient-to-t from-stone-800 to-stone-700 h-12 w-100 justify-items-stretch mt-3 transition-all tracking-wide text-sm font-normal text-slate-300 shadow-xl shadow-stone-800/30 hover:shadow-lg hover:shadow-stone-700/30 rounded-full" asChild>
                <div>
                  <Avatar>
                    <AvatarImage src="https://clonegirls.utopia.express/kep.gif" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="transition-all ml-2 mr-0 text-slate-300 hover:text-slate-400">Get your potraits</span>  
                  <Dialog>
                        <DialogTrigger>
                          <Badge variant="secondary" className="ml-3">
                          Create a Clone
                          </Badge>
                        </DialogTrigger>
                        <DialogContent className="rounded-xl">
                          <DialogHeader>
                            <DialogTitle className="pb-9 text-slate-500">Please select your type</DialogTitle>
                            <DialogDescription>
                              <div className="flex flex-row gap-9 justify-center pb-6">
                                <div>
                                  <Link href="https://clonegirls.utopia.express/login">
                                    <Image
                                        alt="Image"
                                        className="object-cover rounded-2xl saturate-0 hover:saturate-100"
                                        src="/select-woman.png"
                                        width= "122"
                                        height= "167"
                                        style={{
                                          objectFit: "cover",
                                        }}
                                    />
                                  </Link>
                                </div>
                                <div>
                                  <Link href="https://clone.utopia.express/login">
                                    <Image
                                        alt="Image"
                                        className="object-cover rounded-2xl saturate-0 hover:saturate-100"
                                        src="/select-man.png"
                                        width= "122"
                                        height= "167"
                                        style={{
                                          objectFit: "cover",
                                        }}
                                    />
                                  </Link>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                  </Dialog>
                </div>
            </Button> 

        </div>

      </div>
    </div>
  )
}


function OkIcon() {
  return (
<svg className="float-left mr-1 pt-1 stroke-fuchsia-200" width="13" height="13" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 11.1575 3.84216 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1575 0.877045 7.49985 0.877045ZM1.82701 7.49988C1.82701 4.36686 4.36683 1.82704 7.49985 1.82704C10.6328 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6328 13.1727 7.49985 13.1727C4.36683 13.1727 1.82701 10.6329 1.82701 7.49988ZM7.49999 9.49999C8.60456 9.49999 9.49999 8.60456 9.49999 7.49999C9.49999 6.39542 8.60456 5.49999 7.49999 5.49999C6.39542 5.49999 5.49999 6.39542 5.49999 7.49999C5.49999 8.60456 6.39542 9.49999 7.49999 9.49999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  )
}
function EurIcon() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  )
}
