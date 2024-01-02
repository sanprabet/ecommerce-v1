import React from 'react'

function FooterColumnText({title, items}) {

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

export default FooterColumnText