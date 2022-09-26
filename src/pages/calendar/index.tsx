import React from 'react';
import {
  ScheduleComponent,
  // ViewsDirective,
  // ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import OpacityContainer from '../../components/opacitycontainer';
import { Header } from '../../components';
import { scheduleData } from '../../assets/dummy';

const Calendar = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Calendar' />

        <ScheduleComponent
          height='650px'
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}>
          <Inject
            services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </OpacityContainer>
  );
};

export default Calendar;

