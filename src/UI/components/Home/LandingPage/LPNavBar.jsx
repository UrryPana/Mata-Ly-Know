import Navbar from "../../global/Navbar";
import Button from "./Button";

export default function LPNavBar(){
    return <Navbar
        contents={
            <>
                <section>
                    <h1 className="text-[2.5rem]"><i class="fa-solid fa-brain"></i> Mata-Ly-Know</h1>
                </section>
                <section>
                    <Button path={'/Login'} title={"Login/Sign Up"} color={"yellow"}/>
                </section>
            </>
        }
    />
}