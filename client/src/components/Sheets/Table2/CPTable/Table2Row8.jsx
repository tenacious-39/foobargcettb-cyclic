import React from "react";
import { Table3Row8 } from "../../Table3/CPTable/Table3Row8";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row8 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="8"
       heading="BFS (1)"/>
      {isOpen && <Table3Row8/>}
  
    </tbody>
  );
};
