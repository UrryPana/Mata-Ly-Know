export default function Button({role, title, color, icon, textSize}){
    const colors = {
        white:"bg-[#ffffff]",
        yellow:"bg-[#FFB20A]",
    }
    return <button onClick={()=>alert(`I'm ${role}`)} class={`p-2 px-5 ${colors[color]} text-slate-900/77 rounded-xl text-[${textSize || "1.25em"}]`}>{icon} {title}</button>
}