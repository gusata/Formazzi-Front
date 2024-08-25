import Image from "next/image";
import { Inter } from "next/font/google";
import intro from "../public/intro.png"
import logo from "../public/logo.svg"
import foguete from "../public/foguete.png"
import { useEffect } from "react";
import FlareCursor from "../components/cursor/cursor.js"




const inter = Inter({ subsets: ["latin"] });





export default function Home() {
 


  return (
    
    <main className={''} id="content">
    <nav className="bg-yellow-50 border-b-2 border-primary">
  <div className="mx-1rem  px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <Image src={logo} alt="logo" className="size-[13rem] mb-[0.5rem]" />
      <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       <button className="bg-transparent border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-registerbt active:bg-registerbt active:text-yellow-50 transition">Registre-se</button>
       <button className="bg-registerbt border-2 border-registerbt h-9 w-24 rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition ">Login</button>
      </div>
    </div>
  </div>
</nav>
      <div className="content min-w-screen justify-between flex flex-col  h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" id="main">
      
        <div className=" snap-end flex items-center flex-row justify-between mx-32 min-h-screen h-screen relative">
          <div className="flex flex-col gap-8">
            <h1 className="font-crimson font-bold text-5xl text-formazzi w-[40rem]">
              Seja bem vindo!
            </h1>
            <div className="w-[35rem]">
            <span className="font-crimson font-bold text-2xl text-formazzi">
            Acreditamos que investir no desenvolvimento dos nossos funcionários é investir no futuro da empresa. </span>
           <span className="font-crimson text-2xl text-formazzi"> É por isso que estamos comprometidos em proporcionar</span>
           <span className="font-crimson font-bold text-2xl text-fontIntro"> cursos de qualidade para os novos membros das equipes.</span>
            
            
            </div>
          </div>
          <Image src={intro} alt="intro" className="size-[450px]" />
          <footer className="absolute bottom-[10%] left-[45%] font-crimson font-bold text-xl text-formazzi " id="txt">Tente usar as setas </footer>
        </div>

        <div className=" snap-start flex items-center flex-row justify-between mx-32 min-h-screen h-screen relative ">


          <div className="flex flex-col gap-8 z-10 absolute top-24 left-0">
            <h1 className="font-crimson font-bold text-5xl text-formazzi w-[40rem]">
              Primeiros Passos
            </h1>
            <div className="w-[35rem]">
            <span className="font-crimson font-bold text-3xl text-formazzi">
            Entendemos que os primeiros passos em uma nova empresa podem ser desafiadores, </span>
           <span className="font-crimson text-3xl text-formazzi"> e é por isso que estamos aqui para apoiá-lo em cada etapa do seu crescimento 
           profissional. Nossos cursos são cuidadosamente projetados para equipá-lo com as </span>
           <span className="font-crimson font-bold text-3xl text-fontIntro">habilidades necessárias para ter sucesso em sua função e contribuir para o sucesso 
           da equipe.</span>
            
            
            </div>
          </div>

          <div className="flex flex-col gap-8 z-10 absolute bottom-[20vh] right-[-5vh]  ">
            <div className="w-[35rem]">
            <span className="font-crimson font-bold text-3xl text-formazzi">
            Junte-se a nós nesta jornada emocionante rumo ao sucesso profissional. </span>
           <span className="font-crimson text-3xl text-formazzi"> Na Formazzi, </span>
           <span className="font-crimson font-bold text-3xl text-fontIntro">o seu futuro é importante para nós.</span>

            </div>
          </div>


           <Image src={foguete} alt="" className=" absolute z-0 bottom-0 left-[-15vh] " id="foguete"  />
        </div>

          
      </div>
      <FlareCursor/>
      

    </main>
  );
}

