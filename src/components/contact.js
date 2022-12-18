import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from './box'

export default function Contact()
{
    return (<><div className='boxer'>
        <Box link='mail' name='Mail' />
        <Box link='order' name='Wycena strony'/>
        </div>
        <Outlet/></>)
}