import { Navbar } from "@/components/sections/navbar";
import { Header } from "@/components/sections/header";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Header />
      </div>
    </>
  );
}
