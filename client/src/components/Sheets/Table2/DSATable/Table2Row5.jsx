import React from "react";
import { Table3Row5 } from "../../Table3/DSATable/Table3Row5";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row5 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="5"
       heading="Strings [Basic and Medium] (15)"/>
      {isOpen && <Table3Row5/>}
  
    </tbody>
  );
};
