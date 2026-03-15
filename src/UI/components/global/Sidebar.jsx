//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import ColorTheme from "../../styling/ColorTheme";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/config";

export default function Sidebar({contents, profile}){
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth); 
            console.log("User signed out");
            navigate("/"); 
        } catch (error) {
            console.error("Error signing out: ", error.message);
            alert("Logout failed, please try again.");
        }
    };
    return ( 
    <div className={`grid grid-rows-3 bg-[${ColorTheme().bgGreen}] h-[100vh] w-[30%]`}>
        <section className="p-[2em]">
            <h1 className={`text-[#ffffff] text-4xl`}> <i className="fa-solid fa-brain"></i>  Mata-ly-KNOW!</h1>
            <hr className="text-[#ffffff]/50 mt-[2em]"/>
        </section>
        <section>
            {contents}
        </section>
        <section className="text-center">
            <div className="m-xl">
                <h3 className="text-3xl bg-[#ffffff]">{profile?.username || "Loading Username..."}</h3>
                <h3 className="text-2xl text-[#ffffff]">{profile?.role || "Loading Role..."}</h3>
            </div>
            <button className="text-[#ffffff] text-2xl" onClick={handleLogout} id="logout-btn">Logout</button>
            {/*<Link to={"/"} className="text-[#ffffff] text-2xl">Logout</Link>*/}
        </section>
    </div>
    );
}