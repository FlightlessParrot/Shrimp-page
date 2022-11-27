import React from 'react'
import Box from './offer_components/box'

export default function Offer()
{
    return(
        <div>
        <Box link='first' name='Strona wizytówka' />
        <Box link='second' name='Sklep internetowy'/>
        <Box link='third' name='Inne'/>
        </div>
        
    )
}