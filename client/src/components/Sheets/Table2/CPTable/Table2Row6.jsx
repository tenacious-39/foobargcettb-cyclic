import React from "react";
import { Table3Row6 } from "../../Table3/CPTable/Table3Row6";
import useOpenController from "../useOpenController.js";
import CreateTable2 from "../CreateTable2.jsx";

export const Table2Row6 = () => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
    <CreateTable2 isOpen={isOpen} toggle={toggle} serial="6"
       heading=" Stack/Queues/PriorityQueues(13) "/>
      {isOpen && <Table3Row6/>}
  
    </tbody>
  );
};
