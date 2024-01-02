import React from 'react'
import { Link } from 'react-router-dom'

function FooterColumnLinks({ title, terms }) {
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

export default FooterColumnLinks