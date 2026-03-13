import { Link } from "react-router-dom";
import ColorTheme from "../../styling/ColorTheme";


export default function Sidebar({contents}){
    return ( 
    <div className={`grid grid-rows-3 bg-[${ColorTheme().bgGreen}] h-[100vh] w-[30%]`}>
        <section className="p-[2em]">
            <h1 className={`text-[#ffffff] text-[1.75em]`}> <i className="fa-solid fa-brain"></i>  Mata-ly-KNOW!</h1>
            <hr className="text-[#ffffff]/50 mt-[2em]"/>
        </section>
        <section>
            {contents}
        </section>
        <section className="text-center">
            <h3>Juan Dela Cruz</h3>
            <Link to={"/"} className="text-[#ffffff] text-[1.5em]">Logout</Link>
        </section>
    </div>
    );
}