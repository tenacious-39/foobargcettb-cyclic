import React from "react";
import { Table3Row10 } from "../../Table3/DSATable/Table3Row10";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row10 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="10"
       heading="Sliding Window & Two Pointer Combined Problems (12)"/>
      {isOpen && <Table3Row10/>}
  
    </tbody>
  );
};
