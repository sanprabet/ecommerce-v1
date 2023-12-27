import React from 'react'

export function FooterDesktop() {
  return (
    <footer className='px-2 py-5 flex flex-row bg-zinc-900 text-white'>
        <div className='w-3/5 p-1'>
            <h3 className='text-xl'>¡Se un miembro de <span className='text-orange-400'>LosPuntos.co</span>!</h3>
            <p className='text-xs w-10/11 '>Recibe un <span className='text-orange-400'>10% OFF</span> en tu proxima compra.</p>
            <div className='flex flex-row'>
                <input className='FooterDesktopEmailInput  h-8 mt-2 px-3' type="text" placeholder='Tu Email' />
                <button className=''>Enviar</button>
            </div>
        </div>
        <div className='w-1/5'>
            a
        </div>
        <div className='w-1/5'>
            a
        </div>
  </footer>
  )
}

export function FooterMobile() {
  return (
    <footer className='p-5 flex flex-row bg-zinc-900 text-white'>
        <div className='w-1/3'>
            <h3 className='text-sm'>Se un miembro de Los puntos!!</h3>
            <p className=''>Recibe un 10% en tu proxima compra y enterate de todas nuestras promos</p>
            <input type="text" />
        </div>
        <div className='w-2/3'>
            a
        </div>
  </footer>
  )
}
