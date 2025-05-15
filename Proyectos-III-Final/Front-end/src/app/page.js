import Image from "next/image";
import ProjectsSection from "../components/ProjectsSection";
import Link from "next/link";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4"> 
        <h1 className="hidden md:block text-4xl font-bold text-white">Main</h1>
        <h1 className="text-white">
          <Link href="/communities">
          ver communities
          </Link>
        </h1>
        <h1 className="text-white">
          <Link href="/register">
          ver registro
          </Link>
        </h1>
      </div>
    </main>
  );
}
