import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import CodingImage from "../images/coding.png"


function CreatePracticeCards(props) {
    return (<>
        <a href={props.hrUrl} target="_blank" className="resource-card-a">
            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card">
                <img className="card-img-top" src={props.url} alt={props.heading} />
                <div className="mt-2" style={{ textAlign: "center" }}>
                    <h4>
                        {props.heading} practice problems
                    </h4>
                </div>
            </div >
        </a >

    </>);
}

export default CreatePracticeCards;