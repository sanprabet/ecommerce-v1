import React from 'react'
import { Link } from 'react-router-dom'

export function DesktopFooterColumnText({title, items}) {
  return (
    <div className='flex flex-col content-center'>
        <h4 className='min-[640px]:text-lg min-[768px]:text-xl text-start'>{title}</h4>
        { items.map((item) => (
            <p key={item.id} className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500'>{item.category}</p>
          ))
        }
        
    </div>
  )
}


export function DesktopFooterColumnLinks({ title, terms }) {
  return (
    <div className=''>
        <h4 className='min-[640px]:text-lg min-[768px]:text-xl text-start'>{title}</h4>
        <ul>
          {
            terms.map((term) => (
                <li key={term.id} >
                    <Link to="/term" className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500 hover:underline'>{term.category}</Link>
                </li>
          ))}
        </ul>
    </div>
  )
}