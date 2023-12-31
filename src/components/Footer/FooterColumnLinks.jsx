import React from 'react'
import { Link } from 'react-router-dom'

function FooterColumnLinks({ terms }) {
  return (
    <div className='px-4'>
        <h4 className='min-[640px]:text-lg min-[768px]:text-xl text-start'>Links Legales</h4>
        <ul>
          {
            terms.map((term) => (
                <li key={term.id} className='min-[640px]:h-4 min-[768px]:h-5'>
                    <Link to="term/a" className='min-[640px]:text-xs min-[768px]:text-sm text-zinc-500 text-start hover:underline'>{term.category}</Link>
                </li>
          ))}
        </ul>
    </div>
  )
}

export default FooterColumnLinks