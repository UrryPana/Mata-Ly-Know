import Button from "../../components/Home/LandingPage/Button";
import Card from "../../components/Home/LandingPage/Card";
import LPNavBar from "../../components/Home/LandingPage/LPNavBar";
import ColorTheme from "../../styling/ColorTheme";

export default function LandingPage(){
    return (
        <>
        <header className={`flex flex-col bg-[${ColorTheme().bgGreen}] text-mist-50 text-center p-15`}>
            <LPNavBar/>
            <div>
                <h3 className="m-5">
                    <span className="lg:text-base sm:text-[2em] bg-mist-50/20 rounded-xl p-2">
                    <i className="fa-solid fa-star"></i> Web-Based Exam Platform for Filipino Teachers & Students</span>
                </h3>
                <h1 className="lg:text-6xl">Smart Exams, <span className="text-yellow-500">Real Insights</span></h1>
                <h3 className="m-5 p-5 text-wrap lg:text-2xl">Create, deploy, and analyze exams with adaptive difficulty, automated checking, and anti-cheating detection - all in one platform.</h3>
                <div className="flex flex-row justify-center gap-5 p-5">
                    <Button path={"/login"} title={"Get Started"} color={"yellow"} icon={<i className="fa-solid fa-person"></i>}/>
                </div>
            </div>
        </header>
        <main>
            <section className={`bg-[${ColorTheme().bgWhite}] p-15 text-center`}>
                <div>
                    <h2 className="lg:text-4xl/25"><strong>Everything You Need</strong></h2>
                    <p className="lg:text-2xl">A complete exam platform for teachers and students.</p>
                </div>
                <div className="flex flex-row justify-evenly">
                    <Card
                        icon={<i className="fa-solid fa-book fa-3x m-2"></i>}
                        title={"Exam Builder"}
                        text={"Create exams with multiple choice, essay, and fill-in-the-blank questions. Set difficulty and time limits."}    
                    />
                    <Card
                        icon={<i className="fa-solid fa-arrow-trend-up fa-3x m-2"></i>}
                        title={"Adaptive Insights"}
                        text={"Track student performance with real-time analytics, frequency charts, and AI-powered summaries."}
                    />
                    <Card
                        icon={<i className="fa-solid fa-code-branch fa-3x m-2"></i>}
                        title={"Amti-Cheating"}
                        text={"Tab-switching detections with cheating risk scores. Monitor suspicious behavior Automatically."}
                    />
                </div>
            </section>
        </main>
        <hr/>
        <footer className="text-center p-5 bg-[#f8f0e7]">
            <p>2026 Mata-ly-Know. Built by Filipino Students, for Filipino Students and Educators</p>
        </footer>
        </>
    );
}