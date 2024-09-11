import logo from "../public/forma.png"
import Image from "next/image";




export default function register() {




    return(

        <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex items-center justify-center bg-grey-100 h-screen w-screen">
                        <Image src={logo} alt="logo" className=" size-96 mb-[0.5rem]" />
                    </div>
                    <div className="flex items-center justify-center bg-primary h-screen w-screen rounded-xl">
                        <div className="flex items-center justify-center flex-col gap-12">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </div>
                </div>
            
        </main>

    );
}