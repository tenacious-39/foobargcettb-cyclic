import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"


function CreateCards(props) {
    return (<>
        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
            <img className="card-img-top" src={props.imgSrc} alt={props.heading} />
            <div className="card-body">
                <a href={props.channelUrl} target="_blank" className="resource-card-a">by {props.channel}</a>
            </div>
        </div >
    </>);
}

export default CreateCards;