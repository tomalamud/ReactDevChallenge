import React from 'react';
import Sidebar from './Sidebar';
import Panel from './Panel';
import Header from './Header';

function MainView() {
  return (
    <>
      <Header/>
      <div className='flex'>        
        <Sidebar className="grow"/>
        <Panel className="grow-[2]"/>
      </div>
    </>
  )
}

export default MainView