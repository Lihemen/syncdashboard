import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../../../../assets/dummy';

const CustomersGrid = () => {
  return (
    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete', 'Search']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width='auto'>
      <ColumnsDirective>
        {customersGrid.map((customer, index) => (
          <ColumnDirective key={index} {...customer} />
        ))}
      </ColumnsDirective>

      <Inject
        services={[Page, Selection, Edit, Toolbar, Filter, Sort, Search]}
      />
    </GridComponent>
  );
};

export default React.memo(CustomersGrid);

