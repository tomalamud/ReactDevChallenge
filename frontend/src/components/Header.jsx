import React from 'react';


export default function Header() {
  return (
    <>
      <div as="nav" className="bg-white drop-shadow-md">
        <div className="flex items-center justify-between h-20">
          <img className="h-8" src="https://inceptia.ai/static/images/logo.jpg" alt="Workflow" />
        </div>
      </div>
    </>
  )
}