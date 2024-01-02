import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FooterDropDownMenu from '../components/Footer/FooterDropDownMenu'
import FooterDropDownLinkMenu from '../components/Footer/FooterDropDownLinkMenu'
import FooterEmailListing from '../components/Footer/FooterEmailListing'
import FooterColumnLinks from '../components/Footer/FooterColumnLinks'
import FooterColumnText from '../components/Footer/FooterColumnText'

const legal_info_links = {
    title: "Links Legales",
    items: [
        {id: 0 ,category: "Terminos y Condiciones", link_adress: "/terms/termsandconditions"}, 
        {id: 1 ,category: "Politicas De Privacidad", link_adress: "/terms/privacypolicy"}, 
        {id: 2 ,category: "Politicas De Cookies", link_adress: "/terms/cookiespolicy"}, 
        {id: 3 ,category: "Politicas De Devoluciones", link_adress: "/terms/refundpolicy"}
    ]
}

const categories_link = {
    title: "Categorias",
    items: [
        {id: 0 ,category: "Bongs, Pipas, Blunt", link_adress: "/products/para-prender"}, 
        {id: 1 ,category: "Grinders, Bandejas, Caletas", link_adress: "/products/para-armar"}, 
        {id: 2 ,category: "Semillas Feminizadas", link_adress: "/products/semillas"}, 
        {id: 3 ,category: "Luces, Filtros, Macetas", link_adress: "/products/autocultivo"},
        {id: 4 ,category: "Esquejes, Tierra", link_adress: "/produtcs/insumos"},
    ]
}

const information_column = {
    title: "Contacto",
    items: [
        {id: 0 ,category: "+57 3046390341"}, 
        {id: 1 ,category: "lacanameracol@gmail.com"}, 
        {id: 2 ,category: "BOG - Calle 34 # 19 - 31"}, 
        {id: 3 ,category: "CALI - Calle 5 # 64 - 48 L20"}
    ]
}

export function FooterDesktop() {
    return (
    <footer className='min-w-56 min-[768px]:p-5 flex flex-row flex-wrap justify-around bg-zinc-900 text-white'>
        <div className='min-[768px]:w-max px-5'>
            <FooterEmailListing />
        </div>
        <div className='min-[768px]:w-max px-5'>
            <FooterColumnText title={information_column.title} items={information_column.items}/>
        </div>
        <div className='min-[768px]:w-max px-5'>
            <FooterColumnLinks title={legal_info_links.title} terms={legal_info_links.items} />
        </div>
        <div className='min-[768px]:w-max px-5'>
            <FooterColumnLinks title={categories_link.title} terms={categories_link.items} />
        </div>
    </footer>
    )
}

export function FooterMobile() { 
    return (
    <>
        <footer className='p-4 flex flex-col justify-center bg-zinc-900 text-white'>
            <div className='mx-auto'>
                <FooterEmailListing />
            </div>
            <FooterDropDownLinkMenu title={legal_info_links.title} terms={legal_info_links.items} />
            <FooterDropDownLinkMenu title={categories_link.title} terms={categories_link.items} />
            <FooterDropDownMenu title={information_column.title} terms={information_column.items} />
        </footer>
    </>
    )
}
