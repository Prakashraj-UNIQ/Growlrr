import type { Metadata } from "next";
import Contact from "@/components/Contact/ContactUs"

export const metadata: Metadata = {
  title:"Contact-Us",
  description:"Contact Us Page"
}

export default function ContactUs(){
  return (
    <main className="">
      <Contact/>
    </main>
  )
}
