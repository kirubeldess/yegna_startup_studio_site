import { Navbar } from "@/components/sections/navbar";
import { Header } from "@/components/sections/header";
import { HowItWorks } from "@/components/sections/how-it-works";
import WhatWeLookFor from "@/components/sections/what-we-look-for";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />
        <Header />
        <HowItWorks />
        <WhatWeLookFor />
      </div>
    </>
  );
}
