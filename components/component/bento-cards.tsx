/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3E3dlWMavIx
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function BentoCards() {
  return (
    <div className="mx-auto sm:w-full md:w-5/6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center  justify-self-center">

        <div className="p-8">
          <p className="md:pt-12 text-lg font-normal text-slate-500 sm:text-start md:text-end">
            It's not a filter nor photoshop.<br />This is You at Your best.<br />Meet your digital</p>
          <h1 className="pb-4 bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text sm:text-start md:text-end text-5xl md:text-8xl font-extrabold tracking-tighter text-transparent">Clone</h1>
          <div className="flex flex-row space-x-6">
            <Card className="h-full shadow-2xl rounded-3xl overflow-hidden bg-sky-100	">
              <div className="relative ">
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/girl3.png"
                  width= "260"
                  height= "260"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </Card>
            <Card className="h-full shadow-2xl rounded-3xl overflow-hidden bg-sky-100	">
              <div className="relative">
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/girls2.png"
                  width= "260"
                  height= "380"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </Card>
          </div>
        </div>

        <div className="p-4">
          <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
            <div className="relative aspect-square">
              <Button variant="ghost" className="opacity-25 font-thin p-6 text-xs absolute right-0 bottom-0 text-slate-300">ID 967890</Button>
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
              <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                
              </div>
            </div>
          </Card>
        </div>

        <div className="p-8">
            <p className="text-lg font-normal text-slate-500 text-start">
            Our AI-based service able to "learn" your unique features and reproduce them down to the smallest detail.
            </p>
              <Button className="border border-s border-slate-800 bg-gradient-to-tl from-stone-900 to-stone-700 h-13 w-100 justify-items-stretch mt-3 transition-all	tracking-wide text-sm font-normal bg-transparent hover:to-stone-700 text-slate-300 shadow-lg shadow-stone-600/60 hover:shadow-xl hover:shadow-slate-500/40 rounded-full" asChild>
                <Link href="#">
                  <Avatar>
                    <AvatarImage src="https://i.postimg.cc/nrR0Kd8R/girl-icon.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="transition-all mr-3 text-slate-300 hover:text-slate-400"></span>
                  Get your potraits <Badge variant="default" className="mr-2">Female</Badge> <Badge variant="secondary">Male</Badge>
                </Link>
              </Button>

              <Separator className="my-3" />
              <div className="flex h-5 space-x-3 text-sm text-slate-400">
                <div className="font-bold ">1 Credit</div>
                <Separator orientation="vertical" />
                <div>1 Model ID</div>
                <Separator orientation="vertical" />
                <div>12 photos</div>
                <Separator orientation="vertical" />
                <div className="text-end">21 eur</div>
              </div>
              <Separator className="my-3" />
              <div className="flex h-5 space-x-3 text-sm text-slate-400">
                <div className="font-bold ">3 Credit</div>
                <Separator orientation="vertical" />
                <div>3 Model ID</div>
                <Separator orientation="vertical" />
                <div>36 photos</div>
                <Separator orientation="vertical" />
                <div className="text-end">60 eur</div>
              </div>
              <Separator className="my-3" />
              <div className="flex h-5 space-x-3 text-sm text-slate-400">
                <div className="font-bold ">5 Credit</div>
                <Separator orientation="vertical" />
                <div>5 Model ID</div>
                <Separator orientation="vertical" />
                <div>60 photos</div>
                <Separator orientation="vertical" />
                <div className="text-end">95 eur</div>
              </div>
              <Separator className="my-3" />



        </div>

      </div>
    </div>
  )
}




