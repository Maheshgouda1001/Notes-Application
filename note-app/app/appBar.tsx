import "./globals.css";
import { useRouter } from "next/navigation";

const AppBar = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("access-token");
        router.replace("/login");
    };
    return (
        <div className="w-full h-12 text-white flex items-center px-4 appBar justify-between">
            <h1 className="text-lg font-semibold">Keep Notes</h1>
            <div>
                <button className="mx-1 text-sm font-bold">About</button>
                <button className="mx-1 text-sm font-bold">Notes</button>
                <button className="mx-1 text-sm font-bold">Acount</button>
                <button className="mx-1 text-sm font-bold" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default AppBar;