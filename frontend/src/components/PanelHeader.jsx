import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

function PanelHeader() {
  const [toggleUserInfo, setToggleUserInfo] = useState(false);
  const [data, setData] = useState(undefined);
  const authToken = useSelector(state => state.user.userToken);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://admindev.inceptia.ai/api/v1/clients/`, {
        headers: {
          'Authorization': `JWT ${authToken}`
        }
      })
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  },[])
  return (
    <>
      <div onClick={() => setToggleUserInfo(!toggleUserInfo)} className='cursor-pointer h-16 w-full flex justify-between bg-slate-400 px-4 items-center'>Usuarios activos
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      {toggleUserInfo && (
        <div className='w-full bg-slate-300 px-4'>
          {data[0].users.map((user) => (
            <div className='py-4 border-b flex justify-between items-center'>
              <div>id: {user.id}</div> 
              <div>{user.email}</div> 
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default PanelHeader