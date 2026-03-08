import DashboardSideBar from "../../components/Dashboard/DashboardSideBar";

export default function MainDashboard(){
    return <>
    <div className="grid grid-cols-2">
        <aside>
            <DashboardSideBar/>
        </aside>
        <main>

        </main>
    </div>
    </>
}