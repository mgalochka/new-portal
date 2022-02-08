import React from 'react';

import { NavLink } from 'react-router-dom';

import {routMain as routMainPage} from 'pages/MainPage';
import {routMain as routNewsListPage} from 'pages/NewsListPage';
import {routMain as routContact} from 'pages/Contact';

import './styles.scss';


const Header = () => {
  return (
      <header className="MainHeader">
          <div className='title' >Новостник</div>
          <nav>
            <NavLink to={routMainPage} activeClassName={'linkActive'} >
              Главная
            </NavLink>
            <NavLink to={routNewsListPage} activeClassName={'linkActive'}>
              Новости
            </NavLink>
            <NavLink to={routContact} activeClassName={'linkActive'}>
              Контакты
            </NavLink>
          </nav>
      </header>
    );
}

export default Header;