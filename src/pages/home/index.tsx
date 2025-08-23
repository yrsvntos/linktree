import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export function Home(){
    return(
        <div 
            className="flex flex-col w-full py-4 items-center justify-center h-screen"
        >
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Yanik dos Santos</h1>
            <p className="text-gray-50 mb-5 mt-3">Veja os meus links</p>
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a href="">
                        <p>Meu Linkedin</p>
                    </a>
                </section>
                <footer className="flex justify-center my-3 gap-4">
                    <a href="">
                        <FiInstagram size={28} color="#fff"/>
                    </a>
                    <a href="">
                        <FiLinkedin size={28} color="#fff"/>
                    </a>
                    <a href="">
                        <FiGithub size={28} color="#fff"/>
                    </a>
                </footer>
            </main>
        </div>
    );
}