import Image from "next/image"
import { H2 } from "../ui/typography"

function WithoutExpectation() {
  return (
    <section id="without-expectation" className="w-full py-[64px] bg-slate-100">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
       <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
       <div className="flex items-center justify-center">
           <Image
             src="/landing-page/Without-expectation-image.png"
             width={581}
             height={350}
             alt="Without Expectation illustration"
             className="rounded-lg object-cover"
           />
         </div>
         <div className="flex flex-col justify-center space-y-4">
           <div className="space-y-2">
             <H2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What is Modelling Without Expectation?</H2>
             <ul className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-4 list-none">
               <li className="flex items-start gap-2">
                 <span className="text-primary">•</span>
                 <span>Modelling means using the Mo Speech app yourself to show how communication works, without expecting the learner to respond right away.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-primary">•</span>
                 <span>It&apos;s about talking naturally with symbols, making comments, and building connection, not quizzing or testing the child.</span>
               </li>
             </ul>
           </div>
           
         </div>
        
       </div>
     </div>
   </section>
  )
}
export default WithoutExpectation