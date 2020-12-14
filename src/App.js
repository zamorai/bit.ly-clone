import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/pages/main/Main';

export default function App() { 
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Main}/> 
      </Switch>
    </div>
  ) 
}