import React from "react";
import { Table2Row1 } from "../Table2/DSATable/Table2Row1";
import { Table2Row2 } from "../Table2/DSATable/Table2Row2";
import { Table2Row3 } from "../Table2/DSATable/Table2Row3";
import { Table2Row4 } from "../Table2/DSATable/Table2Row4";
import { Table2Row5 } from "../Table2/DSATable/Table2Row5";
import { Table2Row6 } from "../Table2/DSATable/Table2Row6";
import { Table2Row7 } from "../Table2/DSATable/Table2Row7";
import { Table2Row8 } from "../Table2/DSATable/Table2Row8";
import { Table2Row9 } from "../Table2/DSATable/Table2Row9";
import { Table2Row10 } from "../Table2/DSATable/Table2Row10";
import { Table2Row11 } from "../Table2/DSATable/Table2Row11";
import { Table2Row12 } from "../Table2/DSATable/Table2Row12";
import { Table2Row13 } from "../Table2/DSATable/Table2Row13";
import { Table2Row14 } from "../Table2/DSATable/Table2Row14";
import { Table2Row15 } from "../Table2/DSATable/Table2Row15";
import { Table2Row16 } from "../Table2/DSATable/Table2Row16";
import { Table2Row17 } from "../Table2/DSATable/Table2Row17";
import { Table2Row18 } from "../Table2/DSATable/Table2Row18";
import "../css/Table.css";
import "bootstrap/dist/css/bootstrap.css";


const TableDSA = () => {
  return (
    <>
      <div className="tableContainer">
        <h1 style={{ color: "#0d6efd" }}>What is Striver's A2Z DSA Course/Sheet? </h1><br></br>
        <p>This course is made for people who want to learn DSA from A to Z for free in a
          well-organized and structured manner. The lecture quality is better than what you get
          in paid courses, the only thing we don’t provide is doubt support, but trust me
          our YouTube video comments resolve that as well.There might be a lot of existing
          courses/sheets in the market, but this is better in terms of structure, and the number of
          questions we will be doing. We just don’t teach the basics,
          we cover all the varieties, and we go in super depth for each topic, so that you
          are well prepared for any of your interviews.</p>
      </div><br></br>
      <label><h1 style={{ color: "#0d6efd" }}>Striver's A2Z DSA Course/Sheet</h1></label>
      <table className="Table" >
        <tr> <th></th>
          <th>SL. No.</th>
          <th className="col2">Topic/Article</th>
          <th>GfG</th>
          <th>Solution</th>
          <th>Leetcode</th>
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
      </table>
    </>
  );
};
export default TableDSA;