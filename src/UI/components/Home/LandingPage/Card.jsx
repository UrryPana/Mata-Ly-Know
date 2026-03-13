import ColorTheme from "../../../styling/ColorTheme";

export default function Card({title, text, icon}){
    return <div className={`flex flex-col bg-[${ColorTheme().white}] w-4xl h-2xl p-5 m-10 rounded-xl`}>
        {icon}
        <h3 className="text-3xl"><strong>{title}</strong></h3>
        <br/>
        <p className="text-left text-2xl">{text}</p>
    </div>
}