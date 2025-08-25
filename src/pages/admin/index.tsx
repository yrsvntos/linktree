import { useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FiLink, FiTrash } from "react-icons/fi";

export function Admin(){

    const [input, setInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [corInput, setCorInput] = useState("#ffffff");
    const [bgCorInput, setBgCorInput] = useState("#000");

    function handleRegister(){
        alert("Teste");
        return
    }

    return(
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header/>
            <form 
                className="flex flex-col mt-8 mb-3 w-full max-w-xl"
                onSubmit={handleRegister}    
            >
                <label className="font-medium text-white">Nome do Link</label>
                <Input
                    placeholder="Nome do seu Link"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                
                />
                <label className="font-medium text-white">URL do Link</label>
                <Input
                    placeholder="URL do seu Link"
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                
                />

                <section className="flex items-center gap-8 text-white">
                    <div className="flex flex-col gap-3">
                        <label>Cor do Link</label>
                        <Input
                            type="color"
                            value={corInput}
                            onChange={(e) => setCorInput(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label>Fundo do Link</label>
                        <Input
                            type="color"
                            value={bgCorInput}
                            onChange={(e) => setBgCorInput(e.target.value)}
                        />
                    </div>
                </section>
                
                {input != '' && (
                    <div className="flex flex-col items-center mt-5 mb-7 p-1 justify-center border-gray-100/25 border rounded-mb">
                    <label className="text-white font-medium mt-2 mb-3">Veja como está ficando:</label>
                    <article 
                        className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                        style={{marginBottom: 8, marginTop: 8, backgroundColor: bgCorInput}}
                    >
                        <p className="font-medium text-white" style={{color: corInput}}>
                            {input}
                        </p>
                    </article>
                </div>
                )}
                <button 
                    type="submit"
                    className=" mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-2 flex justify-center items-center">
                    Cadastrar<FiLink/>
                </button>
            </form>

            <section className="w-full max-w-xl">
                <h1 className="text-white font-bold text-4xl text-center">Meus Links</h1>
                <article className="flex items-center justify-between  gap-4 rounded-md mt-4 bg-black text-white p-2 px-3">
                    <div>
                        <p>Meu canal do Youtube</p>
                    </div>
                    <div className="border p-2">
                        <FiTrash size={20} color="#fff" className="cursor-pointer"/>
                    </div>
                </article>
            </section>
        </div>
        
    );
}