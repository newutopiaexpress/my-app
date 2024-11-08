/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/G2rJ1wK46q0
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Suspense } from 'react';
import ContactForm from '@/components/component/ContactForm';
import { PaperPlaneIcon } from "@radix-ui/react-icons"


export function NavBar() {
  return (
    <nav className=" fixed flex md:flex-row items-center h-14 w-full  shrink-0 px-4 md:px-6 z-50">
      <div className="relative">
        <UtopiaIcon/>
        
        {/*}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <UtopiaIcon/>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-transparent min-w-max shadow-xl">
                <div className="grid grid-cols-2 bg-transparent">
                  <div className="col-span-1 bg-stone-900 hover:bg-stone-700 text-stone-100 p-4 w-48">
                    <Link href="https://clone.utopia.express" legacyBehavior passHref>
                      <NavigationMenuLink className="">
                        clone.utopia.express
                      </NavigationMenuLink>
                    </Link>
                    <Image  src="/nikon2.png" width="737" height="1152" alt="" className="w-48 h-auto"></Image>
                    <p>Create a digital clone and take any photos in any style!</p>
                  </div>
                  <div className="col-span-1 bg-stone-100 p-4 w-48">
                    <Link href="https://clone.utopia.express" legacyBehavior passHref>
                      <NavigationMenuLink className="">
                        clone.utopia.express
                      </NavigationMenuLink>
                    </Link>
                    <p>Create a digital clone and take any photos in any style!</p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        */}
      </div>
        
      <div className="ml-auto flex items-center gap-3">


<Sheet>
  <SheetTrigger>
    <Button variant="outline" className="relative mt-4 backdrop-blur-lg">
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
    </nav>
  )
}


function UtopiaIcon() {
  return (
    <svg height="16" className="fill-stone-800" role="img" viewBox="0 0 1366 240" width="93"><path d="M165,18c17.2,0,33.8,0,50.8,0c0.1,0.7,0.1,1.4,0.1,2c0,42.3,0,84.6-0.1,126.8c0,4.4-0.3,8.8-1.2,13.1c-1,4.6-2,9.3-3.7,13.8 c-2.2,6-4.8,11.8-8.1,17.2c-2.8,4.5-6.1,8.6-9.7,12.5c-6.6,7.2-14.2,13-22.6,17.7c-5.1,2.9-10.6,5.2-16,7.4 c-3.8,1.6-7.7,2.7-11.6,3.9c-2,0.6-4,0.8-6,1.2c-2.7,0.5-5.4,1.1-8.1,1.6c-0.4,0.1-1.1,0.2-1.5,0.2c-9.6,1.1-19.2,1.4-28.9,0.8 c-2.8-0.2-5.6-0.5-8.3-0.9c-2.6-0.4-5.2-1.1-7.9-1.6c-2.1-0.4-4.2-0.7-6.3-1.2c-1.5-0.3-2.9-0.7-4.3-1.2c-4.5-1.6-9-3-13.4-4.9 c-9.3-4.1-18-9.2-25.8-15.8c-6.5-5.5-12.1-11.7-16.8-18.9c-3-4.6-5.5-9.5-7.6-14.6c-1.4-3.4-2.5-7-3.4-10.6 c-0.8-3.2-1.3-6.5-1.9-9.8C1.7,151,2,144.9,2,138.8C2,99.7,2,60.5,2,21.4c0-1,0-2.1,0-3.1c1.8-0.5,47.9-0.7,51-0.1c0,1,0,2,0,3 c0,39.9,0,79.8,0,119.6c0,4.1,0.3,8.2,1.2,12.1c1.3,5.6,3.7,10.8,7.3,15.3c4.1,5.3,9.1,9.5,15.2,12.5c3.7,1.8,7.4,3.4,11.2,4.8 c2,0.7,4.3,0.8,6.5,1.3c4.7,1.2,9.4,1.8,14.2,1.7c4.4-0.1,8.8-0.3,13.1-1c6.3-1.1,12.6-2.8,18.4-5.8c8.1-4.2,15-9.7,19.6-17.8 c3.4-6.1,5.4-12.7,5.4-19.7c0.1-21.2,0-42.4,0.1-63.5c0-19.8,0-39.6,0-59.5C165,20.1,165,19.2,165,18z"></path><path d="M1230.8,76c-1.5,3-2.9,5.9-4.3,8.8c-2.3,4.7-4.6,9.5-6.9,14.2c-1.7,3.5-3.3,6.9-5,10.4c-2.3,4.8-4.7,9.6-7,14.5 c-1.7,3.6-3.4,7.3-5.1,10.9c-3.5,7.3-7,14.5-10.5,21.7c-2.5,5.2-5,10.3-7.5,15.5c-2.8,5.9-5.6,11.8-8.4,17.7 c-3.2,6.7-6.4,13.4-9.7,20c-2.5,5.3-5.1,10.5-7.6,15.7c-0.5,1.1-1,2.1-1.5,3.2c-0.4,0.9-1.1,1.3-2,1.3c-0.5,0-1,0-1.4,0 c-16.1,0-32.2,0-48.3,0c-0.9,0-1.9,0-3.2,0c1.2-2.7,2.2-5,3.3-7.3c1.8-3.7,3.6-7.4,5.4-11.1c2.2-4.6,4.3-9.3,6.5-13.9 c1.8-3.8,3.7-7.6,5.5-11.5c2.5-5.3,5-10.5,7.6-15.8c2.5-5.2,5-10.4,7.5-15.5c2.9-6,5.8-12,8.7-18c3.2-6.6,6.3-13.3,9.4-19.9 c3.5-7.4,7.1-14.7,10.7-22.1c2.4-5,4.7-10,7.1-14.9c3.6-7.5,7.2-15,10.8-22.6c3.5-7.5,7-15,10.6-22.4c3-6.2,6-12.3,8.9-18.5 c0.4-0.9,1-1.4,2-1.4c0.4,0,0.8,0,1.2,0c15.7,0,31.4,0,47.1,0c0.8,0,1.6,0,2.4,0c34.1,71.6,68.2,143,102.4,214.7 c-0.8,0.1-1.5,0.3-2.2,0.3c-16.7,0-33.5,0-50.2,0c-1.3,0-2-0.3-2.6-1.5c-1.9-4.1-3.9-8.1-5.9-12.1c-2.5-5.3-5-10.5-7.5-15.8 c-2.6-5.4-5.1-10.8-7.7-16.2c-2.7-5.7-5.5-11.4-8.3-17c-2.2-4.5-4.4-9.1-6.6-13.6c-3.5-7.3-7.1-14.6-10.6-21.9 c-2.6-5.4-5.1-10.9-7.7-16.3c-3.8-7.9-7.7-15.7-11.5-23.6c-2.1-4.4-4.2-8.8-6.3-13.2C1232,77.9,1231.4,77.1,1230.8,76z"></path><path d="M787.2,18c1.1,0,2,0,2.8,0c37.8,0,75.5,0,113.3,0c1.7,0,3.4-0.2,5,0.1c3.6,0.6,7.3,0.5,10.8,1.7c2.6,0.8,5.2,1.3,7.8,2 c5.7,1.7,10.9,4.3,15.8,7.5c9.2,6.2,16.3,14.2,21.3,24.1c2.8,5.5,4.7,11.2,6.2,17.1c1.8,7.2,2.2,14.5,1.7,21.8 c-0.2,3.4-0.5,7-1.6,10.3c-0.9,2.6-1.3,5.4-2.2,8.1c-2.6,7.8-6.5,15-11.8,21.4c-4.7,5.7-10.2,10.4-16.5,14.1 c-3.2,1.9-6.5,3.3-9.9,4.7c-9.3,3.6-18.9,4.9-28.7,4.9c-36.8,0-73.6,0-110.4,0c-1.2,0-2.3-0.1-3.7-0.2c0-1.1,0-1.9,0-2.7 c0-12.2,0-24.5,0-36.7c0-0.6,0-1.1,0-1.7c0.1-1,0.6-1.6,1.7-1.6c0.7,0,1.4,0,2.2,0c34.3,0,68.6,0,102.9,0c1.8,0,3.5,0.1,5.3-0.1 c8.9-0.6,15.4-4.8,19.7-12.7c3.1-5.7,3.7-11.9,2.8-18.1c-1.2-8.2-5.5-14.7-13-18.7c-2.8-1.5-5.8-2.5-9.1-2.6c-2-0.1-4-0.1-6-0.1 c-34.2,0-68.3,0-102.5,0c-4.2,0-4.2,0-4.2-4.2c0-11.8,0-23.7,0-35.5C787,20.1,787.1,19.2,787.2,18z"></path><path d="M1012,18c17.1,0,34,0,51,0c0,70.7,0,141.3,0,212c-17,0-33.9,0-51,0C1012,159.3,1012,88.8,1012,18z"></path><path d="M244,18c79.2,0,158,0,237,0c0,13.9,0,27.7,0,41.8c-1.3,0.1-2.4,0.2-3.6,0.2c-39.4,0-78.8,0-118.2,0c-36.9,0-73.8,0-110.7,0 c-4.5,0-4.5,0-4.5-4.4c0-11.6,0-23.2,0-34.7C244,20,244,19.2,244,18z"></path><path d="M338,94c17,0,33.8,0,50.5,0c0.6,1.8,0.7,133.4,0.1,136c-16.8,0-33.6,0-50.6,0C338,184.7,338,139.5,338,94z"></path><path d="M628.1,237.2c-6.1-0.5-12.1-0.8-18-1.4c-2.8-0.3-5.6-1.1-8.4-1.7c-2.1-0.4-4.2-0.7-6.3-1.2c-1.5-0.3-3.1-0.7-4.6-1.2 c-4.6-1.5-9.2-2.9-13.7-4.8c-6.7-2.8-13.2-6-19.4-9.9c-7.8-4.9-15.1-10.4-21.4-17.1c-3.2-3.3-6-6.9-8.9-10.4 c-4.2-5.1-7.5-10.7-10.2-16.6c-1.8-3.8-3.2-7.7-4.8-11.6c-1.5-3.7-2.3-7.5-3.2-11.4c-1-4.2-1.4-8.4-2-12.7 c-0.8-5.6-0.6-11.2-0.7-16.7c0-5.5,0.6-11,1.7-16.4c0.7-3.7,1.2-7.5,2.3-11.2c1.3-4.4,3-8.7,4.7-13c1.4-3.5,3.1-6.9,4.9-10.2 c6-11.1,14.1-20.4,23.6-28.6c5.3-4.5,10.9-8.6,17-12c5.1-2.8,10.3-5.4,15.6-7.7c4.1-1.9,8.4-3.4,12.9-4.5c3.1-0.7,6-1.9,9.1-2.6 c4-0.9,8-1.6,12-2.2c7-0.9,14-1.3,21.1-1.1c5.9,0.1,11.6,0.7,17.4,1.7c4.1,0.7,8.2,1.4,12.1,2.4c6.8,1.8,13.6,4,20,6.9 c5.9,2.7,11.6,5.7,17.1,9.1c4.7,2.9,8.9,6.5,13.2,9.9c5.3,4.2,9.8,9.1,14,14.3c5,6.2,9.3,12.9,12.6,20.2c1.7,3.7,3.1,7.5,4.5,11.2 c1.1,3,2,6,2.8,9.1c0.6,2.3,1,4.6,1.3,7c0.6,3.6,1.1,7.2,1.6,10.9c0.1,0.8,0.2,1.6,0.2,2.4c0,5.3,0.2,10.6-0.1,15.8 c-0.2,4.2-1,8.4-1.6,12.5c-0.4,2.5-0.7,5-1.3,7.5c-0.9,3.5-2,7-3.2,10.4c-1.9,5.4-4.3,10.7-7.1,15.7c-3.3,6-7.3,11.6-11.8,16.8 c-5.1,6-10.8,11.2-17.1,15.9c-5.2,3.9-10.5,7.5-16.3,10.4c-5.4,2.7-11,5.1-16.7,7.4c-3.4,1.4-7.1,2.3-10.6,3.3 c-3.4,1-6.8,2-10.3,2.6c-3.6,0.7-7.2,1-10.9,1.4C636.9,236.5,632.5,236.8,628.1,237.2z M695.8,124.3c-0.3-4.7-0.2-9.3-1.3-13.8 c-1-4.1-2.1-8.1-3.7-12c-1.6-4-3.7-7.8-6.3-11.2c-2.4-3.1-4.9-6.3-7.8-8.9c-3.1-2.8-6.6-5.1-10-7.6c-4.2-3-8.8-5-13.6-6.7 c-2.5-0.9-5-1.5-7.5-2.1c-2.5-0.6-5.1-1.4-7.7-1.7c-9.4-0.9-18.8-1-28,1.8c-3.6,1.1-7.3,1.9-10.8,3.3c-5.4,2.2-10.4,5.1-15.1,8.5 c-9.9,7.2-17,16.4-21.3,27.8c-2.5,6.6-3.7,13.5-3.9,20.6c-0.1,4.5,0.5,9.1,0.8,13.6c0,0.2,0,0.3,0.1,0.5c1.5,4,2.1,8.3,3.8,12.3 c2.8,6.7,6.7,12.7,11.6,17.9c4.4,4.6,9.3,8.4,14.9,11.5c5.5,3.1,11.1,5.6,17.2,7.1c1.5,0.3,3,0.6,4.4,1c3.1,1,6.4,1.2,9.6,1.7 c1.9,0.3,3.8,0.1,5.7,0.2c5.3,0.1,10.7-0.1,15.9-1.2c0.2,0,0.3,0,0.5-0.1c3.2-0.9,6.3-1.8,9.5-2.8c2-0.6,4.1-1.3,6-2.2 c5.9-2.8,11.5-6.2,16.5-10.4c4.9-4.1,8.9-8.9,12.2-14.3c2.5-4,4.4-8.4,5.8-12.9c1-3.3,1.8-6.8,2.3-10.2 C695.8,130.7,695.6,127.5,695.8,124.3z"></path><path d="M628,100.8c3.9,0,7.5,0.9,10.9,2.4c4.9,2.2,8.4,5.9,10.5,11c1.9,4.5,2.4,9.3,1.8,14c-1,8-4.8,14.3-12.3,17.6 c-5.4,2.4-11.2,2.8-17.1,1.5c-2.9-0.7-5.6-1.6-8.1-3.2c-4.6-3-7.2-7.2-8.6-12.6c-0.7-2.8-1-5.6-0.8-8.5c0.5-8.8,4.3-15.6,12.2-19.8 c1.5-0.8,3.3-1,5-1.4C623.6,101.5,625.8,101.2,628,100.8z"></path></svg>
  )
}


function PowerIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path className="stroke-stone-500 hover:stroke-stone-600" strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
</svg>
  )
}

function MessageIcon() {
  return (
  <svg  width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path className=" fill-stone-600" d="M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 11.1575 3.84216 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1575 0.877045 7.49985 0.877045ZM1.82701 7.49988C1.82701 4.36686 4.36683 1.82704 7.49985 1.82704C10.6328 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6328 13.1727 7.49985 13.1727C4.36683 13.1727 1.82701 10.6329 1.82701 7.49988ZM7.49999 9.49999C8.60456 9.49999 9.49999 8.60456 9.49999 7.49999C9.49999 6.39542 8.60456 5.49999 7.49999 5.49999C6.39542 5.49999 5.49999 6.39542 5.49999 7.49999C5.49999 8.60456 6.39542 9.49999 7.49999 9.49999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  )
}

function FacebookIcon() {
  return (
    <svg
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
  )
}


function TwitterIcon() {
  return (
    <svg
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function LinkedinIcon() {
  return (
    <svg

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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}