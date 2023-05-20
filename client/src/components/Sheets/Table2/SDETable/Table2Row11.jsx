import React from "react";
import { Table3Row11 } from "../../Table3/SDETable/Table3Row11";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row11 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="11"
       heading="Binary Search(6)"/>
      {isOpen && <Table3Row11/>}
  
    </tbody>
  );
};
