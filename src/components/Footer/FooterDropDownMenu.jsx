import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DownArrow from "../../static/Icons/down-arrow.svg"

function FooterDropDownMenu({title, terms}) {
    const[menuOpened, setMenuOpened] = useState(false);
    const menu_style = menuOpened? "opened": "closed hidden";
    return (
    <div className="w-full">
        <div className='flex flex-row justify-center text-xl'>
            <p className='min-[100px]:text-base min-[640px]:text-lg text-center'>{title}</p>
            <img onClick={() => setMenuOpened(!menuOpened)} className="h-6 w-6 min-[100px]:pt-1 min-[640px]:pt-2 min-[100px]:h-5 min-[640px]:h-6" src={DownArrow} alt="down Arrow" />
        </div>
        <div className={"py-1 w-full flex flex-col justify-items-center text-gray-100 " + menu_style}>
            {
                terms.map((term) => (
                   <div key={term.id} className='min-[100px]:h-5 min-[640px]:h-6 w-full flex justify-center'>
                       <div className='min-w-72 border-white text-center'>
                           <p className='min-[100px]:text-xs min-[640px]:text-sm'>{term.category}</p>
                       </div>
                   </div>
                ))
            }
        </div>
    </div>
  )
 }
 

export default FooterDropDownMenu