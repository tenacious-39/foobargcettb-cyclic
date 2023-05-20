import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import DashboardBodyLeft from "./DashboardBodyLeft";
import DashboardBodyRight from "./DashboardBodyRight";
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';



function DashboardBody({ user, setUser }) {
    return (
        <div className="container mt-2 mb-2 ">
            <div className="row">
                <div className="col-lg shadow rounded dashboard-container mb-2">
                    <DashboardBodyRight user={user} setUser={setUser} />
                </div>
                <div className="col-lg shadow rounded dashboard-container ms-2 mb-2">
                    <div className="mt-2 mb-2" style={{ justifyContent: "center", display: "flex" }}>
                        <CalendarMonthRoundedIcon fontSize="large" color="primary" />
                        <Typography sx={{ fontWeight: '500', color: "rgba(0, 0, 0, 1)" }} style={{ margin: "auto 0px auto 0px" }} variant="h5" gutterBottom>
                            Contest Calendar
                        </Typography>
                    </div>
                    <Divider sx={{ bgcolor: 'blue' }}></Divider>
                    <div className="mt-2 mb-4">
                        <DashboardBodyLeft />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardBody;