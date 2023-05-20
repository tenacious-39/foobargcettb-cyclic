import React from 'react';
 import codeforce from '../../Images/codeforce.svg';
 import  "../../css/Table.css";


 const CreateCPRow = (props) => {
    return (
   
    <tr>
        <td></td>
        <td>{props.serial}</td>
        <td>{props.heading} </td>
        <td><a href={props.sol} target="_blank" ><img className={props.sol===null? "noLogo":"logo"} src={codeforce} alt="link" /></a></td>
       
      </tr>
      )
    }
    export default CreateCPRow;