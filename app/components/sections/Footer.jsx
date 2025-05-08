import React from "react"

function Footer() {
  return (
    <footer className="w-full mt-12 md:mt-16 lg:mt-18 xl:mt-20 py-6 text-center text-sm text-muted-foreground bg-slate-100">
      © {new Date().getFullYear()} Mo Speech. All rights reserved.
    </footer>
  )
}
export default Footer