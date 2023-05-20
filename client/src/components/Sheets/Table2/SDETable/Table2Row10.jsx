import React from "react";
import { Table3Row10 } from "../../Table3/SDETable/Table3Row10";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row10 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="10"
       heading="Recursion and Backtracking(6)"/>
      {isOpen && <Table3Row10/>}
  
    </tbody>
  );
};
