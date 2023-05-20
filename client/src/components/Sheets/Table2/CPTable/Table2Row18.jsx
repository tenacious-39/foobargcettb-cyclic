import React from "react";
import { Table3Row18 } from "../../Table3/CPTable/Table3Row18";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row18 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="18"
       heading="Segment Tree(lazy also included) (15)"/>
      {isOpen && <Table3Row18/>}
  
    </tbody>
  );
};
