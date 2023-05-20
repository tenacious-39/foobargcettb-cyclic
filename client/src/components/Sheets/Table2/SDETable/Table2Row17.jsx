import React from "react";
import { Table3Row17 } from "../../Table3/SDETable/Table3Row17";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row17 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="17"
       heading="Binary Tree (12)"/>
      {isOpen && <Table3Row17/>}
  
    </tbody>
  );
};
