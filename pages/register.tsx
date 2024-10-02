import logo from "../public/intro.png"
import Image from "next/image";




export default function register() {




    return(

        <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex items-center justify-center bg-grey-100 h-screen w-screen">
                        <Image src={logo} alt="logo" className=" size-96 mb-[0.5rem]" />
                    </div>
                    <div className="flex justify-center flex-col bg-primary h-screen w-screen rounded-xl">
                        <div className=" justify-top">uuroaeroiaeoijaer</div>
                        <form className="flex items-center justify-center flex-col gap-12">
                            <div className="">
                            <label htmlFor="text" className="block mb-2 font-crimson font-bold text-lg text-formazzi">Qual seu Nome?</label>
                            <input type="text" placeholder="Digite aqui" className=" px-[0.5rem] h-12 w-[20rem] rounded-3xl"  />
                            </div>
                            <div className="">
                            <label htmlFor="email" className="block mb-2 font-crimson font-bold text-lg text-formazzi">Qual seu E-mail?</label>
                            <input type="email" placeholder="Digite aqui" className=" px-[0.5rem] h-12 w-[20rem] rounded-3xl" />
                            </div>
                            <div className="">
                            <label htmlFor="text" className="block mb-2 font-crimson font-bold text-lg text-formazzi">Qual o nome da sua empresa?</label>
                            <input type="text" placeholder="Digite aqui" className=" px-[0.5rem] h-12 w-[20rem] rounded-3xl" />
                            </div>
                            <button className="bg-registerbt border-2 border-registerbt h-9 w-[10rem] rounded-full font-crimson font-semibold text-lg text-yellow-50 active:bg-transparent active:text-registerbt transition">Enviar Código</button>
                        </form>
                    </div>
                </div>
            
        </main>

    );
}