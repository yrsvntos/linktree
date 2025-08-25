import { Link } from "react-router-dom";

export function Error(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-bold text-4xl text-white">ERRO</h1>
            <h1 className="font-bold text-8xl text-white my-8">404</h1>
            <p className="text-white font-medium text-xl">Oooops!! A página que você está a procura não existe!</p>
            <Link to="/" className="mt-8 bg-zinc-600 text-white p-2 px-4 rounded-md cursor-pointer">
                Voltar ao Início
            </Link>
        </div>
    );
}