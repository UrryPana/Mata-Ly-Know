import Button from "../../components/Home/LandingPage/Button";
import Card from "../../components/Home/LandingPage/Card";

export default function LandingPage(){
    return (
        <>
        <header>
            <h3>Adaptive Micro-Learning for Filipino Students</h3>
            <h1>Learn Smarter, <span>Not Harder</span></h1>
            <p>Master any subject with adaptive flashcard exams. Mata-ly-Know adjusts to your level and helps you focus on what matters most.</p>
            <div>
                <Button title={"I'm a student"} role={"student"} color={"yellow"}/>
                <Button title={"I'm a professor"} role={"Professor"} color={"white"}/>
            </div>
        </header>
        <main>
            <section>
                <h2>Why Mata-ly-Know?</h2>
                <p>A smarter way to study, designed for the Filipino learning Experience</p>
                <div>
                    <Card
                        title={"FlashCards Exam"}
                        text={"Professors create sets with Easy, Medium, and Hard difficulties. Students answer and get instant feedback."}    
                    />
                    <Card
                        title={"Real Time Analytics"}
                        text={"See your mastery progress, exam frequency, and scores across all subjects"}
                    />
                </div>
            </section>
        </main>
        <footer>
            <hr/>
            <p>2026 Mata-ly-Know. Built by Filipino Students, for Filipino Students and Educators</p>
        </footer>
        </>
    );
}