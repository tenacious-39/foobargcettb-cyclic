import React from "react";
import DashboardBody from "./DashboardComponents/DashboardBody";
import Divider from '@mui/material/Divider';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css"
import DashboardHeading from "./DashboardComponents/DashboardHeading";

function Dashboard({ user, setUser }) {
    return (
        <>
            <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                <DashboardHeading />
                <Divider sx={{ bgcolor: 'blue' }}></Divider>
                <DashboardBody user={user} setUser={setUser} />
            </div >
        </>
    );
}

export default Dashboard;