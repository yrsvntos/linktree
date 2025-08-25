import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../../pages/services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Header(){

    const navigate = useNavigate();

    async function handleLogout(){
        await signOut(auth)
        .then(() => {
            navigate("/");
            toast.info("Logout efectuado com sucesso!");
        })
        .catch((error) => (
            toast.warning("Erro ao fazer logout" +error)
        ))
    }
    return(
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
                <div className="flex gap-4 font-bold">
                    <Link to="/">
                        Início
                    </Link>
                    <Link to="/admin">
                        Links
                    </Link>
                    <Link to="/admin/redes-sociais">
                        Redes Sociais
                    </Link>
                </div>
                <button onClick={handleLogout} className="cursor-pointer">
                    <FiLogOut size={28} color="#db2629"/>
                </button>
            </nav>

        </header>
    );
}