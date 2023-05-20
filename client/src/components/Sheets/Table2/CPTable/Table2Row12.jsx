import React from "react";
import { Table3Row12 } from "../../Table3/CPTable/Table3Row12";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row12 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="12"
       heading=" Matrix Exponentiation: (basic to hard sorted) (6)"/>
      {isOpen && <Table3Row12/>}
  
    </tbody>
  );
};
