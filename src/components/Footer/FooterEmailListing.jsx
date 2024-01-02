import React from 'react'

function FooterEmailListing() {
  return (
    <div className='w-full pb-4 flex flex-col justify-start'>
        <h3 className='min-[640px]:text-lg min-[768px]:text-lg text-start'>¡Se un miembro de <span className='text-orange-400'>LosPuntos.co</span>!</h3>
        <p className='w-10/11 min-[100px]:text-xs min-[768px]:text-sm text-start'>Recibe un <span className='text-orange-400'>10% OFF</span> en tu proxima compra.</p>
        <div className='w-64 min-w-fit flex rounded-l-lg'>
            <input className='w-2/3 h-12 mt-2 px-3 text-black border-y-4 border-l-4 rounded-l-lg border-gray-500 focus:outline-none focus-visible:outline-none ' type="text" placeholder='Tu Email' />
            <button className='w-1/3 h-12 mt-2 px-4 py-1 text-white rounded-r-lg bg-green-700 border-y-4 border-r-4 border-gray-500'>
                <span className='text-sm text-white leading-3'>Enviar</span>
            </button>
        </div>
    </div>
  )
}

export default FooterEmailListing