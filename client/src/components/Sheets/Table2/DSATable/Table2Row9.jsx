import React from "react";
import { Table3Row9 } from "../../Table3/DSATable/Table3Row9";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row9 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="9"
       heading="Stack and Queues [Pre-In-Post-fix, Monotonic Stack] (32)"/>
      {isOpen && <Table3Row9/>}
  
    </tbody>
  );
};
