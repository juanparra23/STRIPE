import React from 'react'
import Link from 'next/link';
import { link } from 'fs';

interface Indexprops{
    title: string;
    link: string;
}

const index = ({title="title", link="/"} : Indexprops) => {
  return (
    <Link href ={link}>
        <div className='h- justify-center text-bank2 items-center hover:text-bank2 cursor-pointer hover:border-b-2 hover:border-bank1'>
            <h1 className='text-sm text-bank3 font-normal '>{title}</h1>     
        </div>
    </Link>
  )
}

export default index