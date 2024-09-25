import logo from "../public/intro.png"
import Image from "next/image";




export default function register() {




    return(

        <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex items-center justify-center bg-grey-100 h-screen w-screen">
                        <Image src={logo} alt="logo" className=" size-96 mb-[0.5rem]" />
                    </div>
                    <div className="flex items-center justify-center bg-primary h-screen w-screen rounded-xl">
                        <form className="flex items-center justify-center flex-col gap-12">
                            <input type="text" placeholder="Qual seu Nome?" className=" px-[0.5rem]"  />
                            <input type="email" placeholder="Qual seu E-mail?"/>
                            <input type="text" placeholder="Qual o nome da sua empresa?"/>
                            <button className="bg-registerbt border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">Enviar Código</button>
                        </form>
                    </div>
                </div>
            
        </main>

    );
}