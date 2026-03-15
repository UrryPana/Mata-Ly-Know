//import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ColorTheme from "../../styling/ColorTheme"
import { auth } from "../../../../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login(){
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            email: "",
            password: ""
        });
        const [status, setStatus] = useState(null);
        const [passwordShow, setpasswordShow] = useState(false);
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };
        /* Old login in python backend
        const sendData = async (e) => {
            e.preventDefault();
            const payload = {
                "user_email" : formData.email,
                "user_pass" : formData.password 
            }
            try{
                const response = await axios.post('http://127.0.0.1:8000/login/login',payload)
                console.log("Sent data")
                console.log(response, status)
                setStatus(1)
                navigate('/dashboard')
            }
            catch(error){
                console.error("Error sending data")
                setStatus(0)
            }
        }*/

            const sendData = async (e) => {
                e.preventDefault();
                
                try {
                    const userCredential = await signInWithEmailAndPassword(
                        auth,
                        formData.email,
                        formData.password
                    );
                    const loggedInUser = userCredential.user; 
                    
                    console.log("Logged in UID: ", loggedInUser.uid);
                    setStatus(true);
                    navigate('/dashboard');
            
                } catch (error) {
                    console.error("Login Failed:", error.code);
                    
                    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                        alert("Invalid email or password.");
                    } else {
                        alert("An error occurred. Please try again.");
                    }
                    
                    setStatus(false);
                }
            };
    return <>
        <main className={`flex flex-col bg-[${ColorTheme().bgWhite}] h-[100vh]`}>
        <section className="flex flex-col items-center pt-[8%] pb-[4%]">
            <h1 className="lg:text-6xl/25"><strong>Mata-ly-KNOW!</strong></h1>
            <h2 className="lg:text-3xl text-mist-500">Login to Continue</h2>
        </section>
        <form method="post" className="flex flex-col items-center">
            <div className={`flex flex-col bg-[#ffffff] p-[2%] w-[45%] h-[100%] rounded-[5%]`}>
                <h1 className="lg:text-4xl text-center"><strong>Login</strong></h1>
                <label htmlFor="emailTxtbox" className="lg:text-2xl/15 text-left" >Email Address: </label>
                <input type="email" onChange={handleChange} value={formData.email} id="emailTxtbox" name="email" placeholder="Input your Email here..." className={`bg-[${ColorTheme().bgWhite}] h-2xl lg:text-2xl`} required/>
                <label htmlFor="passwordTxtbox" className="lg:text-2xl/15">Password: </label>
                <input type={passwordShow ? "text" : "password"} onChange={handleChange} value={formData.password} id="passwordTxtbox" name="password" placeholder="Input your Password here..." className={`bg-[${ColorTheme().bgWhite}] h-2xl lg:text-2xl`} required/>
                <div className="text-xl m-2">
                <input type="checkbox" name={"show_password"} value={"yes"} id={"password-chkbx"} checked={passwordShow} onChange={()=> setpasswordShow(!passwordShow)}/>
                <label htmlFor="password-chkbx">  Show Password</label>
                </div>
                {/*
                    TODO: ayusin ang login validation. Icocomment ko muna yung totoong submit button and I'm using a placeholder button for testing pursposes. Mag fifire kasi agad yan eh sa backend at mahirap itest and dashboard kung connected agad sya sa backend. 
                */}
                <input type="submit" value={"Continue"} onClick={(e)=>sendData(e)} className={`bg-[#5EA1A2] lg:text-2xl text-[#FFFFFF] mt-[3em] mx-[4em] p-[0.25em] rounded-xl`}/>
                {/*<Link to={'/dashboard'} className={`text-center bg-[#5EA1A2] lg:text-2xl text-[#FFFFFF] mt-[3em] mx-[4em] p-[0.25em] rounded-xl`}>Continue</Link>*/}
            </div>
        </form>
       <Link to={'/'} className={`text-center lg:text-2xl text-[#5EA1A2] my-[1em]`}><i className="fa-solid fa-arrow-left"></i> Return to Home Page</Link>
        </main>
    </>
}