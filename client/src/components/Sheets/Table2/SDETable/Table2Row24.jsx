import React from "react";
import { Table3Row24 } from "../../Table3/SDETable/Table3Row24";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row24 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="24"
       heading="Graph Part-II (6)"/>
      {isOpen && <Table3Row24/>}
  
    </tbody>
  );
};
