import { Home, School, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

function WhosItForSection() {
  return ( 
    <section className="w-full py-12 md:py-24 lg:py-32">
     <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
       <div className="flex flex-col items-center justify-center space-y-4 text-center">
         <div className="space-y-2">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who It&apos;s For</h2>
           <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Mo Speech is designed for everyone involved in supporting non-speaking children
           </p>
         </div>
         <div className="w-full flex flex-col gap-16 pt-12 lg:flex-row lg:justify-between">
           <Card className="flex-1">
             <CardHeader className="pb-2">
               <div className="flex justify-center mb-4">
                 <Home className="h-12 w-12 text-primary" />
               </div>
               <CardTitle className="mt-8">Parents & Caregivers</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center max-w-[200px]">Of non-speaking or minimally verbal children</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader className="pb-2">
               <div className="flex justify-center mb-4">
                 <Users className="h-12 w-12 text-primary" />
               </div>
               <CardTitle className="mt-4">Therapists</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center max-w-[200px]">Working with AAC users in clinical settings</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader className="pb-2">
               <div className="flex justify-center mb-4">
                 <School className="h-12 w-12 text-primary" />
               </div>
               <CardTitle className="mt-4">Educators</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center max-w-[200px]">
                   Teachers and assistants in schools
                 </p>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>
     </div>
   </section>
  )
}
export default WhosItForSection