import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { H2 } from "../ui/typography";

function AboutSection() {
  return (
         <section id="about" className="w-full py-12 md:py-24 lg:py-[64px] bg-slate-100">
          <div className="max-w-[1440px] mx-auto px-4 md:px-[112px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <H2>What is Mo Speech?</H2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mo Speech is a free online resource that bridge’s the gap between everyday life and AAC training. 

This is designed for fast, easy access to core symbols for adults that are training children on the meaning of the core words .
                </p>
              </div>
              <div className="w-full flex flex-col gap-16 pt-12 lg:flex-row lg:justify-between">
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Instant Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Search symbols instantly with voice or typing.</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Full-Screen Display</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Show symbols full-screen for easier focus.</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Prepare for Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Prepare children for successful AAC communication.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    
  )
}
export default AboutSection