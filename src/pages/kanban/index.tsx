import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
} from '@syncfusion/ej2-react-kanban';

import { Header } from '../../components';
import OpacityContainer from '../../components/opacitycontainer';

import { kanbanData, kanbanGrid } from '../../assets/dummy';
import { ColumnDirective } from '@syncfusion/ej2-react-charts';

const Kanban = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Kanban Board' />

        <KanbanComponent
          keyField='Status'
          dataSource={kanbanData}
          cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
          swimlaneSettings={{ keyField: 'Assignee' }}>
          <ColumnsDirective>
            {kanbanGrid.map((board, index) => (
              <ColumnDirective key={index} {...board} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </OpacityContainer>
  );
};

export default Kanban;

