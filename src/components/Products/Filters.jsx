import React, { useState } from 'react'
import ArrowDown from "../../static/Icons/arrow-down.svg"
import ArrowUp from "../../static/Icons/arrow-up.svg"

export function Filter({children, title}){
  const[filterOpened, setFilterOpened] = useState(false)
  const style_opened = filterOpened? "": " hidden"
  return(
    <>
      <div className="w-full mr-2 flex flex-row">
        <span className='mr-1 font-bold'>{title}</span>
        <img className='h-3.5 my-auto' src={filterOpened? ArrowUp:ArrowDown} alt="Arrow Down" onClick={() => setFilterOpened(!filterOpened)} />
      </div>
      <div className={'w-full' + style_opened}>
        {children}
      </div>
    </>
  )
}

const filters = [
  {id:0, name:"Filter", filterComponent:<div>aaa</div>},
  {id:1, name:"Filter", filterComponent:<div>aaa</div>},
]

export function Filters(){
  return(
    <section className='w-full'>
      {
        filters.map((filter) => (
          <Filter key={filter.id} title={filter.name}>
            {filter.filterComponent}
          </Filter>
        ))
      }
    </section>
  )
}