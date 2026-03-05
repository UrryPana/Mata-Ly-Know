import Navbar from "../../global/Navbar";
import Button from "./Button";

export default function LPNavBar(){
    return <Navbar
        contents={
            <>
                <section>
                    <h1 class="text-[2.5rem]">Mata-Ly-Know</h1>
                </section>
                <section>
                    <Button title={"Get Started"} color={"yellow"}/>
                </section>
            </>
        }
    />
}