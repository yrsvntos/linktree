import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { FiLogIn} from "react-icons/fi";


export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister(e: FormEvent){
        e.preventDefault();

        console.log({
            email,
            password
        })
    }
    return(
        <div 
            className="flex flex-col w-full h-screen items-center justify-center"
        >

            <Link to="/">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleRegister} className="w-full max-w-xl flex flex-col px-2"
            >
                <Input
                    type="text"
                    placeholder="Digite o seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Digite a sua password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="h-9 bg-blue-600 border-0 text-lg font-medium text-white rounded-md flex items-center justify-center gap-1"
                >
                    Acessar<FiLogIn/>
                </button>
            </form>

        </div>
    );
}