import ColorTheme from "../../../styling/ColorTheme";

export default function Card({title, text, icon}){
    return <div className={`flex flex-col bg-[${ColorTheme().white}] w-[25em] h-[18em] p-5 m-10 rounded-xl`}>
        {icon}
        <h3 className="text-[1.5em]"><strong>{title}</strong></h3>
        <br/>
        <p className="text-left text-[1.25em]">{text}</p>
    </div>
}