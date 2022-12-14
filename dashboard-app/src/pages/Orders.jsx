import React from "react";
import {
  ColumnsDirective,
  GridComponent,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Page,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
  gridContent,
  toolbarClick,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg dark:text-white">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowPdfExport={true}
        allowExcelExport={true}
        toolbar={["PdfExport", "ExcelExport"]}
        onClick={() => toolbarClick}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
