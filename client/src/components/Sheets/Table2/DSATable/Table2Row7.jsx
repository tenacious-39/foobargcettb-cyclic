import React from "react";
import { Table3Row7 } from "../../Table3/DSATable/Table3Row7";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row7 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="7"
       heading="Recursion [PatternWise] (25)"/>
      {isOpen && <Table3Row7/>}
  
    </tbody>
  );
};
