import React from "react";
import { useRef, useEffect } from "react";
import { Table2Row1 } from "../Table2/CPTable/Table2Row1";
import { Table2Row2 } from "../Table2/CPTable/Table2Row2";
import { Table2Row3 } from "../Table2/CPTable/Table2Row3";
import { Table2Row4 } from "../Table2/CPTable/Table2Row4";
import { Table2Row5 } from "../Table2/CPTable/Table2Row5";
import { Table2Row6 } from "../Table2/CPTable/Table2Row6";
import { Table2Row7 } from "../Table2/CPTable/Table2Row7";
import { Table2Row8 } from "../Table2/CPTable/Table2Row8";
import { Table2Row9 } from "../Table2/CPTable/Table2Row9";
import { Table2Row10 } from "../Table2/CPTable/Table2Row10";
import { Table2Row11 } from "../Table2/CPTable/Table2Row11";
import { Table2Row12 } from "../Table2/CPTable/Table2Row12";
import { Table2Row13 } from "../Table2/CPTable/Table2Row13";
import { Table2Row14 } from "../Table2/CPTable/Table2Row14";
import { Table2Row15 } from "../Table2/CPTable/Table2Row15";
import { Table2Row16 } from "../Table2/CPTable/Table2Row16";
import { Table2Row17 } from "../Table2/CPTable/Table2Row17";
import { Table2Row18 } from "../Table2/CPTable/Table2Row18";
import { Table2Row19 } from "../Table2/CPTable/Table2Row19";

import "../css/Table.css";
import "bootstrap/dist/css/bootstrap.css";


const TableCP = () => {
  return (
    <>
      <div className="tableContainer">
        <h1 style={{ color: "#0d6efd" }}>Pre-requisites of Striver’s CP Sheet </h1><br></br>
        <ul>
          <li><p>Before starting off CP, make sure you know one language,
            which means you how to take an input, print something, run for
            loops, snd STL/Collection for the language you are using, these
            things are more than enough to start, just don’t think you need
            everything in place to start, so just start. </p></li>
          <li><p>At first make sure your constructive algorithms are good,
            which means you can solve simple story line problems. For that my
            suggestion will be to do A2OJ ladder(alternative:
            <a href="https://a2oj.herokuapp.com/" target="_blank">https://a2oj.herokuapp.com/</a>
            ),
            50 A problems and 50 B level problems to start off with.</p></li>
        </ul>
      </div><br></br>
      <label><h1 style={{ color: "#0d6efd" }}>Striver’s CP Sheet</h1></label>
      <table className="Table" >
        <tr> <th></th>
          <th>SL. No.</th>
          <th className="col2">Problem Name</th>
          <th>Solution</th>

        </tr>
        <Table2Row1 />
        <Table2Row2 />
        <Table2Row3 />
        <Table2Row4 />
        <Table2Row5 />
        <Table2Row6 />
        <Table2Row7 />
        <Table2Row8 />
        <Table2Row9 />
        <Table2Row10 />
        <Table2Row11 />
        <Table2Row12 />
        <Table2Row13 />
        <Table2Row14 />
        <Table2Row15 />
        <Table2Row16 />
        <Table2Row17 />
        <Table2Row18 />
        <Table2Row19 />

      </table>
    </>
  );
};
export default TableCP;