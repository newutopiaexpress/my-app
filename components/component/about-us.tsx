/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qiGWMd4q4YP
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">Tamas Konto</h1>
                <p className="mt-4 max-w-[600px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                #Tamas is a web developer and designer with decades of experience. He graduated as a graphic designer at the University of Fine Arts, but his interest soon turned to web technologies and digital art. Worked as an art director at several digital agencies (e.g. Neo Interactive, H2Omedia)
#He also participated in the founding of several startups, e.g.:
- koncertblog.hu (2009. Founder, CTO, conducting live, online concert broadcasts)
- feed.hu (2013, website designer based on machine learning)
- pontvelem.hu (creation of a kinect-based tablet application)

#Tamás has three daughters, a Husky dog, and an LR3 Land Rover Discovery.

#Tamas has the following skills:
- high-level conceptual design for digital displays (brand design, interface and UX design)
- Full stack development (HTML, CSS, JS, Wordpress, React, Next.js, Node.js, Express, MongoDB, MySQL)
- AI-based application development (text and image recognition, chatbot development)
- Tamás is able to see the big picture and the small details at the same time.
- Tamas is able to handle all the tasks required for a modern web appearance, from design to turnkey delivery.

#Tamás' contact information:
- tamas@utopia.express
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


