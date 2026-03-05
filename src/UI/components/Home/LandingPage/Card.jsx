export default function Card({title, text, icon}){
    return <div class="flex flex-col bg-[#ffffff] w-[25em] h-[18em] p-5 m-10 rounded-xl">
        {icon}
        <h3 class="text-[1.5em]"><strong>{title}</strong></h3>
        <br/>
        <p class="text-left text-[1.25em]">{text}</p>
    </div>
}