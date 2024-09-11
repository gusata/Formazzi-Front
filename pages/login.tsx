export default function login() {




    return(

        <main>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">FORMAZZI</h2>
                        <p className="text-gray-600 text-center mb-6">Bem vindo de volta!</p>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">E-mail</label>
                                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu e-mail" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2">Senha</label>
                                <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Sua senha" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Entrar</button>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline w-full">Entrar com Google</button>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Esqueci minha senha</a>
                            </div>
                        </form>
                    </div>
                </div>

                
            
        </main>

    );
}