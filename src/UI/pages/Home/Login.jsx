import { Link } from "react-router-dom"
import ColorTheme from "../../styling/ColorTheme"

export default function Login(){
    return <>
        <main className={`flex flex-col bg-[${ColorTheme().bgWhite}] h-[100vh]`}>
        <section className="flex flex-col items-center pt-[8%] pb-[4%]">
            <h1 className="text-[6em]/25"><strong>Mata-ly-KNOW!</strong></h1>
            <h2 className="text-[2em] text-mist-500">Login to Continue</h2>
        </section>
        <form action={''} method="post" className="flex flex-col items-center">
            <div className={`flex flex-col bg-[${ColorTheme().white}] p-[2%] w-[45%] h-[100%] rounded-[5%]`}>
                <h1 className="text-[3em] text-center"><strong>Login</strong></h1>
                <label for="emailTxtbox" className="text-[1.75em]/15 text-left" >Email Address: </label>
                <input type="email" id="emailTxtbox" name="email" placeholder="Input your Email here..." className={`bg-[${ColorTheme().bgWhite}] h-[2em] text-[1.5em]`} required/>
                <label for="passwordTxtbox" className="text-[1.75em]/15">Password: </label>
                <input type="password" id="passwordTxtbox" name="password" placeholder="Input your Password here..." className={`bg-[${ColorTheme().bgWhite}] h-[2em] text-[1.5em]`} required/>
                {/*
                    TODO: ayusin ang login validation. Icocomment ko muna yung totoong submit button and I'm using a placeholder button for testing pursposes. Mag fifire kasi agad yan eh sa backend at mahirap itest and dashboard kung connected agad sya sa backend. 
                
                    <input type="submit" value={"Continue"} className={`bg-[#5EA1A2] text-[2em] text-[#FFFFFF] mt-[3em] mx-[4em] p-[0.25em] rounded-xl`}/>
                
                */}
                <Link to={'/dashboard'} className={`text-center bg-[#5EA1A2] text-[2em] text-[#FFFFFF] mt-[3em] mx-[4em] p-[0.25em] rounded-xl`}>Continue</Link>
            </div>
        </form>
        <Link to={'/'} className={`text-center text-[1.5em] text-[#5EA1A2] my-[1em]`}><i className="fa-solid fa-arrow-left"></i> Return to Home Page</Link>
        </main>
    </>
}