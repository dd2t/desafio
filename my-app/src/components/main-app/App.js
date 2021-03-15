import React, { useState, useEffect } from 'react'
import './App.css';
import Display from '../display/Display'
import Form from '../form/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  const [cellphoneList, setCellphones] = useState(0)


  useEffect(() => {
    fetch('/cellphone-list').then(res => res.json()).then(data => {
      setCellphones(() => ({
        cellphoneArray: data.cellphoneArray
      }));
    });
  }, []);


  return (
  <div className="App">

    <Router>
      <Switch>
        <Route exact path="/"><Display cellphoneList={cellphoneList} /></Route>
        <Route path="/cellphone"><Form /></Route>
      </Switch>
    </Router>

  </div>
  );
}

export default App;
