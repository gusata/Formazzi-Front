import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={''}>
    <nav className="bg-yellow-50 border-b-2 border-primary">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <span className="font-lusitana font-extrabold text-2xl text-formazzi">Formazzi</span>
      <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       <button className="bg-transparent border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-registerbt active:bg-registerbt active:text-yellow-50 transition">Registre-se</button>
       <button className="bg-registerbt border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition ">Login</button>
      </div>
    </div>
  </div>


    <div>

    </div>
  


</nav>
    </main>
  );
}
