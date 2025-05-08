import { BookOpen, CheckCircle, Clock1, Cookie, Home, PersonStanding, School, Store, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";


function WhenAndWhereSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
     <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
       <div className="flex flex-col items-center justify-center space-y-4 text-center">
         <div className="space-y-2">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">When and Where to Model</h2>
           <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
           Use Mo Speech to model communication throughout the day
           </p>
         </div>
         <div className="w-full flex flex-col gap-16 pt-12 lg:flex-row lg:justify-between">
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <Clock1 className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>During routines</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">Brushing teeth, getting dressed</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <Cookie className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>At mealtimes</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">Breakfast, lunch, dinner</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <BookOpen className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>Reading Books</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">
                 Story time
                 </p>
               </div>
             </CardContent>
           </Card>
         </div>
         <div className="w-full flex flex-col gap-16 pt-12 lg:flex-row lg:justify-between">
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <PersonStanding className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>During play</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">Games and activities</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <Store className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>Out and about</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">Shopping, park visits</p>
               </div>
             </CardContent>
           </Card>
           <Card className="flex-1">
             <CardHeader>
               <div className="flex justify-center mb-4">
                 <CheckCircle className="h-12 w-12 text-primary" />
               </div>
               <CardTitle>Anytime!</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex justify-center">
                 <p className="text-sm text-muted-foreground text-center">
                 During natural communication.</p>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>
     </div>
   </section>
  )
}
export default WhenAndWhereSection