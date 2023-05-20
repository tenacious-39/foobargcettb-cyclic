import React from "react";
import { Table3Row14 } from "../../Table3/SDETable/Table3Row14";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row14 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="14"
       heading="Dynamic Programming(16) "/>
      {isOpen && <Table3Row14/>}
  
    </tbody>
  );
};
