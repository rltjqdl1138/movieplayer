import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Viewer} from '../pages'
import { Menu, MyHeader, MyFooter } from './main'
import '../css/desktop.css'
function App() {
  return (
    <div className="App">

      <Menu />
      <Route exact path="/" component={Home}/>
      <Route path="/viewer" component={Viewer}/>
    </div>
  );
}

export default App;
