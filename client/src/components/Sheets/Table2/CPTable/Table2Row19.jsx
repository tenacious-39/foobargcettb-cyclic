import React from "react";
import { Table3Row19 } from "../../Table3/CPTable/Table3Row19";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row19 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="19"
       heading="Lazy propagation (6)"/>
      {isOpen && <Table3Row19/>}
  
    </tbody>
  );
};
