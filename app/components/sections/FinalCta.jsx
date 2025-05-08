
import { SignUpButton } from "@clerk/nextjs";

function FinalCta() {
  return (
  <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start?</h2>
          <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join us in empowering non-speaking children with effective communication tools
          </p>
          <SignUpButton mode="modal" afterSignInUrl="/">
                <button className="bg-slate-100 hover:bg-slate-300 text-slate-900 py-2 px-4 rounded">
                  Sign Up for Free
                </button>
              </SignUpButton>
        </div>
      </div>
    </div>
  </section>
  )
}
export default FinalCta