import React from "react";
import { Table3Row1 } from "../../Table3/DSATable/Table3Row1";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row1 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
       <CreateTable2 isOpen={isOpen} toggle={toggle} serial="1"
       heading="Learn the basics (29)"/>
      {isOpen && <Table3Row1/>}
    </tbody>
  );
};
