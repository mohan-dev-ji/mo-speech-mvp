import { H2 } from "../ui/typography"
import Image from "next/image"

function ChromeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/landing-page/chrome.png"
                    alt="Chrome browser logo"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </div>
                <H2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Completely Free</H2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                No fees, just visit in your Chrome browser.                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
export default ChromeSection