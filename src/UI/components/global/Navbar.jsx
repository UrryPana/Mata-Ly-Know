export default function Navbar({contents}){
    return <nav className="flex flex-row justify-between bg-[#285D5E] h-[1.25em] p-0">
        {contents}
    </nav>
}