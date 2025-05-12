import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  
  if (userId) {
    redirect("/home");
  } else {
    redirect("/landing");
  }
} 