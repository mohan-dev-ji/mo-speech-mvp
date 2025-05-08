import Link from "next/link"
import { Button } from "../ui/button"
import { H2 } from "../ui/typography"
import Image from "next/image"

function FutureVisionSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4 w-full">
              <H2 className="mx-auto max-w-[500px]">
              Help Shape the Future of Mo Speech              </H2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
              We’re building Mo Speech to truly support families and professionals using AAC. If you’ve used AAC or support someone who does, we’d love to hear from you. Take our short survey and help us create tools that make communication easier for everyone.
              </p>
            </div>
            <div className="flex gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact">Take the Survey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-12">
        <Image
          src="/landing-page/Help-image.png"
          width={1170}
          height={652}
          alt="Thinking of the future"
          className="rounded-lg object-cover w-full"
          priority
        />
      </div>
    </section>
  )
}
export default FutureVisionSection