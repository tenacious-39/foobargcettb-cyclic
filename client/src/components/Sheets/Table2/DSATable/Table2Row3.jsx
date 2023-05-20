import React from "react";
import { Table3Row3 } from "../../Table3/DSATable/Table3Row3";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row3 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <CreateTable2 isOpen={isOpen} toggle={toggle} serial="3"
       heading="Solve Problems on Arrays (Easy - Medium - Hard) (39)"/>
      {isOpen && <Table3Row3/>}
    
    </tbody>
  );
};
