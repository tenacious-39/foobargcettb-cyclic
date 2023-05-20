import React from "react";
import { Table3Row22 } from "../../Table3/SDETable/Table3Row22";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row22 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="22"
       heading="Binary Trees[Miscellaneous](6)"/>
      {isOpen && <Table3Row22/>}
  
    </tbody>
  );
};
