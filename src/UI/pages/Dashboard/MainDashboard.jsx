import DashboardSideBar from "../../components/Dashboard/DashboardSideBar";
import { useAuth } from "../../../../firebase/authContext";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase/config";
import { doc, getDoc } from "firebase/firestore"

export default function MainDashboard(){
    const {user} = useAuth();
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        const getProfile = async() => {
            if(user?.uid) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                }
            }
        }
        getProfile();
    }, [user]);
    return <>
    <div className="grid grid-cols-2">
        <aside>
            <DashboardSideBar profile={profile}/>
        </aside>
        <main>
            <div>
                <h1 className="text-2xl">
                    Welcome: {profile?.username || "Loading User..."}
                </h1>
                <h1 className="text-2xl">Role: {profile?.role || "Loading Role..."}</h1>
            </div>
        </main>
    </div>
    </>
}