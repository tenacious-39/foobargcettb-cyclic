import React from "react";
import { Table3Row6 } from "../../Table3/DSATable/Table3Row6";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row6 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="6"
       heading=" Learn LinkedList [Single/Double LL, Medium, Hard] (31)"/>
      {isOpen && <Table3Row6/>}
  
    </tbody>
  );
};
