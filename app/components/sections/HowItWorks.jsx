function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-[64px] mb-16">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to effective AAC modelling
            </p>
          </div>
          
          <div className="w-full max-w-2xl mt-12 space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-8 rounded-lg border-2 border-primary/20 bg-white/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Open Mo Speech</h3>
              <p className="text-muted-foreground">Access Mo Speech on any device with the Chrome web browser</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center p-8 rounded-lg border-2 border-primary/20 bg-white/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Search for a symbol</h3>
              <p className="text-muted-foreground">Use voice or typing to quickly find the right symbol</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-8 rounded-lg border-2 border-primary/20 bg-white/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Model Communication</h3>
              <p className="text-muted-foreground">Show the symbol while speaking to boost learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks