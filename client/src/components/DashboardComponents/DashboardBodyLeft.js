import React from "react";
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CreateCard(props) {
    return (
        <div className="col mb-2">
            <NavLink to={props.navURL}>
                <Card sx={{ maxWidth: 345 }} className="shadow">
                    <img className="img-fluid ps-2 pe-2 mt-2 mb-2" src={props.url} alt="Card image cap" />
                    <CardActions>
                        <div className="card-body text-center  mt-2 ms-2 me-2">
                            <div className="btn btn-primary">{props.name}</div>
                        </div>
                    </CardActions>
                </Card>
            </NavLink>
        </div >
    );
}

function DashboardBodyLeft() {
    return (
        <>
            <div className="row">
                <CreateCard
                    navURL="/dashboard/kickstart"
                    name="Google"
                    url="https://www.maxpixel.net/static/photo/1x/Google-Seo-Logo-Brand-2015-Search-Internet-1015751.png"
                />

                <CreateCard
                    navURL="/dashboard/codechef"
                    name="Codechef"
                    url="https://cdn.codechef.com/images/cc-logo.svg"
                />
            </div>
            <div className="row">
                <CreateCard
                    navURL="/dashboard/leetcode"
                    name="Leetcode"
                    url="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                />
                <CreateCard
                    navURL="/dashboard/geeksforgeeks"
                    name="GeeksforGeeks"
                    url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                />
            </div>
            <div className="row">
                <CreateCard
                    navURL="/dashboard/hackerrank"
                    name="Hackerrank"
                    url="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                />
                <CreateCard
                    navURL="/dashboard/codeforces"
                    name="Codeforces"
                    url="https://codeforces.org/s/53789/images/codeforces-sponsored-by-ton.png"
                />
            </div>
        </>
    );
}

export default DashboardBodyLeft;