import React from "react";
import { Table3Row10 } from "../../Table3/CPTable/Table3Row10";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row10 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="10"
       heading="LCA (12)"/>
      {isOpen && <Table3Row10/>}
  
    </tbody>
  );
};
