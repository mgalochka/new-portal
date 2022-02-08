import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MainPage, {routMain as routMainPage} from 'pages/MainPage';
import NewsListPage, {routMain as routNewsListPage} from 'pages/NewsListPage';
import NewsDetail, {routMain as routNewsDetail} from 'pages/NewsDetail';
import Contact, {routMain as routContact} from 'pages/Contact';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './styles.scss';

const AppContent = () => {
  return (
    <div className="MainWrapper">
      <Header/>
      <main> 
        <Switch>
            <Route exact path={routMainPage()} component={MainPage} />
            <Route exact path={routNewsListPage()} component={NewsListPage} />
            <Route exact path={routNewsDetail()} component={NewsDetail} />
            <Route exact path={routContact()} component={Contact} />
            <Redirect
                to={{
                    pathname: routMainPage()
                }}
            />
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default AppContent;