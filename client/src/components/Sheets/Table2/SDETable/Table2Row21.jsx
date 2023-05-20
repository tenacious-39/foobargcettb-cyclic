import React from "react";
import { Table3Row21 } from "../../Table3/SDETable/Table3Row21";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row21 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="21"
       heading="Binary Search Tree Part-II(8)"/>
      {isOpen && <Table3Row21/>}
  
    </tbody>
  );
};
