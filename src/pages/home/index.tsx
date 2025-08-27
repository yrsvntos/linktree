import { useState, useEffect } from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { db } from "../services/firebaseConnection";
import { 
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc,
    onSnapshot

} from "firebase/firestore";

interface LinkProps{
    id: string;
    name: string;
    url: string;
    color: string;
    bg: string;
}

export function Home(){

    const [links, setLink] = useState<LinkProps []>([]);

    useEffect(()=>{
       function loadLinks(){
            const getRef = collection(db, "links");
            const queryRef = query(getRef, orderBy("created", "asc"));

            getDocs(queryRef)
            .then((snapshot)=>{
                let lista = [] as LinkProps[];
                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        color: doc.data().color,
                        bg: doc.data().bg
                    })
                })
                setLink(lista)
            })
       }

       loadLinks();
    }, [])
    return(
        <div 
            className="flex flex-col w-full py-4 items-center justify-center h-screen"
        >
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Yanik dos Santos</h1>
            <p className="text-gray-50 mb-5 mt-3">Veja os meus links</p>
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((link) => (
                    <section 
                        className="mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
                        key={link.id}
                        style={{backgroundColor: link.bg, color: link.color}}
                    >
                        <a href={link.url}>
                            <p>{link.name}</p>
                        </a>
                    </section>
                ))}
                
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