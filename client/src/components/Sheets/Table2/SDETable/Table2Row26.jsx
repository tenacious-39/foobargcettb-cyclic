import React from "react";
import { Table3Row26 } from "../../Table3/SDETable/Table3Row26";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row26 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="26"
       heading="Dynamic Programming Part-II (8)"/>
      {isOpen && <Table3Row26/>}
  
    </tbody>
  );
};
