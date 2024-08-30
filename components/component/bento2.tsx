/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3E3dlWMavIx
 */
import Image from "next/image";
import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'


export function Bento2() {
  return (
	<div className="mx-auto">


		<div className="min-h-[400px] lg:h-[700px] relative flex flex-col overflow-hidden bg-cover bg-no-repeat rounded-2xl px-4 pb-4 pt-40 flex-grow">
            
                  {/* Image for desktop screens */}
            <Image
              src="/intro2.png"
              width="1400"
              height="785"
              className="cover hidden lg:block w-full h-auto absolute inset-0 transition duration-300 ease-in-out hover:scale-110"
              alt="A playful kitten on a desktop environment"
            />
            {/* Image for mobile screens */}
            <Image
              src="/intro-p.png"
              width="816"
              height="765"
              className="block lg:hidden w-full h-auto absolute inset-0 "
              alt="A playful kitten seen on a mobile screen"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/0"></div>
			      <h3 className="z-10 text-xl font-thin text-white bg-stone-900 absolute bottom-0 right-0 p-4 xs:text-xl md:text-xl">
            <Typewriter
            words={['Let humans do, what they really want to do', 'Lets do things out of adventure, curiosity, joy and passion.', 'We are not the robots anymore.','We built one.']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={1500}
          />
            </h3>
		</div>

        
	</div>
  )
}



function RocketIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
      </svg>
      
    )
  }


