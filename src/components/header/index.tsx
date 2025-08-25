import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export function Header(){

    function handleLogout(){
        alert("Logout");
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