import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FooterDropDownMenu from '../Footer/FooterDropDownMenu'
import FooterDropDownLinkMenu from '../Footer/FooterDropDownLinkMenu'
import FooterEmailListing from '../Footer/FooterEmailListing'
import FooterColumnLinks from '../Footer/FooterColumnLinks'

const terms = [
    {id: 0 ,category: "Terminos y Condiciones"}, 
    {id: 1 ,category: "Politicas De Privacidad"}, 
    {id: 2 ,category: "Politicas De Cookies"}, 
    {id: 3 ,category: "Politicas De Devoluciones"}
]

const information = [
    {id: 0 ,category: "+57 3046390341"}, 
    {id: 1 ,category: "lacanameracol@gmail.com"}, 
    {id: 2 ,category: "BOG - Calle 34 # 19 - 31"}, 
    {id: 3 ,category: "CALI - Calle 5 # 64 - 48 L20"}
]

export function FooterDesktop() {
    return (
    <footer className='min-w-56 p-5 flex flex-row flex-wrap justify-evenly bg-zinc-900 text-white'>
        <div className='min-w-max px-5'>
            <FooterEmailListing />
        </div>
        <div className='min-w-max flex flex-col content-center px-4'>
            <h4 className='min-[640px]:text-lg min-[768px]:text-xl text-start'>Informacion General</h4>
            <p className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500'>+57 3046390341</p>
            <p className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500'>lacanameracol@gmail.com</p>
            <p className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500'>BOG - Calle 34 # 19 - 31</p>
            <p className='min-[640px]:text-xs min-[768px]:text-sm text-start text-zinc-500'>CALI - Calle 5 # 64 - 48 L20</p>
        </div>
        <div className='min-w-max px-5'>
            <FooterColumnLinks terms={terms} />
        </div>
    </footer>
    )
}

export function FooterMobile() { 
    return (
    <>
        <footer className='p-4 flex flex-col justify-center bg-zinc-900 text-white'>
            <FooterEmailListing />
            <FooterDropDownMenu title={"Informacion de Contacto"} terms={information} />
            <FooterDropDownLinkMenu title={"Links Legales"} terms={terms} />
        </footer>
    </>
    )
}
