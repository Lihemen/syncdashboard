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
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../../../../assets/dummy';

const EmployeesGrid = () => {
  return (
    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'>
      <ColumnsDirective>
        {employeesGrid.map((employee, index) => (
          <ColumnDirective key={index} {...employee} />
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
          Search,
          Toolbar,
        ]}
      />
    </GridComponent>
  );
};

export default React.memo(EmployeesGrid);

