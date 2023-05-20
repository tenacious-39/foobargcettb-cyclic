import React from "react";
import { Table3Row16 } from "../../Table3/SDETable/Table3Row16";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row16 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="16"
       heading=" String Part-II (6)"/>
      {isOpen && <Table3Row16/>}
  
    </tbody>
  );
};
