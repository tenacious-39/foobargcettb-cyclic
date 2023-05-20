
import React from "react";
import { ExpendableButton } from "../ExpendableButton.jsx";
import  "../css/Table.css";

const CreateTable2 = (props) => {
    return (
        <tr className="TableRow">
            <td >
                <ExpendableButton isOpen={props.isOpen} toggle={props.toggle} />
            </td>
            <td><b>{props.serial}</b></td>
            <td><b> {props.heading} </b></td>
    
        </tr>
        )
}
export default CreateTable2;