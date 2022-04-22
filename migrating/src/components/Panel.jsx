import React from 'react'
import BasicDateRangePicker from './DatePicker';
import PanelHeader from './PanelHeader'
import ColumnGroupingTable from './Table';

function Panel() {
  return (
    <>
      <div className='bg-gray-200 w-full h-screen'>
        <PanelHeader/>
        <div className='h-20 w-full flex justify-between bg-white px-4 items-center'>Detalle 
          <div className='bg-gray-100'>
            {/* Date-Filter Component */}
            <BasicDateRangePicker/>
          </div>
        </div>
        <ColumnGroupingTable/>
      </div>
    </>
  )
}

export default Panel