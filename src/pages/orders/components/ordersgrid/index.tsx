import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  ContextMenu,
  Resize,
  PdfExport,
  Edit,
  Sort,
  ExcelExport,
  Filter,
  Inject,
  Page,
} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../../../../assets/dummy';

const OrdersGrid = () => {
  return (
    <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting>
      <ColumnsDirective>
        {ordersGrid.map((order, index) => (
          <ColumnDirective key={index} {...order} />
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
        ]}
      />
    </GridComponent>
  );
};

export default React.memo(OrdersGrid);

