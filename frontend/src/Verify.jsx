import React from 'react'
import { useState } from 'react';

const Verify = () => {
    const [rfid, setRfid] = useState(); 
    const [irfid, setIrfid] = useState(); 

    const onInsert = () => {

    }

    const onVerify = () => {

    }

  return (
    <div className=' h-screen flex items-center justify-center'>
        <div className="h-3/4 w-1/2 bg-blue-100 rounded-lg p-12 ">
            <div className="rounded-b-3xl rounded-t-lg flex-col ">
                <div className="flex">
                    <h1 className='text-3xl'>REGISTER YOUR RFID</h1>
                </div>
                <input type="text" value={irfid} className=" w-full h-12 opacity-30 bg-white border-transparent rounded-3xl px-12 mt-4" placeholder= "Refugee Address" onChange={(e)=>setIrfid( e.target.value )}/>
                <button className='bg-blue-200 w-full mt-4 h-12 rounded-3xl text-blue-900 font-semibold' onClick={onInsert}>INSERT</button>
            </div>
            
            <div className="rounded-b-3xl rounded-t-lg flex-col mt-16">
                <div className="flex">
                    <h1 className='text-3xl'>VERIFY YOUR RFID</h1>
                </div>
                <input type="text" value={rfid} className=" w-full h-12 opacity-30 bg-white border-transparent rounded-3xl px-12 mt-4" placeholder= "Refugee Address" onChange={(e)=>setRfid( e.target.value )}/>
                <button className='bg-blue-200 w-full mt-4 h-12 rounded-3xl text-blue-900 font-semibold' onClick={onVerify}>VERIFY</button>
            </div>
        </div>
    </div>
  )
}

export default Verify