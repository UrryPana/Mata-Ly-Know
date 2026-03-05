import Button from "../../components/Home/LandingPage/Button";
import Card from "../../components/Home/LandingPage/Card";

export default function LandingPage(){
    return (
        <>
        <header class="flex flex-col bg-[#285D5E] text-mist-50 text-center p-15">
            <h3 class="m-5">
                <span class="text-[1em] bg-mist-50/20 rounded-xl p-2">
                <i class="fa-solid fa-star"></i> Adaptive Micro-Learning for Filipino Students</span>
            </h3>
            <h1 class="text-[4em]">Learn Smarter, <span class="text-yellow-500">Not Harder</span></h1>
            <p class="m-5 p-5 text-wrap text-[1.5em]">Master any subject with adaptive flashcard exams. Mata-ly-Know adjusts to your level and helps you focus on what matters most.</p>
            <div class="flex flex-row justify-center gap-5 p-5">
                <Button title={"I'm a student"} role={"student"} color={"yellow"} icon={<i class="fa-solid fa-person"></i>}/>
                <Button title={"I'm a professor"} role={"Professor"} color={"white"} icon={<i class="fa-solid fa-chalkboard-user"></i>}/>
            </div>
        </header>
        <main>
            <section class="bg-[#f8f0e7] p-15 text-center">
                <h2 class="text-[2em]/25"><strong>Why Mata-Ly-Know?</strong></h2>
                <p class="text-[1.5em]">A smarter way to study, designed for the Filipino learning Experience.</p>
                <div class="flex flex-row justify-evenly">
                    <Card
                        title={"FlashCards Exam"}
                        text={"Professors create sets with Easy, Medium, and Hard difficulties. Students answer and get instant feedback."}    
                    />
                    <Card
                        title={"Real Time Analytics"}
                        text={"See your mastery progress, exam frequency, and scores across all subjects"}
                    />
                    <Card
                        title={"Adaptive Learning"}
                        text={"Our system tracks your performance and recommends the right difficulty level for your next attempt."}
                    />
                </div>
            </section>
        </main>
        <hr/>
        <footer class="text-center p-5 bg-[#f8f0e7]">
            <p>2026 Mata-ly-Know. Built by Filipino Students, for Filipino Students and Educators</p>
        </footer>
        </>
    );
}