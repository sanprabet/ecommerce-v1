import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//Images
import DownArrow from "../../static/Icons/down-arrow.svg"

function FooterDropDownLinkMenu({title, terms}) {
    const[menuOpened, setMenuOpened] = useState(false);
    const menu_style = menuOpened? "w-full py-1 flex flex-col justify-items-center text-gray-300": "hidden";

    return (
    <div className="w-full">
        <div className='flex flex-row justify-center text-xl'>
            <p className='min-[100px]:text-base min-[640px]:text-lg text-center'>{title}</p>
            <img onClick={() => setMenuOpened(!menuOpened)} className="h-6 w-6 min-[100px]:pt-1 min-[640px]:pt-2 min-[100px]:h-5 min-[640px]:h-6" src={DownArrow} alt="down Arrow" />
        </div>
        <div className={menu_style}>
            {
                terms.map((term) => (
                   <Link to="/terms" key={term.id} className='w-full min-[100px]:h-5 min-[640px]:h-6 flex justify-center'>
                       <div className='min-w-72 text-center border-white hover:border-b-2'>
                           <p className='min-[100px]:text-xs min-[640px]:text-sm'>{term.category}</p>
                       </div>
                   </Link>
                ))
            }
        </div>
    </div>
  )
 }
 

export default FooterDropDownLinkMenu