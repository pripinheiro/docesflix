import React from 'react';
import Logo from '../../assets/img/Logo.png'
//import {LogoImage, MenuWrapper} from './style.js'
import ButtonLink from '../ButtonLink/index.js'
import {Link} from 'react-router-dom';

import './menu.css'


//import ButtonLink from '../../componetes/ButtonLink';

function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Docesflix'/> 
            </Link>
            <ButtonLink as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;