import { Link } from "react-router-dom"
import ColorTheme from "../../../styling/ColorTheme"

export default function Button({path, title, color, icon, textSize}){
    //return <button onClick={()=>alert(`I'm ${role}`)} class={`p-2 px-5 bg-[${ColorTheme()[color]}] text-slate-900/77 rounded-xl text-[${textSize || "1.25em"}]`}>{icon} {title}</button>
    const colors = {
        yellow : "bg-[#FFB20A]"
    }
    return <Link to={path} className= {`p-2 px-5 ${colors[color]} text-slate-900/77 rounded-xl text-[${textSize || "1.25em"}]`}>{icon} {title}</Link>
}