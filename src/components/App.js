import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Player} from '../pages'
import { Menu, MyHeader, MyFooter } from './main'
import '../css/desktop.css'
function App() {
  return (
    <div className="App">

      <Menu />
      <Route exact path="/" component={Home}/>
      <Route path="/player" component={Player}/>
    </div>
  );
}

export default App;
