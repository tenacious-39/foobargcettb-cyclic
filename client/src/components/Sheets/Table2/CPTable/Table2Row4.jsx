import React from "react";
import { Table3Row4 } from "../../Table3/CPTable/Table3Row4";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row4 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <CreateTable2 isOpen={isOpen} toggle={toggle} serial="4"
       heading="Prime, Sieve, Prime Factorisation(10)"/>
      {isOpen && <Table3Row4/>}
     
    </tbody>
  );
};
