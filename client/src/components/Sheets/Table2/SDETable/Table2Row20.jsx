import React from "react";
import { Table3Row20 } from "../../Table3/SDETable/Table3Row20";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row20 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="20"
       heading="Binary Search Tree(7)"/>
      {isOpen && <Table3Row20/>}
  
    </tbody>
  );
};
