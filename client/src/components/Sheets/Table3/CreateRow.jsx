 import React from 'react';
 import gfg from '../Images/gfg.svg';
 import youtube from '../Images/youtube.svg';
 import leetcode from '../Images/leetcode.svg';
 import  "../css/Table.css";


 const CreateRow = (props) => {
    return (
   
    <tr>
        <td></td>
        <td>{props.serial}</td>
        <td>{props.heading} </td>
        <td><a href={props.gfg} target="_blank" ><img className={props.gfg===null? "noLogo":"logo"} src={gfg} alt="link" /></a></td>
        <td><a href={props.sol}target="_blank" ><img className={props.sol===null? "noLogo":"logo"} src={youtube} alt="link" /></a></td>
        <td><a href={props.lc} target="_blank" ><img className={props.lc===null? "noLogo":"logo"} src={leetcode} alt="link" /></a></td>
       
      </tr>
      )
    }
    export default CreateRow;