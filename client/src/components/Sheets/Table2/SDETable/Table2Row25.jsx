import React from "react";
import { Table3Row25 } from "../../Table3/SDETable/Table3Row25";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row25 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="25"
       heading="Dynamic Programming (7)"/>
      {isOpen && <Table3Row25/>}
  
    </tbody>
  );
};
