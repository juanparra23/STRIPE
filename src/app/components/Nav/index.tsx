import React from 'react'
import Icon from "..//Atoms/Icon"
import NavTitle from "../Atoms/NavTitle"
const index = () => {
  return (
    <nav className=' flex flex-row justify-between bg-slate-600  h-20 w-full bg-bank1 shadow-md '>
        <div className="">
                <img src="/Logo.png " className="w-20 h-20" alt="Logo" />
            </div>
        <div className='flex flex-row items-center  justify-betweenfont-bold  gap-20 w-1/3'>
            <NavTitle title='computadores' link=''/>
            <NavTitle title='pantallas' link=''/>
            <NavTitle title='lapto' link=''/>
            <NavTitle title='Boards' link=''/>
        </div>
            <div>
            <button  >
            <Icon icon="mdi-light:cart"  />
            </button>
        </div>
      
    </nav>
  )
}

export default index