import React from "react";
import { Table3Row15 } from "../../Table3/CPTable/Table3Row15";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row15 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="15"
       heading="Disjoint Set(10) "/>
      {isOpen && <Table3Row15/>}
  
    </tbody>
  );
};
