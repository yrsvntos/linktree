import { useState, type FormEvent } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FiLink } from "react-icons/fi";

export function RedesSociais(){

    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const [github, setGithub] = useState("");

    function handleRegister(e: FormEvent){
        e.preventDefault();
        alert('Teste');
        return;
    }

    return(
        <div className="flex flex-col items-center  justify-center">
            <Header/>
            <h1 className="text-white text-3xl mt-8">Suas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col w-full max-w-xl mt-7">
                <label className="text-white font-medium mb-2">Link do Linkedin</label>
                <Input
                    type="url"
                    placeholder="Digite a url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
                <label className="text-white font-medium mb-2">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="text-white font-medium mb-2">Link do Github</label>
                <Input
                    type="url"
                    placeholder="Digite a url"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />
                <button className="rounded-md p-2 bg-blue-600 text-white flex items-center gap-2 justify-center">
                    Salvar links <FiLink/>
                </button>
            </form>
        </div>
    );
}