export default function Button({role, title, color}){
    return <button onClick={()=>alert(`I'm ${role}`)}>{title}</button>
}