import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
  
export function CloneCards() {
    return (
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto relative">
    <div>
        <Link href="https://haircut.utopia.express">
        <Card className="relative rounded-2xl bg-transparent shadow-xl">
                <Image
                  alt="Image"
                  className="rounded-2xl cover"
                  src="/girls2.png"
                  width= "400"
                  height= "661"
                  style={{
                    objectFit: "cover",
                  }}
                />
            <Link href="#" className="absolute right-2 top-4 w-48  rounded-full">
            <p className="text-xs text-right mr-2 text-stone-300 opacity-25 hover:opacity-100">haircut.utopia.express <ArrowIcon/></p>
            </Link>
            <CardContent className="absolute bottom-0">
                <p className="text-stone-400 text-2xl font-normal text-left">Try out any hairstyle without haircut</p>
            </CardContent>
        </Card> 
        </Link>  
    </div>

    

    <div>
        <Link href="https://clone.utopia.express">
        <Card className="relative rounded-2xl bg-transparent shadow-xl">
                <Image
                  alt="Image"
                  className="rounded-2xl cover"
                  src="/kabat.gif"
                  width= "320"
                  height= "400"
                  style={{
                    objectFit: "cover",
                  }}
                />
            <Link href="#" className="absolute right-2 top-4 w-48  rounded-full">
            <p className="text-xs text-right mr-2 text-stone-300 opacity-25 hover:opacity-100">haircut.utopia.express <ArrowIcon/></p>
            </Link>
            <CardContent className="absolute bottom-0">
                <p className="text-stone-400 text-2xl font-normal text-left">Try out any hairstyle without haircut</p>
            </CardContent>
        </Card> 
        </Link>  
    </div>

    <div>
        <Link href="https://room.utopia.express">
        <Card className="relative rounded-2xl bg-transparent shadow-xl">
                <Image
                  alt="Image"
                  className="rounded-2xl cover"
                  src="/room.gif"
                  width= "387"
                  height= "400"
                  style={{
                    objectFit: "cover",
                  }}
                />
            <Link href="#" className="absolute right-2 top-4 w-48  rounded-full">
            <p className="text-xs text-right mr-2 text-stone-200 opacity-25 hover:opacity-100">room.utopia.express <ArrowIcon/></p>
            </Link>
            <CardContent className="absolute bottom-0">
                <p className="text-stone-400 text-2xl font-normal text-left">Interior design based on a sketch or photo</p>
            </CardContent>
        </Card> 
        </Link>  
    </div>

</div>
    )
}

function ArrowIcon() {
    return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="float-right w-6 h-6 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
    )
  }