import Image from "next/image";
import Navbar from "../../components/Navbar";
import ActivitySection from "../../components/ActivitySection";
import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <div className="container mt-24 mx-auto py-4">
        <div className="flex flex-wrap">
          <Link href="/">
            <ArrowLeftIcon className='h-10 w-10 text-black cursor-pointer' />
          </Link>
          <h1 className="hidden ml-8 md:block text-5xl font-extrabold text-[#14192C]">Actividades</h1>
        </div>
        <ActivitySection />
      </div>
    </main>
  );
}
