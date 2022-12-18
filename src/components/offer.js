import React from 'react'
import Box from './box'
import {Outlet} from 'react-router-dom'

export default function Offer()
{
    return(<>
        <div className='boxer'>
        <Box link='first' name='Strona wizytówka' />
        <Box link='second' name='Sklep internetowy'/>
        <Box link='third' name='Pozostałe'/>
        </div>
        <Outlet></Outlet>
        </>
    )
}