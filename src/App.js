import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/resouces" component={Header} />
      </Switch>
    </div>
  )
}
