import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser } from '../redux/ducks/userToken';


export default function Header() {
  // const dispatch = useDispatch();
  // const token = useSelector(state => state.user.userToken)
  // const logOutHandler = () => {
  //   dispatch(setUser({userToken: undefined}))
  //   console.log(token)
  // }
  return (
    <>
      <div as="nav" className="bg-white drop-shadow-md">
        <div className="flex items-center justify-between h-20 px-5">
          <img className="h-8" src="https://inceptia.ai/static/images/logo.jpg" alt="Workflow" />
          {/* <button className='p-2 bg-slate-400 rounded-md' onClick={logOutHandler}>Sing Out</button> */}
        </div>
      </div>
    </>
  )
}