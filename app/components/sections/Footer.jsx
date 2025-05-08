import React from "react"

function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-muted-foreground bg-slate-100">
      © {new Date().getFullYear()} Mo Speech. All rights reserved.
    </footer>
  )
}
export default Footer