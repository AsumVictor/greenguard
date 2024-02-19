import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logo.png"
import { siteConfig } from "@/config/site"
import '../assets/intro.css'

export default function Introduction() {
  return (
    <section className= "bg-[hsla(118,95%,16%,0.19)] intro  py-4 md:py-0 min-h-screen grid md:grid-cols-1 place-items-center">
      <div className="w-11/12 md:w-1/2 flex flex-col items-center text-center">
        {/* TODO: Replace Logo Later */}
        <Image
          src={Logo}
          alt={`${siteConfig.name} Logo`}
          width={150}
          className="md:hidden"
        />
        <h1 className="scroll-m-20 mb-4 text-[30px] font-extrabold lg:text-[98px] uppercase  text-white">
          {siteConfig.name}
        </h1>
        <p className="text-center text-sm md:text-base mt-6 text-white">
          {siteConfig.description}
        </p>
        <Button className="my-7" asChild>
          <Link href="/home">Try {siteConfig.name} now!</Link>
        </Button>
      </div>
      {/* <div className="relative hidden md:block md:w-full md:h-full">
        <Image
          src={GreenLeaves}
          alt="Green and Healthy Leaves"
          fill
          priority
          quality={100}
          className="hidden md:block"
        />
      </div> */}
     
    </section>
  )
}
