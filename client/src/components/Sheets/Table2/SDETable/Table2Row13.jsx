import React from "react";
import { Table3Row13 } from "../../Table3/SDETable/Table3Row13";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row13 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="13"
       heading="Stack and Queue(6)"/>
      {isOpen && <Table3Row13/>}
  
    </tbody>
  );
};
