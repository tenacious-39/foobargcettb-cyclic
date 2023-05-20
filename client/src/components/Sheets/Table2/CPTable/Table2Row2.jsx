import React from "react";
import { Table3Row2 } from "../../Table3/CPTable/Table3Row2";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row2 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <CreateTable2 isOpen={isOpen} toggle={toggle} serial="2"
       heading=" Maths(50)"/>
      {isOpen && <Table3Row2/>}
    </tbody>
  );
};
